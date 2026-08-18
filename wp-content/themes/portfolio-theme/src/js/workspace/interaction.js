import * as THREE from 'three';
import { LAMP_STATES } from './scene.js';

// Small, restrained magnitudes throughout — this is meant to read as "the
// scene subtly responds to you," never as a game/UI widget. Monitor gets a
// visibly larger hover response than the other three nav objects, per the
// interaction hierarchy (it's the primary destination).
const MAX_PARALLAX_X = 0.05;
const MAX_PARALLAX_Y = 0.032;
const PARALLAX_DAMPING = 0.09;
const HOVER_DAMPING = 0.15;
const LAMP_DAMPING = 0.08;

// Clicking a nav object dollies the camera toward it while the page fades
// to the (matching) body background, then navigates — a short, one-shot
// cinematic push rather than a teleport cut. 0.6 = how far toward the
// object the camera travels (never fully into it, which would clip through
// geometry). Kept in sync with the CSS transition duration on
// #page-transition-container so the fade completes right as the push lands.
const PUSH_IN_DURATION = 550;
const PUSH_IN_DISTANCE = 0.6;

const HOVER_SCALE_BOOST = {
	monitor: 0.05,
	terminal: 0.025,
	notebook: 0.025,
	phone: 0.025,
};

const HOVER_EMISSIVE_BOOST = {
	monitor: 0.35,
	terminal: 0.25,
	phone: 0.22,
};

const NAV_OBJECT_IDS = [ 'monitor', 'notebook', 'phone', 'terminal' ];

function findInteractionId( object ) {
	let current = object;
	while ( current ) {
		if ( current.userData && current.userData.interactionId ) {
			return current.userData.interactionId;
		}
		current = current.parent;
	}
	return null;
}

function collectScreenMeshes( object ) {
	const screens = [];
	object.traverse( ( child ) => {
		if ( child.userData && child.userData.isScreen ) {
			screens.push( child );
		}
	} );
	return screens;
}

/**
 * Drives camera parallax, hover/tap affordances, the lamp toggle, and click
 * navigation on top of the already-built, already-framed static scene.
 * Nothing here touches geometry, materials' base values, or the camera's
 * neutral framing — it only ever applies small, damped offsets on top of
 * whatever frameCamera() last computed, so a resize/reframe is always the
 * true resting state.
 */
export class WorkspaceInteraction {
	constructor( { canvas, camera, interactive, links, reducedMotion, requestRender } ) {
		this.canvas = canvas;
		this.camera = camera;
		this.interactive = interactive;
		this.links = links || {};
		this.reducedMotion = reducedMotion;
		this.requestRender = requestRender || ( () => {} );

		this.raycaster = new THREE.Raycaster();
		this.pointerNdc = new THREE.Vector2( 0, 0 );
		this.pointerActive = false;

		this.parallaxTarget = new THREE.Vector2( 0, 0 );
		this.parallaxCurrent = new THREE.Vector2( 0, 0 );
		this._offset = new THREE.Vector3();
		this._camPosition = new THREE.Vector3();

		this.hoverId = null;
		this.hoverAmounts = { monitor: 0, terminal: 0, notebook: 0, phone: 0 };

		this._raycastTargets = NAV_OBJECT_IDS.map( ( id ) => this.interactive[ id ] ).concat( [
			this.interactive.lamp.group,
		] );
		this._screenMeshes = {
			monitor: collectScreenMeshes( this.interactive.monitor ),
			terminal: collectScreenMeshes( this.interactive.terminal ),
			phone: collectScreenMeshes( this.interactive.phone ),
		};

		// The locked visual design starts with the lamp on.
		this.lampOn = true;
		this.lampTransition = 1;

		this.transitioning = false;
		this._transition = null;
		this._lookAtScratch = new THREE.Vector3();
		this._objectWorldPos = new THREE.Vector3();

		this._onPointerMove = this._onPointerMove.bind( this );
		this._onPointerLeave = this._onPointerLeave.bind( this );
		this._onClick = this._onClick.bind( this );

		// Passive, never preventDefault: this must never interfere with a
		// touch-scroll or mouse-wheel gesture on the page.
		canvas.addEventListener( 'pointermove', this._onPointerMove, { passive: true } );
		canvas.addEventListener( 'pointerleave', this._onPointerLeave, { passive: true } );
		canvas.addEventListener( 'click', this._onClick );
	}

