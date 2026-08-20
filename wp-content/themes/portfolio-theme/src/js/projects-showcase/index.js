import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { playRevealSound } from './sound.js';

// Scroll distance per project-to-project transition, as a fraction of one
// viewport height. Short enough that a normal scroll gesture covers it,
// while still giving ScrollTrigger enough room to resolve a clean snap
// point between projects.
const TRANSITION_VH = 0.75;

// How long one project-to-project reveal takes, and the easing that shapes
// it. This is the entire reason transitions read as smooth now: the motion
// comes from this fixed, pre-defined curve playing out on GSAP's own
// ticker, not from continuously re-deriving opacity/scale straight off
// live scroll position. Scroll input — mouse wheel notches, trackpad
// deltas, momentum — is never smooth or evenly paced, so anything that
// maps visual state 1:1 to it inherits that raw unevenness no matter how
// well-tuned the scrub/snap numbers are. Treating scroll only as a
// *trigger* ("we've crossed into the next project") and letting a real
// timeline own the motion from there removes that ceiling entirely.
const REVEAL_DURATION = 0.68;
const REVEAL_EASE = 'power3.out';
const EXIT_EASE = 'power2.in';

/**
 * Desktop-only, scroll-triggered scene transitions for the Projects
 * archive. Native scroll is never intercepted or blocked — ScrollTrigger
 * pins the viewport for a short distance per project and reports scroll
 * progress, but that progress is only used to detect *which* project
 * should be dominant right now, quantized to a whole index. Crossing into
 * a new index plays one self-contained reveal timeline (fade + scale +
 * drift) with its own fixed duration and easing — scrolling further while
 * it's still playing simply retargets it, GSAP smoothly picking up from
 * wherever the in-flight animation currently is rather than restarting or
 * queuing. Every scene is real, always-rendered markup; this only animates
 * opacity/transform (never display:none), and toggles `inert` on whichever
 * scene isn't currently dominant so only one is reachable by keyboard/AT
 * at a time while the showcase is engaged.
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
		this.handleProgress = this.handleProgress.bind( this );
	}

	init() {
		this.progressEl = document.createElement( 'div' );
		this.progressEl.className = 'project-showcase__progress';
		this.progressEl.setAttribute( 'aria-hidden', 'true' );
		this.viewport.appendChild( this.progressEl );

		gsap.registerPlugin( ScrollTrigger );

		// Resolved once, not on every scroll tick.
		this.sceneRefs = this.scenes.map( ( scene ) => ( {
			scene,
			visual: scene.querySelector( '.project-scene__visual' ),
			metaItems: scene.querySelectorAll( '.project-scene__meta > *' ),
		} ) );

		gsap.set( this.scenes, { autoAlpha: 0, scale: 1, y: 0 } );
		gsap.set( this.scenes[ 0 ], { autoAlpha: 1 } );
		this.setDominant( 0 );

		this.scrollTrigger = ScrollTrigger.create( {
			trigger: this.showcase,
			pin: this.viewport,
			start: 'top top',
			end: () => '+=' + window.innerHeight * TRANSITION_VH * ( this.total - 1 ),
			// No scrub: progress is read as a plain, unsmoothed value purely to
			// decide which whole index should be dominant — see handleProgress().
			snap: {
				snapTo: 1 / ( this.total - 1 ),
				duration: { min: 0.2, max: 0.35 },
				delay: 0.1,
				ease: 'power1.inOut',
			},
			onUpdate: ( self ) => this.handleProgress( self.progress ),
		} );

		document.addEventListener( 'keydown', this.handleKeydown );
		if ( 'onscrollend' in window ) {
			window.addEventListener( 'scrollend', this.handleScrollEnd );
		}

		// Commit: only now do we switch on the interactive visual mode.
		this.showcase.classList.add( 'project-showcase--interactive' );
	}

	/** Scroll progress only ever decides *which* project should be dominant
	 * — rounded to the nearest whole index, never read as a fractional
	 * blend. Crossing into a new index is the sole trigger for revealTo(). */
	handleProgress( progress ) {
		const target = Math.round( progress * ( this.total - 1 ) );
		if ( target !== this.currentDominant ) {
			this.revealTo( target );
		}
	}

	/** Plays one reveal: the outgoing scene drifts/fades away, the incoming
	 * one drifts/scales/fades into place, on a fixed timeline independent
	 * of further scroll input. Called again mid-flight (fast scrolling past
	 * multiple projects) simply retargets — killing/recreating the tween on
	 * a given element makes GSAP pick up motion from its current rendered
	 * state rather than snapping or restarting. */
	revealTo( index ) {
		const from = this.sceneRefs[ this.currentDominant ];
		const to = this.sceneRefs[ index ];
		const direction = index > this.currentDominant ? 1 : -1;

		playRevealSound();
		this.setDominant( index );

		const tl = gsap.timeline();

		tl.to( from.scene, { autoAlpha: 0, duration: REVEAL_DURATION * 0.7, ease: EXIT_EASE }, 0 );
		if ( from.visual ) {
			tl.to( from.visual, { scale: 0.94, xPercent: direction * -4, duration: REVEAL_DURATION * 0.7, ease: EXIT_EASE }, 0 );
		}
		if ( from.metaItems.length ) {
			tl.to( from.metaItems, { autoAlpha: 0, y: -14, duration: REVEAL_DURATION * 0.5, ease: EXIT_EASE }, 0 );
		}

		// Incoming scene starts from a slightly scaled/offset/invisible state
		// each time (rather than assuming it's still there from last time),
		// so a fast double-skip always looks correct.
		gsap.set( to.scene, { autoAlpha: 0 } );
		if ( to.visual ) {
			gsap.set( to.visual, { scale: 1.05, xPercent: direction * 4 } );
		}
		if ( to.metaItems.length ) {
			gsap.set( to.metaItems, { autoAlpha: 0, y: 18 } );
		}

		// Starts slightly after the outgoing scene begins leaving, for a
		// coordinated "make way, then arrive" feel rather than a flat cross.
		const incomingStart = REVEAL_DURATION * 0.12;
		tl.to( to.scene, { autoAlpha: 1, duration: REVEAL_DURATION, ease: REVEAL_EASE }, incomingStart );
		if ( to.visual ) {
			tl.to( to.visual, { scale: 1, xPercent: 0, duration: REVEAL_DURATION, ease: REVEAL_EASE }, incomingStart );
		}
		if ( to.metaItems.length ) {
			tl.to( to.metaItems, { autoAlpha: 1, y: 0, duration: REVEAL_DURATION * 0.8, ease: REVEAL_EASE, stagger: 0.04 }, incomingStart + REVEAL_DURATION * 0.15 );
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
	 * pipeline (progress + snap) handle the rest — no separate animation
	 * path. */
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
