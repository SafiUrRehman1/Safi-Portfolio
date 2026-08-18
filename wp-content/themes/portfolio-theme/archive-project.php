<?php
/**
 * Projects archive — an immersive project-to-project storytelling
 * experience rather than a paginated card grid. Every published project
 * (via the pre_get_posts filter in functions.php) renders as a full
 * "scene" (template-parts/project-scene.php).
 *
 * On desktop with motion allowed, src/js/projects-showcase turns this into
 * a discrete scene-to-scene experience: one deliberate scroll/keyboard
 * gesture advances exactly one project via a GSAP timeline. On mobile, on
 * reduced-motion, or if that JS fails to initialize, scenes are plain
 * static stacked sections — no JS required to read every project.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
get_template_part( 'template-parts/back-to-workspace' );
?>
<main id="main-content">
	<header class="archive-header">
		<div class="container">
			<h1 class="archive-header__title"><?php post_type_archive_title(); ?></h1>
		</div>
	</header>

	<?php if ( have_posts() ) : ?>
		<div class="project-showcase" data-project-showcase>
			<div class="project-showcase__viewport" data-project-viewport>
				<?php
				$project_index = 0;
				while ( have_posts() ) :
					the_post();
					$project_index++;
					get_template_part(
						'template-parts/project-scene',
						null,
						array(
							'post_id' => get_the_ID(),
							'index'   => $project_index,
						)
					);
				endwhile;
				?>
			</div>
		</div>
	<?php else : ?>
		<section class="section">
			<div class="container">
				<p class="empty-state"><?php esc_html_e( 'No projects published yet.', 'portfolio-theme' ); ?></p>
			</div>
		</section>
	<?php endif; ?>
</main>
<?php
get_footer();
