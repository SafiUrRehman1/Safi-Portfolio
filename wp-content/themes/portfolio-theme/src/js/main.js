// Foundation-stage JS: progressive enhancement only.
// The mobile nav already works with zero JS via the checkbox/label pattern in
// template-parts/nav.php + tailwind.css. This just adds accessible extras:
// aria-expanded state, Escape-to-close, and click-outside-to-close.

function initNav() {
	const toggle = document.getElementById( 'nav-toggle' );
	const label = document.querySelector( '.nav-toggle-label' );

	if ( ! toggle || ! label ) {
		return;
	}

	const syncAria = () => {
		label.setAttribute( 'aria-expanded', toggle.checked ? 'true' : 'false' );
	};

	syncAria();
	toggle.addEventListener( 'change', syncAria );

	document.addEventListener( 'keydown', ( event ) => {
		if ( event.key === 'Escape' && toggle.checked ) {
			toggle.checked = false;
			syncAria();
		}
	} );

	document.addEventListener( 'click', ( event ) => {
		const header = event.target.closest( '.site-header' );
		if ( ! header && toggle.checked ) {
			toggle.checked = false;
			syncAria();
		}
	} );
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', initNav );
} else {
	initNav();
}
