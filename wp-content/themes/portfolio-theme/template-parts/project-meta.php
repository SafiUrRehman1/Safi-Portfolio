<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$post_id    = isset( $args['post_id'] ) ? absint( $args['post_id'] ) : get_the_ID();
$github_url = get_post_meta( $post_id, 'github_url', true );
$demo_url   = get_post_meta( $post_id, 'live_demo_url', true );
$extra_meta = get_post_meta( $post_id, 'project_meta', true );
$categories = get_the_terms( $post_id, 'project_category' );
?>
<div class="project-meta">
	<?php if ( $categories && ! is_wp_error( $categories ) ) : ?>
		<p class="project-meta__categories">
			<?php foreach ( $categories as $category ) : ?>
				<span class="project-meta__category"><?php echo esc_html( $category->name ); ?></span>
			<?php endforeach; ?>
		</p>
	<?php endif; ?>

	<?php get_template_part( 'template-parts/tech-tags', null, array( 'post_id' => $post_id ) ); ?>

	<?php if ( $github_url || $demo_url ) : ?>
		<div class="project-meta__links">
			<?php if ( $github_url ) : ?>
				<a class="button button--outline" href="<?php echo esc_url( $github_url ); ?>" target="_blank" rel="noopener noreferrer">
					<?php esc_html_e( 'View on GitHub', 'portfolio-theme' ); ?>
				</a>
			<?php endif; ?>
			<?php if ( $demo_url ) : ?>
				<a class="button button--primary" href="<?php echo esc_url( $demo_url ); ?>" target="_blank" rel="noopener noreferrer">
					<?php esc_html_e( 'Live Demo', 'portfolio-theme' ); ?>
				</a>
			<?php endif; ?>
		</div>
	<?php endif; ?>

	<?php if ( is_array( $extra_meta ) && ! empty( $extra_meta ) ) : ?>
		<dl class="project-meta__extra">
			<?php foreach ( $extra_meta as $row ) : ?>
				<?php if ( empty( $row['label'] ) && empty( $row['value'] ) ) { continue; } ?>
				<div class="project-meta__extra-row">
					<dt><?php echo esc_html( $row['label'] ); ?></dt>
					<dd><?php echo esc_html( $row['value'] ); ?></dd>
				</div>
			<?php endforeach; ?>
		</dl>
	<?php endif; ?>
</div>
