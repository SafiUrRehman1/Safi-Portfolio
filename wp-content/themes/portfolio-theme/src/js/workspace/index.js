import * as THREE from 'three';
import { buildScene, frameCamera } from './scene.js';
import { WorkspaceInteraction } from './interaction.js';

/**
 * Mounts the workspace scene and its interaction layer: subtle mouse/touch
 * camera parallax, hover/tap affordances on the four navigation objects, a
 * lamp on/off toggle, and click-through navigation to the real WordPress
 * destinations passed in via `window.portfolioWorkspaceLinks`. The visual
 * composition itself (geometry/lighting/camera framing) is untouched —
 * this only adds damped motion and input handling on top of it.
 *
 * Three.js is a static, top-level import here (not a dynamic import behind
 * a module-script boundary) — see the comment in functions.php for why:
 * type="module" scripts enforce CORS on cross-origin asset loads, which
 * broke this entirely whenever the browser's origin didn't exactly match
 * WordPress's configured siteurl. Bundled as a classic script instead, at
 * the cost of shipping Three.js on every page rather than only this one.
 *
 * Fails safe: the canvas starts `hidden`, and the real heading/role text
 * (with real links — see front-page.php) stays visible by default. Only
 * once the renderer and scene are fully constructed without error do we
 * reveal the canvas and hide the fallback text — a WebGL failure or
 * exception anywhere in setup leaves the accessible text fallback exactly
 * as it would render with no JS at all.
 *
 * Under `prefers-reduced-motion: reduce`, the continuous render loop never
 * starts (parallax and hover animation are motion effects and are skipped
 * entirely), but the scene still renders once at its static neutral framing
 * and every object stays fully clickable — the lamp toggle just snaps
 * instantly instead of fading.
 */
export function initWorkspaceScene() {
	const section = document.querySelector( '[data-workspace-scene]' );
	if ( ! section ) {
		return;
	}

	const canvas = section.querySelector( '[data-workspace-canvas]' );
	const fallback = section.querySelector( '.hero-scene__fallback' );
	if ( ! canvas ) {
		return;
	}

	let renderer;
	try {
		renderer = new THREE.WebGLRenderer( { canvas, antialias: true, alpha: false } );
	} catch ( error ) {
		console.warn( 'Workspace scene: WebGL unavailable, falling back to text.', error );
		return;
	}

	try {
		const rect = section.getBoundingClientRect();
		const width = rect.width || window.innerWidth;
		const height = rect.height || window.innerHeight;
		const pixelRatio = Math.min( window.devicePixelRatio || 1, 2 );

		renderer.setPixelRatio( pixelRatio );
		renderer.setSize( width, height, false );
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1.05;
		renderer.outputColorSpace = THREE.SRGBColorSpace;

		const { scene, camera, box, interactive } = buildScene( width / height );

		const render = () => {
			renderer.render( scene, camera );
		};

		const reducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;

		const interaction = new WorkspaceInteraction( {
			canvas,
			camera,
			interactive,
			links: window.portfolioWorkspaceLinks || {},
			reducedMotion,
			requestRender: render,
		} );
		interaction.primeInitialState();

		render();

		let resizeRaf = null;
		window.addEventListener( 'resize', () => {
			if ( resizeRaf ) {
				return;
			}
			resizeRaf = requestAnimationFrame( () => {
				resizeRaf = null;
				const nextRect = section.getBoundingClientRect();
				const nextWidth = nextRect.width || window.innerWidth;
				const nextHeight = nextRect.height || window.innerHeight;
				// Reframe (not just re-aspect) so the composition adapts as a
				// continuous function of the new aspect ratio — e.g. rotating
				// a phone from portrait to landscape gets a properly reframed
				// shot, not the portrait framing stretched into landscape.
				camera.aspect = nextWidth / nextHeight;
				frameCamera( camera, box, camera.aspect );
				renderer.setSize( nextWidth, nextHeight, false );
				render();
			} );
		} );

		// The continuous loop only exists to drive parallax/hover/lamp
		// damping — under reduced motion none of that runs, so a single
		// static render (plus one repaint per resize/click) is the entire
		// rendering cost, matching the original zero-idle-cost behavior.
		if ( ! reducedMotion ) {
			let running = ! document.hidden;
			const loop = () => {
				if ( ! running ) {
					return;
				}
				interaction.update();
				render();
				requestAnimationFrame( loop );
			};

			document.addEventListener( 'visibilitychange', () => {
				const wasRunning = running;
				running = ! document.hidden;
				if ( running && ! wasRunning ) {
					requestAnimationFrame( loop );
				}
			} );

			requestAnimationFrame( loop );
		}

		// Commit: only now do we reveal the canvas and hide the text fallback.
		canvas.hidden = false;
		if ( fallback ) {
			fallback.hidden = true;
		}
	} catch ( error ) {
		console.warn( 'Workspace scene: failed to initialize, falling back to text.', error );
		renderer.dispose();
	}
}
