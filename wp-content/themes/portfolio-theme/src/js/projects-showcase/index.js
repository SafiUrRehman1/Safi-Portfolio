import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { playSwipeSound } from './sound.js';

// Scroll distance per project-to-project transition, as a fraction of one
// viewport height. Short enough that a normal scroll gesture covers it —
// this directly replaces the earlier "too much scroll distance" problem —
// while still giving ScrollTrigger enough room to compute smooth,
// continuous, momentum-respecting progress rather than a hair-trigger jump.
const TRANSITION_VH = 0.75;

function clamp01( value ) {
	return Math.min( Math.max( value, 0 ), 1 );
}

/** Remap `value` from [inMin, inMax] to [0, 1], clamped. Used to offset the
 * meta (title/tags) transition slightly from the visual's own progress, so
 * they read as coordinated-but-distinct stages rather than one flat fade. */
function mapRange( value, inMin, inMax ) {
	return clamp01( ( value - inMin ) / ( inMax - inMin ) );
}

/**
 * Desktop-only, scroll-driven scene transitions for the Projects archive.
 * Native scroll is never intercepted or blocked — GSAP ScrollTrigger pins
 * the viewport for a short distance and scrubs the crossfade/parallax
 * directly off real scroll position, then (via ScrollTrigger's own `snap`)
 * eases the scroll position to the nearest project once the user stops
 * scrolling. Every scene is real, always-rendered markup; this only
 * animates opacity/transform (never display:none), and toggles `inert` on
 * whichever scene isn't currently dominant so only one is reachable by
 * keyboard/AT at a time while the showcase is engaged.
 */
class ProjectShowcaseController {
	constructor( showcase, viewport, scenes ) {
		this.showcase = showcase;
		this.viewport = viewport;
		this.scenes = scenes;
		this.total = scenes.length;

		this.currentDominant = 0;
		this.progressEl = null;
		this.scrollTrigger = null;
		this.pendingKeyboardFocus = false;

		this.handleKeydown = this.handleKeydown.bind( this );
		this.handleScrollEnd = this.handleScrollEnd.bind( this );
		this.updateForProgress = this.updateForProgress.bind( this );
	}

	init() {
		this.progressEl = document.createElement( 'div' );
		this.progressEl.className = 'project-showcase__progress';
		this.progressEl.setAttribute( 'aria-hidden', 'true' );
		this.viewport.appendChild( this.progressEl );

		gsap.registerPlugin( ScrollTrigger );

		// Resolved once, not on every scroll tick — updateForProgress() runs on
		// essentially every frame while scrubbing, so re-querying the DOM for
		// each scene's visual/meta elements there was the main source of the
		// scroll feeling laggy: N scenes × (1 querySelector + 1
		// querySelectorAll) on every single update, every frame.
		this.sceneRefs = this.scenes.map( ( scene ) => ( {
			scene,
			visual: scene.querySelector( '.project-scene__visual' ),
			metaItems: scene.querySelectorAll( '.project-scene__meta > *' ),
		} ) );

		gsap.set( this.scenes, { autoAlpha: 0 } );
		gsap.set( this.scenes[ 0 ], { autoAlpha: 1 } );
		this.setDominant( 0 );

		this.scrollTrigger = ScrollTrigger.create( {
			trigger: this.showcase,
			pin: this.viewport,
			start: 'top top',
			end: () => '+=' + window.innerHeight * TRANSITION_VH * ( this.total - 1 ),
			// Lower scrub = less catch-up delay between the actual scroll
			// position and the visual — the previous 0.35 read as laggy;
			// this stays smoothed (not a raw 1:1 jump) but tracks input
			// much more directly.
			scrub: 0.15,
			snap: {
				snapTo: 1 / ( this.total - 1 ),
				duration: { min: 0.25, max: 0.6 },
				delay: 0.15,
				ease: 'power1.inOut',
			},
			onUpdate: ( self ) => this.updateForProgress( self.progress * ( this.total - 1 ) ),
		} );

		document.addEventListener( 'keydown', this.handleKeydown );
		if ( 'onscrollend' in window ) {
			window.addEventListener( 'scrollend', this.handleScrollEnd );
		}

		// Commit: only now do we switch on the interactive visual mode.
		this.showcase.classList.add( 'project-showcase--interactive' );
	}

