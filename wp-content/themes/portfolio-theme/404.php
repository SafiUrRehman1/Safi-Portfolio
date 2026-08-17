<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>
<main id="main-content">
	<section class="section not-found">
		<div class="container">
			<h1 class="not-found__title"><?php esc_html_e( 'Page not found', 'portfolio-theme' ); ?></h1>
			<p class="not-found__text">
				<?php esc_html_e( 'The page you are looking for does not exist or has moved.', 'portfolio-theme' ); ?>
			</p>
			<a class="button button--primary" href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<?php esc_html_e( 'Back to homepage', 'portfolio-theme' ); ?>
			</a>
		</div>
	</section>
</main>
<?php
get_footer();
