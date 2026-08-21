<?php
/**
 * A restrained browser-window titlebar wrapping project screenshots —
 * three muted dots (not colorful macOS traffic lights, to stay in the
 * site's monochrome-plus-accent palette) and, when a live demo URL
 * exists, its real domain in an address-bar pill. Pure CSS/markup, no
 * image asset — reused by both the Projects showcase and single project
 * pages so a screenshot always reads as "a real, live thing" rather than
 * a bare, floating image.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$url = isset( $args['url'] ) ? (string) $args['url'] : '';
$host = $url ? wp_parse_url( $url, PHP_URL_HOST ) : '';
?>
<div class="mockup-bar" aria-hidden="true">
	<span class="mockup-bar__dots">
		<span class="mockup-bar__dot"></span>
		<span class="mockup-bar__dot"></span>
		<span class="mockup-bar__dot"></span>
	</span>
	<?php if ( $host ) : ?>
		<span class="mockup-bar__url"><?php echo esc_html( $host ); ?></span>
	<?php endif; ?>
</div>
