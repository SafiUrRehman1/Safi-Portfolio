<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$post_id = isset( $args['post_id'] ) ? absint( $args['post_id'] ) : get_the_ID();
$project = get_post( $post_id );

if ( ! $project ) {
	return;
}
?>
<article class="project-card">
	<a class="project-card__link" href="<?php echo esc_url( get_permalink( $project ) ); ?>">
		<?php if ( has_post_thumbnail( $project ) ) : ?>
			<div class="project-card__media">
				<?php echo get_the_post_thumbnail( $project, 'medium', array( 'class' => 'project-card__image', 'loading' => 'lazy' ) ); ?>
			</div>
		<?php endif; ?>
		<div class="project-card__body">
			<h3 class="project-card__title"><?php echo esc_html( get_the_title( $project ) ); ?></h3>
			<?php $excerpt = get_the_excerpt( $project ); ?>
			<?php if ( $excerpt ) : ?>
				<p class="project-card__excerpt"><?php echo esc_html( $excerpt ); ?></p>
			<?php endif; ?>
		</div>
	</a>
	<?php get_template_part( 'template-parts/tech-tags', null, array( 'post_id' => $project->ID ) ); ?>
</article>
