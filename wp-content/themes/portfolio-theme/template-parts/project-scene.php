<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$post_id = isset( $args['post_id'] ) ? absint( $args['post_id'] ) : get_the_ID();
$index   = isset( $args['index'] ) ? absint( $args['index'] ) : 0;
$project = get_post( $post_id );

if ( ! $project ) {
	return;
}

$technology_terms = get_the_terms( $project->ID, 'technology' );
$category_terms    = get_the_terms( $project->ID, 'project_category' );
$category_name     = ( $category_terms && ! is_wp_error( $category_terms ) && ! empty( $category_terms ) )
	? $category_terms[0]->name
	: '';

$github_url = get_post_meta( $project->ID, 'github_url', true );
$demo_url   = get_post_meta( $project->ID, 'live_demo_url', true );

$image_html = '';
if ( has_post_thumbnail( $project ) ) {
	$image_html = get_the_post_thumbnail(
		$project,
		'large',
		array(
			'class'   => 'project-scene__image',
			'loading' => ( 1 === $index ? 'eager' : 'lazy' ),
		)
	);
} else {
	$screenshots = get_post_meta( $project->ID, 'screenshots', true );
	if ( is_array( $screenshots ) && ! empty( $screenshots ) ) {
		$image_html = wp_get_attachment_image(
			$screenshots[0],
			'large',
			false,
			array(
				'class'   => 'project-scene__image',
				'loading' => 'lazy',
			)
		);
	}
}

// No image yet — a deterministic, on-brand placeholder (not a blank box).
// The hue stays within the accent's own blue-cyan family so it reads as
// "part of the design system," not a random rainbow of card colors.
$placeholder_hue = 175 + ( crc32( get_the_title( $project ) ) % 45 );
?>
<article class="project-scene" data-project-scene data-index="<?php echo esc_attr( $index ); ?>" tabindex="-1">
	<div class="project-scene__inner">
		<div class="project-scene__visual">
			<?php get_template_part( 'template-parts/browser-mockup-bar', null, array( 'url' => $demo_url ) ); ?>
			<?php if ( $image_html ) : ?>
				<?php echo $image_html; ?>
			<?php else : ?>
				<div class="project-scene__placeholder" style="--placeholder-hue: <?php echo esc_attr( $placeholder_hue ); ?>" aria-hidden="true">
					<span class="project-scene__placeholder-glyph"><?php echo esc_html( mb_substr( get_the_title( $project ), 0, 1 ) ); ?></span>
				</div>
			<?php endif; ?>
		</div>

		<div class="project-scene__meta">
			<span class="project-scene__index"><?php echo esc_html( str_pad( (string) $index, 2, '0', STR_PAD_LEFT ) ); ?></span>

			<?php if ( $category_name ) : ?>
				<p class="project-scene__category"><?php echo esc_html( $category_name ); ?></p>
			<?php endif; ?>

			<h2 class="project-scene__title">
				<a href="<?php echo esc_url( get_permalink( $project ) ); ?>"><?php echo esc_html( get_the_title( $project ) ); ?></a>
			</h2>

			<?php $excerpt = get_the_excerpt( $project ); ?>
			<?php if ( $excerpt ) : ?>
				<p class="project-scene__excerpt"><?php echo esc_html( $excerpt ); ?></p>
			<?php endif; ?>

			<?php if ( $technology_terms && ! is_wp_error( $technology_terms ) ) : ?>
				<ul class="tech-tags">
					<?php foreach ( $technology_terms as $term ) : ?>
						<li class="tech-tags__item"><?php echo esc_html( $term->name ); ?></li>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>

			<div class="project-scene__cta">
				<a class="button button--primary" href="<?php echo esc_url( get_permalink( $project ) ); ?>">
					<?php esc_html_e( 'View Project', 'portfolio-theme' ); ?>
				</a>
				<?php if ( $github_url ) : ?>
					<a class="button button--outline" href="<?php echo esc_url( $github_url ); ?>" target="_blank" rel="noopener noreferrer">
						<?php esc_html_e( 'GitHub', 'portfolio-theme' ); ?>
					</a>
				<?php endif; ?>
				<?php if ( $demo_url ) : ?>
					<a class="button button--outline" href="<?php echo esc_url( $demo_url ); ?>" target="_blank" rel="noopener noreferrer">
						<?php esc_html_e( 'Live Demo', 'portfolio-theme' ); ?>
					</a>
				<?php endif; ?>
			</div>
		</div>
	</div>
</article>
