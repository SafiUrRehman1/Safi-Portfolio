<?php
/**
 * Generic fallback template required by WordPress.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>
<main id="main-content">
	<div class="container section">
		<?php if ( have_posts() ) : ?>
			<?php
			while ( have_posts() ) :
				the_post();
				?>
				<article <?php post_class(); ?>>
					<h1><?php the_title(); ?></h1>
					<?php the_content(); ?>
				</article>
				<?php
			endwhile;
			?>
		<?php else : ?>
			<p class="empty-state"><?php esc_html_e( 'Nothing found.', 'portfolio-theme' ); ?></p>
		<?php endif; ?>
	</div>
</main>
<?php
get_footer();
