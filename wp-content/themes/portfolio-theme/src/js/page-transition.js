/**
 * Site-wide link transition: fades #page-transition-container out (revealing
 * the matching body background) before navigating, so About → Contact →
 * Projects → Workspace all feel like movement through the same portfolio
 * rather than plain hard page loads. This is the SAME mechanism the
 * homepage workspace's object clicks already use (src/js/workspace/
 * interaction.js drives the identical class on the identical element) —
 * not a second, competing transition system. That file is intentionally
 * left untouched here; this duration is just kept in sync with it by
 * convention (both 550ms).
 */
const FADE_DURATION = 550;

function isModifiedClick( event ) {
	return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
}

/** Fades the page out, then navigates. Used directly by anything that needs
 * to trigger the transition outside of a plain link click (none currently
 * do, but kept exported for that reason) as well as internally below. */
export function navigateWithFade( url, { reducedMotion = false } = {} ) {
	if ( reducedMotion ) {
		window.location.href = url;
		return;
	}

	const container = document.getElementById( 'page-transition-container' );
	if ( container ) {
		container.classList.add( 'is-leaving' );
	}

	window.setTimeout( () => {
		window.location.href = url;
	}, FADE_DURATION );
}

/** Intercepts normal same-origin link clicks site-wide and routes them
 * through navigateWithFade() instead of an instant hard navigation. Leaves
 * everything else (new tabs, downloads, external links, in-page anchors,
 * modified clicks) to the browser's default behavior untouched. */
export function initLinkTransitions() {
	const reducedMotion = window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches;

	document.addEventListener( 'click', ( event ) => {
		if ( event.defaultPrevented || isModifiedClick( event ) ) {
			return;
		}

		const link = event.target.closest( 'a[href]' );
		if ( ! link || link.target === '_blank' || link.hasAttribute( 'download' ) ) {
			return;
		}

		let url;
		try {
			url = new URL( link.href, window.location.href );
		} catch ( error ) {
			return;
		}

		if ( url.origin !== window.location.origin ) {
			return;
		}

		// Same-page anchor (in-page scroll) — let the browser handle it natively.
		if ( url.pathname === window.location.pathname && url.search === window.location.search && url.hash ) {
			return;
		}

		if ( url.href === window.location.href ) {
			return;
		}

		event.preventDefault();
		navigateWithFade( link.href, { reducedMotion } );
	} );
}
