<?php
/**
 * Template Name: Contact
 *
 * The quiet final room of the portfolio — deliberately more minimal than
 * About. Email is the primary action (large, elegant, copyable); a real
 * contact form isn't warranted here. Only renders links/details that are
 * actually configured — nothing here is invented.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
get_template_part( 'template-parts/back-to-workspace' );

$email       = get_theme_mod( 'portfolio_email', '' );
if ( ! $email ) {
	$email = get_option( 'admin_email' );
}
$github_url    = get_theme_mod( 'portfolio_github_url', '' );
$linkedin_url  = get_theme_mod( 'portfolio_linkedin_url', '' );
$resume_url    = get_theme_mod( 'portfolio_resume_url', '' );

while ( have_posts() ) :
	the_post();
	?>
	<main id="main-content">
		<article <?php post_class( 'contact-page' ); ?>>

			<!-- 1. Opening -->
			<section class="section section--editorial contact-hero">
				<div class="container">
					<h1 class="contact-hero__title" data-reveal><?php esc_html_e( "Let's build something.", 'portfolio-theme' ); ?></h1>
					<p class="contact-hero__support" data-reveal data-reveal-delay="1">
						<?php esc_html_e( "I'm open to conversations about projects, collaboration, development opportunities, and interesting ideas.", 'portfolio-theme' ); ?>
					</p>
				</div>
			</section>

			<?php if ( $email ) : ?>
				<!-- 2. Primary contact -->
				<section class="section section--editorial contact-primary">
					<div class="container">
						<p class="eyebrow" data-reveal><?php esc_html_e( 'Email', 'portfolio-theme' ); ?></p>
						<div class="contact-email" data-reveal data-reveal-delay="1">
							<a class="contact-email__address" href="<?php echo esc_url( 'mailto:' . antispambot( $email ) ); ?>">
								<?php echo esc_html( $email ); ?>
							</a>
							<button
								type="button"
								class="contact-email__copy"
								data-copy-email="<?php echo esc_attr( $email ); ?>"
								data-copied-label="<?php echo esc_attr__( 'Copied', 'portfolio-theme' ); ?>"
							>
								<?php esc_html_e( 'Copy email', 'portfolio-theme' ); ?>
							</button>
						</div>
					</div>
				</section>
			<?php endif; ?>

			<?php if ( $github_url || $linkedin_url || $resume_url ) : ?>
				<!-- 3. Social / professional links -->
				<section class="section section--editorial contact-links">
					<div class="container">
						<p class="eyebrow" data-reveal><?php esc_html_e( 'Elsewhere', 'portfolio-theme' ); ?></p>
						<ul class="contact-links__list" data-reveal data-reveal-delay="1">
							<?php if ( $github_url ) : ?>
								<li><a href="<?php echo esc_url( $github_url ); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e( 'GitHub', 'portfolio-theme' ); ?></a></li>
							<?php endif; ?>
							<?php if ( $linkedin_url ) : ?>
								<li><a href="<?php echo esc_url( $linkedin_url ); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e( 'LinkedIn', 'portfolio-theme' ); ?></a></li>
							<?php endif; ?>
							<?php if ( $resume_url ) : ?>
								<li><a href="<?php echo esc_url( $resume_url ); ?>" target="_blank" rel="noopener noreferrer"><?php esc_html_e( 'Resume', 'portfolio-theme' ); ?></a></li>
							<?php endif; ?>
						</ul>
					</div>
				</section>
			<?php endif; ?>

			<?php if ( get_the_content() ) : ?>
				<section class="section section--editorial page-content__body container">
					<?php the_content(); ?>
				</section>
			<?php endif; ?>

			<!-- 4. Minimal closing visual -->
			<div class="contact-closing" aria-hidden="true">
				<span class="contact-closing__caret">_</span>
			</div>

		</article>
	</main>
	<?php
endwhile;

get_footer();
