<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
?>
<main id="main-content">
	<header class="archive-header">
		<div class="container">
			<h1 class="archive-header__title"><?php post_type_archive_title(); ?></h1>
		</div>
	</header>

	<section class="section">
		<div class="container">
			<?php if ( have_posts() ) : ?>
				<div class="project-grid">
					<?php
					while ( have_posts() ) :
						the_post();
						get_template_part( 'template-parts/project-card', null, array( 'post_id' => get_the_ID() ) );
					endwhile;
					?>
				</div>
				<?php the_posts_pagination(); ?>
			<?php else : ?>
				<p class="empty-state"><?php esc_html_e( 'No projects published yet.', 'portfolio-theme' ); ?></p>
			<?php endif; ?>
		</div>
	</section>
</main>
<?php
get_footer();