	_updateNdcFromEvent( event ) {
		const rect = this.canvas.getBoundingClientRect();
		const x = ( ( event.clientX - rect.left ) / rect.width ) * 2 - 1;
		const y = -( ( event.clientY - rect.top ) / rect.height ) * 2 + 1;
		return { x, y };
	}

	_onPointerMove( event ) {
		const { x, y } = this._updateNdcFromEvent( event );
		this.pointerNdc.set( x, y );
		this.pointerActive = true;

		if ( ! this.reducedMotion ) {
			this.parallaxTarget.set(
				THREE.MathUtils.clamp( x, -1, 1 ) * MAX_PARALLAX_X,
				THREE.MathUtils.clamp( y, -1, 1 ) * MAX_PARALLAX_Y
			);
		}
	}

	_onPointerLeave() {
		this.pointerActive = false;
		this.hoverId = null;
		this.canvas.style.cursor = '';
		// Settle back to the true neutral framing once the pointer leaves.
		this.parallaxTarget.set( 0, 0 );
	}

	_raycastAt( ndc ) {
		this.raycaster.setFromCamera( ndc, this.camera );
		const hits = this.raycaster.intersectObjects( this._raycastTargets, true );
		if ( ! hits.length ) {
			return null;
		}
		return findInteractionId( hits[ 0 ].object );
	}

	_onClick( event ) {
		if ( this.transitioning ) {
			return;
		}

		const ndc = this._updateNdcFromEvent( event );
		const hitId = this._raycastAt( new THREE.Vector2( ndc.x, ndc.y ) );

		if ( ! hitId ) {
			return;
		}

		if ( hitId === 'lamp' ) {
			this.lampOn = ! this.lampOn;
			if ( this.reducedMotion ) {
				this.lampTransition = this.lampOn ? 1 : 0;
				this._applyLampState();
				this.requestRender();
			}
			return;
		}

		const destination = this._destinationFor( hitId );
		if ( destination ) {
			this._startPageTransition( hitId, destination );
		}
	}

	/** A short camera dolly toward the clicked object, synced with a fade of
	 * #page-transition-container (whose default background shows through as
	 * it fades, matching the body background — no separate overlay element
	 * needed). Reduced motion skips straight to navigation, unchanged from
	 * the previous instant-navigate behavior. */
	_startPageTransition( hitId, destination ) {
		if ( this.reducedMotion ) {
			window.location.href = destination;
			return;
		}

		this.transitioning = true;
		this.hoverId = null;
		this.canvas.style.cursor = '';

		const object = this.interactive[ hitId ];
		object.getWorldPosition( this._objectWorldPos );

		const startLookAt = this.camera.userData.lookTarget || this._objectWorldPos;

		this._transition = {
			startTime: performance.now(),
			startPos: this.camera.position.clone(),
			endPos: this.camera.position.clone().lerp( this._objectWorldPos, PUSH_IN_DISTANCE ),
			startLookAt: startLookAt.clone(),
			endLookAt: this._objectWorldPos.clone(),
			destination,
		};

		const transitionContainer = document.getElementById( 'page-transition-container' );
		if ( transitionContainer ) {
			transitionContainer.classList.add( 'is-leaving' );
		}
	}

	_updateTransition() {
		const t = this._transition;
		if ( t.navigated ) {
			return;
		}

		const rawT = Math.min( ( performance.now() - t.startTime ) / PUSH_IN_DURATION, 1 );
		const eased = 1 - Math.pow( 1 - rawT, 3 ); // ease-out cubic — quick start, gentle arrival

		this.camera.position.lerpVectors( t.startPos, t.endPos, eased );
		this._lookAtScratch.lerpVectors( t.startLookAt, t.endLookAt, eased );
		this.camera.lookAt( this._lookAtScratch );

		if ( rawT >= 1 ) {
			// Navigation is async — the render loop will keep calling this
			// every frame until the browser actually unloads, so this must
			// only ever fire once.
			t.navigated = true;
			window.location.href = t.destination;
		}
	}

