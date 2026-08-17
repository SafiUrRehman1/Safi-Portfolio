<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

while ( have_posts() ) :
	the_post();
	?>
	<main id="main-content">
		<article <?php post_class( 'single-project' ); ?>>
			<header class="single-project__header">
				<div class="container">
					<h1 class="single-project__title"><?php the_title(); ?></h1>
				</div>
			</header>

			<?php if ( has_post_thumbnail() ) : ?>
				<div class="single-project__featured-image">
					<?php the_post_thumbnail( 'large', array( 'loading' => 'eager' ) ); ?>
				</div>
			<?php endif; ?>

			<div class="container single-project__layout">
				<div class="single-project__content">
					<?php the_content(); ?>
				</div>
				<aside class="single-project__sidebar">
					<?php get_template_part( 'template-parts/project-meta', null, array( 'post_id' => get_the_ID() ) ); ?>
				</aside>
			</div>

			<?php
			$screenshots = get_post_meta( get_the_ID(), 'screenshots', true );
			if ( is_array( $screenshots ) && ! empty( $screenshots ) ) :
				?>
				<div class="container">
					<h2 class="single-project__gallery-heading"><?php esc_html_e( 'Screenshots', 'portfolio-theme' ); ?></h2>
					<div class="single-project__gallery">
						<?php
						foreach ( $screenshots as $attachment_id ) :
							$image = wp_get_attachment_image(
								$attachment_id,
								'large',
								false,
								array(
									'loading' => 'lazy',
									'class'   => 'single-project__gallery-image',
								)
							);
							if ( $image ) :
								?>
								<figure class="single-project__gallery-item"><?php echo $image; ?></figure>
								<?php
							endif;
						endforeach;
						?>
					</div>
				</div>
			<?php endif; ?>
		</article>

		<?php
		$prev_project = get_previous_post( false, '', 'project_category' );
		$next_project = get_next_post( false, '', 'project_category' );
		if ( $prev_project || $next_project ) :
			?>
			<nav class="project-pagination container" aria-label="<?php esc_attr_e( 'More projects', 'portfolio-theme' ); ?>">
				<?php if ( $prev_project ) : ?>
					<a class="project-pagination__link project-pagination__link--prev" href="<?php echo esc_url( get_permalink( $prev_project ) ); ?>">
						<span class="project-pagination__label"><?php esc_html_e( 'Previous', 'portfolio-theme' ); ?></span>
						<span class="project-pagination__title"><?php echo esc_html( get_the_title( $prev_project ) ); ?></span>
					</a>
				<?php endif; ?>
				<?php if ( $next_project ) : ?>
					<a class="project-pagination__link project-pagination__link--next" href="<?php echo esc_url( get_permalink( $next_project ) ); ?>">
						<span class="project-pagination__label"><?php esc_html_e( 'Next', 'portfolio-theme' ); ?></span>
						<span class="project-pagination__title"><?php echo esc_html( get_the_title( $next_project ) ); ?></span>
					</a>
				<?php endif; ?>
			</nav>
		<?php endif; ?>
	</main>
	<?php
endwhile;

get_footer();
