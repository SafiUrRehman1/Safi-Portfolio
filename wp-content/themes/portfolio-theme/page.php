<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

while ( have_posts() ) :
	the_post();
	?>
	<main id="main-content">
		<article <?php post_class( 'page-content' ); ?>>
			<div class="container">
				<header class="page-content__header">
					<h1 class="page-content__title"><?php the_title(); ?></h1>
				</header>
				<div class="page-content__body">
					<?php the_content(); ?>
				</div>
			</div>
		</article>
	</main>
	<?php
endwhile;

get_footer();
