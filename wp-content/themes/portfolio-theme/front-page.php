<?php
/**
 * Homepage template.
 *
 * The homepage is a single full-viewport signature scene — a static,
 * art-directed 3D "digital workspace" (src/js/workspace) rather than a
 * hero-plus-sections layout. Real navigation to Projects/About/Contact
 * lives in the persistent site header (template-parts/nav.php), unaffected
 * by anything on this page — the 3D scene is a supplementary, progressively
 * enhanced experience, never the only way to reach content.
 *
 * If WebGL is unavailable, motion is unsupported, or scene setup throws for
 * any reason, the plain heading/role text underneath the canvas remains
 * visible — see src/js/workspace/index.js. That fallback includes real
 * links to every destination the 3D objects navigate to (Projects, About,
 * Contact, GitHub/resume), so a user who never sees the canvas still has a
 * complete, self-sufficient way to reach all of them from this page alone,
 * not just via the persistent site header nav.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

$github_url  = get_theme_mod( 'portfolio_github_url', '' );
$resume_url  = get_theme_mod( 'portfolio_resume_url', '' );
$code_url    = $github_url ?: $resume_url;
$code_label  = $github_url ? __( 'GitHub', 'portfolio-theme' ) : __( 'Resume', 'portfolio-theme' );
$about_url   = portfolio_theme_get_page_url_by_template( 'template-about.php' );
$contact_url = portfolio_theme_get_page_url_by_template( 'template-contact.php' );
?>
<main id="main-content">
	<section class="hero-scene" data-workspace-scene>
		<div class="hero-scene__fallback">
			<p class="hero-scene__eyebrow"><?php esc_html_e( 'Software Developer', 'portfolio-theme' ); ?></p>
			<h1 class="hero-scene__title"><?php bloginfo( 'name' ); ?></h1>
			<nav class="hero-scene__fallback-nav" aria-label="<?php esc_attr_e( 'Workspace destinations', 'portfolio-theme' ); ?>">
				<a href="<?php echo esc_url( get_post_type_archive_link( 'project' ) ); ?>"><?php esc_html_e( 'Projects', 'portfolio-theme' ); ?></a>
				<?php if ( $about_url ) : ?>
					<a href="<?php echo esc_url( $about_url ); ?>"><?php esc_html_e( 'About', 'portfolio-theme' ); ?></a>
				<?php endif; ?>
				<?php if ( $contact_url ) : ?>
					<a href="<?php echo esc_url( $contact_url ); ?>"><?php esc_html_e( 'Contact', 'portfolio-theme' ); ?></a>
				<?php endif; ?>
				<?php if ( $code_url ) : ?>
					<a href="<?php echo esc_url( $code_url ); ?>"><?php echo esc_html( $code_label ); ?></a>
				<?php endif; ?>
			</nav>
		</div>
		<canvas class="hero-scene__canvas" data-workspace-canvas hidden></canvas>
	</section>
</main>
<?php
get_footer();
