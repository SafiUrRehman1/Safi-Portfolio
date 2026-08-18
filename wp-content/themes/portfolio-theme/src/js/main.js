// Foundation-stage JS: progressive enhancement only.
// The mobile nav already works with zero JS via the checkbox/label pattern in
// template-parts/nav.php + tailwind.css. This just adds accessible extras:
// aria-expanded state, Escape-to-close, and click-outside-to-close.

import { initWorkspaceScene } from './workspace/index.js';
import { initProjectsShowcase } from './projects-showcase/index.js';
import { initLinkTransitions } from './page-transition.js';
import { initScrollReveal } from './reveal.js';
import { initContactCopyEmail } from './contact.js';

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

function boot() {
	initNav();

	try {
		initWorkspaceScene();
	} catch ( error ) {
		console.warn( 'Workspace scene: failed to initialize, falls back to text.', error );
	}

	try {
		initProjectsShowcase();
	} catch ( error ) {
		console.warn( 'Projects showcase: failed to initialize, falls back to static scroll.', error );
	}

	try {
		initLinkTransitions();
	} catch ( error ) {
		console.warn( 'Link transitions: failed to initialize, links navigate normally.', error );
	}

	try {
		initScrollReveal();
	} catch ( error ) {
		console.warn( 'Scroll reveal: failed to initialize, content stays visible.', error );
	}

	try {
		initContactCopyEmail();
	} catch ( error ) {
		console.warn( 'Contact copy-email: failed to initialize.', error );
	}
}

if ( document.readyState === 'loading' ) {
	document.addEventListener( 'DOMContentLoaded', boot );
} else {
	boot();
}