	_destinationFor( id ) {
		if ( id === 'monitor' ) {
			return this.links.projects || null;
		}
		if ( id === 'notebook' ) {
			return this.links.about || null;
		}
		if ( id === 'phone' ) {
			return this.links.contact || null;
		}
		if ( id === 'terminal' ) {
			return this.links.github || this.links.resume || null;
		}
		return null;
	}

	_applyLampState() {
		const on = LAMP_STATES.on;
		const off = LAMP_STATES.off;
		const t = this.lampTransition;
		const { bulbMaterial, bulbLight } = this.interactive.lamp;

		bulbMaterial.emissive.copy( new THREE.Color( off.emissiveColor ) ).lerp(
			new THREE.Color( on.emissiveColor ),
			t
		);
		bulbMaterial.emissiveIntensity = THREE.MathUtils.lerp(
			off.emissiveIntensity,
			on.emissiveIntensity,
			t
		);
		bulbLight.intensity = THREE.MathUtils.lerp( off.lightIntensity, on.lightIntensity, t );
	}

	/** Applies an instant (non-animated) resting frame — used once up front
	 * so the very first paint matches whatever state update() would
	 * otherwise only reach after several damped frames. */
	primeInitialState() {
		this._applyLampState();
	}

	/** Called every animation frame. No-op cheaply if reduced motion is on
	 * (the caller shouldn't even be running a loop in that case, but this
	 * stays safe either way). While a page transition is in flight, it owns
	 * the camera exclusively — hover/parallax/lamp updates would otherwise
	 * fight it for control of camera.position every frame. */
	update() {
		if ( this.transitioning ) {
			this._updateTransition();
			return;
		}

		this._updateHover();
		this._updateParallax();
		this._updateLamp();
	}

	_updateHover() {
		const hitId = this.pointerActive ? this._raycastAt( this.pointerNdc ) : null;

		if ( hitId !== this.hoverId ) {
			this.hoverId = hitId;
			this.canvas.style.cursor = hitId ? 'pointer' : '';
		}

		NAV_OBJECT_IDS.forEach( ( id ) => {
			const target = id === this.hoverId ? 1 : 0;
			this.hoverAmounts[ id ] = THREE.MathUtils.lerp( this.hoverAmounts[ id ], target, HOVER_DAMPING );

			const object = this.interactive[ id ];
			const amount = this.hoverAmounts[ id ];
			const scaleBoost = HOVER_SCALE_BOOST[ id ] || 0;
			object.scale.setScalar( object.userData.baseScale * ( 1 + amount * scaleBoost ) );

			const emissiveBoost = HOVER_EMISSIVE_BOOST[ id ];
			if ( emissiveBoost ) {
				this._screenMeshes[ id ].forEach( ( mesh ) => {
					mesh.material.emissiveIntensity =
						mesh.userData.baseEmissiveIntensity + amount * emissiveBoost;
				} );
			}
		} );
	}

	_updateParallax() {
		if ( this.reducedMotion ) {
			return;
		}

		this.parallaxCurrent.lerp( this.parallaxTarget, PARALLAX_DAMPING );

		const { basePosition, lookTarget, right, up } = this.camera.userData;
		if ( ! basePosition || ! lookTarget || ! right || ! up ) {
			return;
		}

		this._offset
			.copy( right )
			.multiplyScalar( this.parallaxCurrent.x )
			.addScaledVector( up, this.parallaxCurrent.y );

		this._camPosition.copy( basePosition ).add( this._offset );
		this.camera.position.copy( this._camPosition );
		this.camera.lookAt( lookTarget );
	}

	_updateLamp() {
		const target = this.lampOn ? 1 : 0;
		if ( Math.abs( this.lampTransition - target ) < 0.001 ) {
			this.lampTransition = target;
			return;
		}
		this.lampTransition = THREE.MathUtils.lerp( this.lampTransition, target, LAMP_DAMPING );
		this._applyLampState();
	}

	dispose() {
		this.canvas.removeEventListener( 'pointermove', this._onPointerMove );
		this.canvas.removeEventListener( 'pointerleave', this._onPointerLeave );
		this.canvas.removeEventListener( 'click', this._onClick );
	}
}
