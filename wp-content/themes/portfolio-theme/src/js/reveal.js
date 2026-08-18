/**
 * A single, restrained reveal-on-scroll mechanism shared by every editorial
 * page (About, Contact) — a plain opacity/translateY fade via IntersectionObserver,
 * one class toggle, no per-page bespoke animation code. Reduced motion shows
 * everything immediately with no motion at all, matching the rest of the site.
 */
export function initScrollReveal() {
	const items = document.querySelectorAll( '[data-reveal]' );
	if ( ! items.length ) {
		return;
	}

	if ( window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches ) {
		items.forEach( ( el ) => el.classList.add( 'is-revealed' ) );
		return;
	}

	const observer = new IntersectionObserver(
		( entries ) => {
			entries.forEach( ( entry ) => {
				if ( entry.isIntersecting ) {
					entry.target.classList.add( 'is-revealed' );
					observer.unobserve( entry.target );
				}
			} );
		},
		{ threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
	);

	items.forEach( ( el ) => observer.observe( el ) );
}
