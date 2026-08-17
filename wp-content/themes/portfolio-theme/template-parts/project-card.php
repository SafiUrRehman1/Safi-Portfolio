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
$technology_slugs  = ( $technology_terms && ! is_wp_error( $technology_terms ) )
	? wp_list_pluck( $technology_terms, 'slug' )
	: array();

$category_terms = get_the_terms( $project->ID, 'project_category' );
$category_name   = ( $category_terms && ! is_wp_error( $category_terms ) && ! empty( $category_terms ) )
	? $category_terms[0]->name
	: '';
?>
<article class="project-card" data-technologies="<?php echo esc_attr( implode( ',', $technology_slugs ) ); ?>">
	<a class="project-card__link" href="<?php echo esc_url( get_permalink( $project ) ); ?>">
		<div class="project-card__media">
			<?php if ( has_post_thumbnail( $project ) ) : ?>
				<?php echo get_the_post_thumbnail( $project, 'medium', array( 'class' => 'project-card__image', 'loading' => 'lazy' ) ); ?>
			<?php else : ?>
				<div class="project-card__placeholder" aria-hidden="true">
					<span class="project-card__placeholder-glyph"><?php echo esc_html( mb_substr( get_the_title( $project ), 0, 1 ) ); ?></span>
				</div>
			<?php endif; ?>
		</div>
		<div class="project-card__body">
			<?php if ( $index || $category_name ) : ?>
				<p class="project-card__kicker">
					<?php if ( $index ) : ?>
						<span class="project-card__index"><?php echo esc_html( str_pad( (string) $index, 2, '0', STR_PAD_LEFT ) ); ?></span>
					<?php endif; ?>
					<?php if ( $category_name ) : ?>
						<span class="project-card__category"><?php echo esc_html( $category_name ); ?></span>
					<?php endif; ?>
				</p>
			<?php endif; ?>
			<h3 class="project-card__title"><?php echo esc_html( get_the_title( $project ) ); ?></h3>
			<?php $excerpt = get_the_excerpt( $project ); ?>
			<?php if ( $excerpt ) : ?>
				<p class="project-card__excerpt"><?php echo esc_html( $excerpt ); ?></p>
			<?php endif; ?>
		</div>
	</a>
	<?php get_template_part( 'template-parts/tech-tags', null, array( 'post_id' => $project->ID ) ); ?>
</article>
