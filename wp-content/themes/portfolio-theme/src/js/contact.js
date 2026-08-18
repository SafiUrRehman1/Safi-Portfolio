/**
 * Contact page's "Copy email" button. No-op on any page without one.
 */
export function initContactCopyEmail() {
	const button = document.querySelector( '[data-copy-email]' );
	if ( ! button ) {
		return;
	}

	const email = button.getAttribute( 'data-copy-email' );
	const defaultLabel = button.textContent;
	let resetTimer = null;

	button.addEventListener( 'click', async () => {
		try {
			await navigator.clipboard.writeText( email );
		} catch ( error ) {
			return; // Clipboard API unavailable/denied — the mailto: link next to it still works.
		}

		button.textContent = button.getAttribute( 'data-copied-label' ) || 'Copied';
		button.classList.add( 'is-copied' );

		window.clearTimeout( resetTimer );
		resetTimer = window.setTimeout( () => {
			button.textContent = defaultLabel;
			button.classList.remove( 'is-copied' );
		}, 2000 );
	} );
}
