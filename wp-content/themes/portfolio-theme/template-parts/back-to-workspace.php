<?php
/**
 * A slim strip under the site header on About, Contact, Projects, and
 * Single Project — never on the homepage, which IS the workspace. Reads as
 * part of the navigation system (same header rhythm/typography), not a
 * generic browser-back control, and always links to the homepage.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="back-to-workspace">
	<div class="container">
		<a class="back-to-workspace__link" href="<?php echo esc_url( home_url( '/' ) ); ?>">
			<span class="back-to-workspace__arrow" aria-hidden="true">&larr;</span>
			<?php esc_html_e( 'Workspace', 'portfolio-theme' ); ?>
		</a>
	</div>
</div>
