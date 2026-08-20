<?php
/**
 * Template Name: Contact
 *
 * The quiet final room of the portfolio — deliberately more minimal than
 * About. A contact form is the primary action, submitted natively via
 * admin-post.php (no form-builder plugin) — see
 * portfolio_theme_handle_contact_form() in functions.php. Only renders
 * links/details that are actually configured — nothing here is invented.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();
get_template_part( 'template-parts/back-to-workspace' );

$github_url    = get_theme_mod( 'portfolio_github_url', '' );
$linkedin_url  = get_theme_mod( 'portfolio_linkedin_url', '' );
$resume_url    = get_theme_mod( 'portfolio_resume_url', '' );

$contact_result = isset( $_GET['contact'] ) ? sanitize_text_field( wp_unslash( $_GET['contact'] ) ) : '';

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

			<!-- 2. Contact form (primary action) -->
			<section class="section section--editorial contact-primary">
				<div class="container">
					<p class="eyebrow" data-reveal><?php esc_html_e( 'Send a message', 'portfolio-theme' ); ?></p>

					<?php if ( 'sent' === $contact_result ) : ?>
						<p class="contact-form__notice contact-form__notice--success" data-reveal>
							<?php esc_html_e( "Thanks — I've received your message and will get back to you soon.", 'portfolio-theme' ); ?>
						</p>
					<?php elseif ( 'error' === $contact_result ) : ?>
						<p class="contact-form__notice contact-form__notice--error" data-reveal>
							<?php esc_html_e( 'Something went wrong sending that — please fill in your name, a valid email, and a message, then try again.', 'portfolio-theme' ); ?>
						</p>
					<?php endif; ?>

					<form class="contact-form" data-reveal data-reveal-delay="1" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
						<input type="hidden" name="action" value="portfolio_contact" />
						<?php wp_nonce_field( 'portfolio_contact_form', 'portfolio_contact_nonce' ); ?>

						<div class="contact-form__honeypot" aria-hidden="true">
							<label for="portfolio_contact_website">Website</label>
							<input type="text" id="portfolio_contact_website" name="portfolio_contact_website" tabindex="-1" autocomplete="off" />
						</div>

						<div class="contact-form__row">
							<div class="contact-form__field">
								<label class="contact-form__label" for="contact-name"><?php esc_html_e( 'Name', 'portfolio-theme' ); ?></label>
								<input class="contact-form__input" type="text" id="contact-name" name="name" required />
							</div>
							<div class="contact-form__field">
								<label class="contact-form__label" for="contact-company"><?php esc_html_e( 'Company (optional)', 'portfolio-theme' ); ?></label>
								<input class="contact-form__input" type="text" id="contact-company" name="company" />
							</div>
						</div>

						<div class="contact-form__row">
							<div class="contact-form__field">
								<label class="contact-form__label" for="contact-email"><?php esc_html_e( 'Email', 'portfolio-theme' ); ?></label>
								<input class="contact-form__input" type="email" id="contact-email" name="email" required />
							</div>
							<div class="contact-form__field">
								<label class="contact-form__label" for="contact-phone"><?php esc_html_e( 'Phone (optional)', 'portfolio-theme' ); ?></label>
								<input class="contact-form__input" type="tel" id="contact-phone" name="phone" />
							</div>
						</div>

						<div class="contact-form__field">
							<label class="contact-form__label" for="contact-interest"><?php esc_html_e( 'Interested in (optional)', 'portfolio-theme' ); ?></label>
							<select class="contact-form__input contact-form__select" id="contact-interest" name="interest">
								<option value=""><?php esc_html_e( 'Select one', 'portfolio-theme' ); ?></option>
								<option value="Project"><?php esc_html_e( 'A project', 'portfolio-theme' ); ?></option>
								<option value="Collaboration"><?php esc_html_e( 'Collaboration', 'portfolio-theme' ); ?></option>
								<option value="Opportunity"><?php esc_html_e( 'A development opportunity', 'portfolio-theme' ); ?></option>
								<option value="Other"><?php esc_html_e( 'Something else', 'portfolio-theme' ); ?></option>
							</select>
						</div>

						<div class="contact-form__field">
							<label class="contact-form__label" for="contact-message"><?php esc_html_e( 'Message', 'portfolio-theme' ); ?></label>
							<textarea class="contact-form__input contact-form__textarea" id="contact-message" name="message" rows="5" required></textarea>
						</div>

						<div class="contact-form__submit-row">
							<button type="submit" class="button button--primary"><?php esc_html_e( 'Send message', 'portfolio-theme' ); ?></button>
							<p class="contact-form__hint">
								<?php esc_html_e( "Used only to reply to you — never shared.", 'portfolio-theme' ); ?>
							</p>
						</div>
					</form>
				</div>
			</section>

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
