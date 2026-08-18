<?php
/**
 * Template Name: About
 *
 * A quiet editorial extension of the homepage workspace — not an "About Me"
 * page with a giant paragraph and skill cards. Content is fixed/structural
 * (real biographical facts, not editable post content) since it needs
 * specific grouping/hierarchy the block editor's the_content() can't give
 * us; the page's own title/content still render normally beforehand for
 * anyone who edits this page in wp-admin, they just aren't the visual focus.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
get_template_part( 'template-parts/back-to-workspace' );

$contact_url = portfolio_theme_get_page_url_by_template( 'template-contact.php' );

$restaurant_project_id = portfolio_theme_find_project_by_title( 'Restaurant Management System' );
$certificate_url        = get_theme_mod( 'portfolio_certificate_url', '' );

while ( have_posts() ) :
	the_post();
	?>
	<main id="main-content">
		<article <?php post_class( 'about-page' ); ?>>

			<!-- 1. Hero / introduction -->
			<section class="section section--editorial about-hero">
				<div class="container">
					<p class="eyebrow" data-reveal><?php esc_html_e( 'About', 'portfolio-theme' ); ?></p>
					<h1 class="about-hero__title" data-reveal data-reveal-delay="1">
						<?php esc_html_e( 'Building things that are meant to work.', 'portfolio-theme' ); ?>
					</h1>
					<p class="about-hero__intro" data-reveal data-reveal-delay="2">
						<?php esc_html_e( "I'm Safi, a software developer focused on building practical, reliable software and thoughtful digital experiences.", 'portfolio-theme' ); ?>
					</p>
					<p class="about-hero__body" data-reveal data-reveal-delay="2">
						<?php esc_html_e( 'I enjoy turning ideas into working products — applications, APIs, databases, and interactive web experiences — and I\'m continually building a stronger foundation as a software engineer.', 'portfolio-theme' ); ?>
					</p>
				</div>
			</section>

			<!-- 2. Currently building -->
			<section class="section section--editorial about-direction">
				<div class="container about-direction__grid">
					<div data-reveal>
						<p class="eyebrow"><?php esc_html_e( 'Currently building', 'portfolio-theme' ); ?></p>
						<p class="about-direction__statement"><?php esc_html_e( 'Full-Stack Development', 'portfolio-theme' ); ?></p>
					</div>
					<div class="about-direction__support" data-reveal data-reveal-delay="1">
						<p><?php esc_html_e( "I'm developing stronger foundations across:", 'portfolio-theme' ); ?></p>
						<ul class="about-direction__list">
							<li><?php esc_html_e( 'Frontend', 'portfolio-theme' ); ?></li>
							<li><?php esc_html_e( 'Backend', 'portfolio-theme' ); ?></li>
							<li><?php esc_html_e( 'APIs', 'portfolio-theme' ); ?></li>
							<li><?php esc_html_e( 'Databases', 'portfolio-theme' ); ?></li>
							<li><?php esc_html_e( 'Software architecture', 'portfolio-theme' ); ?></li>
						</ul>
					</div>
				</div>
			</section>

			<!-- 3. Technical skills -->
			<section class="section section--editorial about-skills">
				<div class="container">
					<p class="eyebrow" data-reveal><?php esc_html_e( 'Technical skills', 'portfolio-theme' ); ?></p>
					<div class="about-skills__grid" data-reveal data-reveal-delay="1">
						<div class="about-skills__group">
							<p class="about-skills__label"><?php esc_html_e( 'Languages & Concepts', 'portfolio-theme' ); ?></p>
							<p class="about-skills__value">C++ / OOP / C# / PHP / JavaScript</p>
						</div>
						<div class="about-skills__group">
							<p class="about-skills__label"><?php esc_html_e( 'Backend', 'portfolio-theme' ); ?></p>
							<p class="about-skills__value">ASP.NET Core / REST APIs</p>
						</div>
						<div class="about-skills__group">
							<p class="about-skills__label"><?php esc_html_e( 'Data', 'portfolio-theme' ); ?></p>
							<p class="about-skills__value">SQL Server</p>
						</div>
						<div class="about-skills__group">
							<p class="about-skills__label"><?php esc_html_e( 'Web', 'portfolio-theme' ); ?></p>
							<p class="about-skills__value">HTML / CSS / WordPress</p>
						</div>
						<div class="about-skills__group">
							<p class="about-skills__label"><?php esc_html_e( 'Tools', 'portfolio-theme' ); ?></p>
							<p class="about-skills__value">Git / GitHub</p>
						</div>
					</div>
				</div>
			</section>

			<!-- 4. Education -->
			<section class="section section--editorial about-education">
				<div class="container">
					<p class="eyebrow" data-reveal><?php esc_html_e( 'Education', 'portfolio-theme' ); ?></p>
					<div class="about-entry" data-reveal data-reveal-delay="1">
						<p class="about-entry__title">BSCS</p>
						<p class="about-entry__subtitle">Lahore Garrison University</p>
						<p class="about-entry__meta">
							<?php esc_html_e( '5th Semester', 'portfolio-theme' ); ?>
							&middot;
							<?php esc_html_e( 'Expected graduation 2028', 'portfolio-theme' ); ?>
						</p>
					</div>
				</div>
			</section>

			<!-- 5. Experience -->
			<section class="section section--editorial about-experience">
				<div class="container">
					<p class="eyebrow" data-reveal><?php esc_html_e( 'Experience', 'portfolio-theme' ); ?></p>
					<div class="about-entry" data-reveal data-reveal-delay="1">
						<p class="about-entry__title"><?php esc_html_e( 'Remote Backend Development Intern', 'portfolio-theme' ); ?></p>
						<p class="about-entry__subtitle">CodeAlpha</p>

						<ul class="about-experience__projects">
							<li>
								<?php if ( $restaurant_project_id ) : ?>
									<a href="<?php echo esc_url( get_permalink( $restaurant_project_id ) ); ?>">
										<?php esc_html_e( 'Restaurant Management System', 'portfolio-theme' ); ?>
									</a>
								<?php else : ?>
									<?php esc_html_e( 'Restaurant Management System', 'portfolio-theme' ); ?>
								<?php endif; ?>
							</li>
							<li><?php esc_html_e( 'URL Shortener', 'portfolio-theme' ); ?></li>
							<li><?php esc_html_e( 'Event Registration System', 'portfolio-theme' ); ?></li>
						</ul>

						<?php if ( $certificate_url ) : ?>
							<a class="about-entry__certificate" href="<?php echo esc_url( $certificate_url ); ?>" target="_blank" rel="noopener noreferrer">
								<?php esc_html_e( 'View certificate', 'portfolio-theme' ); ?> &rarr;
							</a>
						<?php endif; ?>
					</div>
				</div>
			</section>

			<!-- 6. How I work -->
			<section class="section section--editorial about-principles">
				<div class="container">
					<p class="eyebrow" data-reveal><?php esc_html_e( 'How I work', 'portfolio-theme' ); ?></p>
					<ul class="about-principles__list" data-reveal data-reveal-delay="1">
						<li><?php esc_html_e( 'Understand the problem before building.', 'portfolio-theme' ); ?></li>
						<li><?php esc_html_e( 'Keep systems maintainable.', 'portfolio-theme' ); ?></li>
						<li><?php esc_html_e( 'Learn by building real projects.', 'portfolio-theme' ); ?></li>
						<li><?php esc_html_e( 'Care about both engineering and user experience.', 'portfolio-theme' ); ?></li>
					</ul>
				</div>
			</section>

			<?php if ( get_the_content() ) : ?>
				<section class="section section--editorial about-extra">
					<div class="container page-content__body">
						<?php the_content(); ?>
					</div>
				</section>
			<?php endif; ?>

			<!-- 7. Closing -->
			<section class="section section--editorial about-closing">
				<div class="container">
					<p class="about-closing__title" data-reveal><?php esc_html_e( 'Have something worth building?', 'portfolio-theme' ); ?></p>
					<?php if ( $contact_url ) : ?>
						<a class="about-closing__cta" href="<?php echo esc_url( $contact_url ); ?>" data-reveal data-reveal-delay="1">
							<?php esc_html_e( "Let's talk", 'portfolio-theme' ); ?> &rarr;
						</a>
					<?php endif; ?>
				</div>
			</section>

		</article>
	</main>
	<?php
endwhile;

get_footer();
