<?php
/**
 * Homepage template.
 * Placeholder hero for now — the Code Constellation visualization replaces
 * this section in a later phase. Project data below is real, queried
 * natively (no JS required to see content).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>
<main id="main-content">
	<section class="hero">
		<div class="container">
			<p class="hero__eyebrow"><?php esc_html_e( 'Software Developer', 'portfolio-theme' ); ?></p>
			<h1 class="hero__title"><?php bloginfo( 'name' ); ?></h1>
			<?php $description = get_bloginfo( 'description' ); ?>
			<?php if ( $description ) : ?>
				<p class="hero__subtitle"><?php echo esc_html( $description ); ?></p>
			<?php endif; ?>
		</div>
	</section>

	<section class="section" aria-labelledby="featured-projects-heading">
		<div class="container">
			<h2 id="featured-projects-heading" class="section__heading">
				<?php esc_html_e( 'Featured Projects', 'portfolio-theme' ); ?>
			</h2>

			<?php
			$featured_query = new WP_Query(
				array(
					'post_type'      => 'project',
					'post_status'    => 'publish',
					'posts_per_page' => 6,
					'meta_key'       => 'featured',
					'meta_value'     => '1',
					'orderby'        => 'menu_order',
					'order'          => 'ASC',
				)
			);

			if ( ! $featured_query->have_posts() ) {
				wp_reset_postdata();
				$featured_query = new WP_Query(
					array(
						'post_type'      => 'project',
						'post_status'    => 'publish',
						'posts_per_page' => 6,
						'orderby'        => 'menu_order',
						'order'          => 'ASC',
					)
				);
			}

			if ( $featured_query->have_posts() ) :
				?>
				<div class="project-grid">
					<?php
					while ( $featured_query->have_posts() ) :
						$featured_query->the_post();
						get_template_part( 'template-parts/project-card', null, array( 'post_id' => get_the_ID() ) );
					endwhile;
					wp_reset_postdata();
					?>
				</div>
			<?php else : ?>
				<p class="empty-state"><?php esc_html_e( 'Projects will appear here once published.', 'portfolio-theme' ); ?></p>
			<?php endif; ?>
		</div>
	</section>
</main>
<?php
get_footer();