	updateForProgress( progress ) {
		const lower = Math.min( Math.floor( progress ), this.total - 1 );
		const upper = Math.min( lower + 1, this.total - 1 );
		const localT = upper === lower ? 0 : progress - lower;

		this.sceneRefs.forEach( ( sceneRef, i ) => {
			const { scene, visual, metaItems } = sceneRef;
			if ( i === lower ) {
				// Outgoing: subtle scale down, slight opacity reduction, subtle
				// translation — never disappears abruptly, tracks scroll directly.
				gsap.set( scene, { autoAlpha: 1 - localT } );
				if ( visual ) {
					gsap.set( visual, { scale: 1 - localT * 0.05, xPercent: -localT * 5 } );
				}
				if ( metaItems.length ) {
					const metaOut = mapRange( localT, 0, 0.6 );
					gsap.set( metaItems, { autoAlpha: 1 - metaOut, y: -metaOut * 16 } );
				}
			} else if ( i === upper && upper !== lower ) {
				// Incoming: scale/position correction, opacity increases, meta
				// arrives slightly after the visual for coordinated-but-staged timing.
				gsap.set( scene, { autoAlpha: localT } );
				if ( visual ) {
					gsap.set( visual, { scale: 0.96 + localT * 0.04, xPercent: ( 1 - localT ) * 5 } );
				}
				if ( metaItems.length ) {
					const metaIn = mapRange( localT, 0.35, 1 );
					gsap.set( metaItems, { autoAlpha: metaIn, y: ( 1 - metaIn ) * 16 } );
				}
			} else if ( ! sceneRef.isFar ) {
				// Only write this once per entry into the "far" state, not on
				// every scroll tick while it's already sitting there hidden.
				gsap.set( scene, { autoAlpha: 0 } );
			}

			sceneRef.isFar = i !== lower && i !== upper;
		} );

		const dominant = localT > 0.5 ? upper : lower;
		if ( dominant !== this.currentDominant ) {
			playSwipeSound();
			this.setDominant( dominant );
		}
	}

	setDominant( index ) {
		this.currentDominant = index;
		this.scenes.forEach( ( scene, i ) => {
			const isActive = i === index;
			scene.inert = ! isActive;
			scene.setAttribute( 'data-scene-state', isActive ? 'active' : 'inactive' );
		} );
		this.updateProgress();
	}

	updateProgress() {
		if ( ! this.progressEl ) {
			return;
		}
		this.progressEl.innerHTML = '';
		const strong = document.createElement( 'strong' );
		strong.textContent = String( this.currentDominant + 1 ).padStart( 2, '0' );
		this.progressEl.appendChild( strong );
		this.progressEl.appendChild( document.createTextNode( ' / ' + String( this.total ).padStart( 2, '0' ) ) );
	}

	/** Keyboard equivalent of a scroll gesture: moves the actual scroll
	 * position by one transition-distance and lets the same ScrollTrigger
	 * pipeline (scrub + snap) handle the rest — no separate animation path. */
	handleKeydown( event ) {
		if ( ! this.scrollTrigger || ! this.scrollTrigger.isActive ) {
			return;
		}
		if ( event.key !== 'ArrowDown' && event.key !== 'ArrowUp' ) {
			return;
		}

		event.preventDefault();
		this.pendingKeyboardFocus = true;
		const distance = window.innerHeight * TRANSITION_VH * ( event.key === 'ArrowDown' ? 1 : -1 );
		window.scrollBy( { top: distance, behavior: 'smooth' } );
	}

	/** Only move focus after a keyboard-triggered transition settles — never
	 * after a mouse/trackpad scroll, which would be unwanted focus-stealing. */
	handleScrollEnd() {
		if ( ! this.pendingKeyboardFocus ) {
			return;
		}
		this.pendingKeyboardFocus = false;
		this.scenes[ this.currentDominant ].focus();
	}
}

export function initProjectsShowcase() {
	const showcase = document.querySelector( '[data-project-showcase]' );
	if ( ! showcase ) {
		return;
	}

	const isDesktop = window.matchMedia( '(min-width: 900px)' ).matches;
	const prefersReducedMotion = window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches;

	if ( ! isDesktop || prefersReducedMotion ) {
		return; // clean static stacked fallback — no JS needed to read every project
	}

	const viewport = showcase.querySelector( '[data-project-viewport]' );
	const scenes = Array.from( showcase.querySelectorAll( '[data-project-scene]' ) );

	if ( ! viewport || scenes.length < 2 ) {
		return; // nothing to transition between
	}

	const controller = new ProjectShowcaseController( showcase, viewport, scenes );
	controller.init();
}
