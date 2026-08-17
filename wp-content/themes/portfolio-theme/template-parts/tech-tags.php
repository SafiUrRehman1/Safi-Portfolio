<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$post_id = isset( $args['post_id'] ) ? absint( $args['post_id'] ) : get_the_ID();
$terms   = get_the_terms( $post_id, 'technology' );

if ( $terms && ! is_wp_error( $terms ) ) :
	?>
	<ul class="tech-tags">
		<?php foreach ( $terms as $term ) : ?>
			<li class="tech-tags__item"><?php echo esc_html( $term->name ); ?></li>
		<?php endforeach; ?>
	</ul>
	<?php
endif;
