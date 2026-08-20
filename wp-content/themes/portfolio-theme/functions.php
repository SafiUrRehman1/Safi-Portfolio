<?php
/**
 * Theme setup and asset enqueue only. No CPT/taxonomy logic belongs here —
 * that is owned by the portfolio-content plugin.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * WordPress core's emoji-detection script/styles are dead weight for any
 * modern browser (they all render emoji natively) — it costs an external
 * request to s.w.org, an extra inline script+worker on every single page,
 * and a render-blocking style tag, for a feature this site never needs.
 */
function portfolio_theme_disable_emoji() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
}
add_action( 'init', 'portfolio_theme_disable_emoji' );

function portfolio_theme_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support(
		'html5',
		array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' )
	);

	register_nav_menus(
		array(
			'primary' => __( 'Primary Navigation', 'portfolio-theme' ),
		)
	);
}
add_action( 'after_setup_theme', 'portfolio_theme_setup' );

/**
 * Contact form handler — native WordPress (admin-post.php), no form-builder
 * plugin. Validates, rejects obvious bots via a honeypot, emails the site
 * owner, and always additionally appends every valid submission to a
 * private log file, so nothing is ever lost even on a submission where
 * mail delivery fails for some reason. The log lives inside wp-content/ —
 * not "outside the web root" in the filesystem sense, but nginx already
 * denies any *.log request at the server level (see the site's nginx
 * config), and this location is guaranteed writable by the PHP process
 * (unlike, say, the parent of ABSPATH, which is root-owned on a standard
 * /var/www layout and silently failed here before).
 */
function portfolio_theme_contact_log_path() {
	return WP_CONTENT_DIR . '/portfolio-contact-submissions.log';
}

function portfolio_theme_handle_contact_form() {
	$redirect_base = wp_get_referer() ?: home_url( '/contact/' );

	if ( ! isset( $_POST['portfolio_contact_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['portfolio_contact_nonce'] ) ), 'portfolio_contact_form' ) ) {
		wp_safe_redirect( add_query_arg( 'contact', 'error', $redirect_base ) );
		exit;
	}

	// Honeypot: a field real visitors never see or fill. Bots that fill
	// every field trip it — redirect as if it succeeded so they don't learn
	// it was rejected, without ever emailing or logging anything.
	if ( ! empty( $_POST['portfolio_contact_website'] ) ) {
		wp_safe_redirect( add_query_arg( 'contact', 'sent', $redirect_base ) );
		exit;
	}

	$name     = sanitize_text_field( wp_unslash( $_POST['name'] ?? '' ) );
	$company  = sanitize_text_field( wp_unslash( $_POST['company'] ?? '' ) );
	$email    = sanitize_email( wp_unslash( $_POST['email'] ?? '' ) );
	$phone    = sanitize_text_field( wp_unslash( $_POST['phone'] ?? '' ) );
	$interest = sanitize_text_field( wp_unslash( $_POST['interest'] ?? '' ) );
	$message  = sanitize_textarea_field( wp_unslash( $_POST['message'] ?? '' ) );

	if ( ! $name || ! is_email( $email ) || ! $message ) {
		wp_safe_redirect( add_query_arg( 'contact', 'error', $redirect_base ) );
		exit;
	}

	$lines = array( "Name: $name" );
	if ( $company ) {
		$lines[] = "Company: $company";
	}
	$lines[] = "Email: $email";
	if ( $phone ) {
		$lines[] = "Phone: $phone";
	}
	if ( $interest ) {
		$lines[] = "Interested in: $interest";
	}
	$lines[] = '';
	$lines[] = 'Message:';
	$lines[] = $message;
	$body     = implode( "\n", $lines );

	$to      = get_theme_mod( 'portfolio_email', '' ) ?: get_option( 'admin_email' );
	$subject = sprintf( '[%s] New message from %s', get_bloginfo( 'name' ), $name );
	$mailed  = wp_mail( $to, $subject, $body, array( 'Reply-To: ' . $name . ' <' . $email . '>' ) );

	$log_entry = sprintf(
		"[%s]\n%s\n%s\n\n",
		gmdate( 'Y-m-d H:i:s' ) . ' UTC',
		$body,
		str_repeat( '-', 40 )
	);
	$logged = @file_put_contents( portfolio_theme_contact_log_path(), $log_entry, FILE_APPEND | LOCK_EX );

	// The visitor sees "sent" if the message was captured by either means —
	// email delivery failing shouldn't tell them it was lost when the log
	// still has it, and vice versa.
	$captured = $mailed || false !== $logged;
	wp_safe_redirect( add_query_arg( 'contact', $captured ? 'sent' : 'error', $redirect_base ) );
	exit;
}
add_action( 'admin_post_portfolio_contact', 'portfolio_theme_handle_contact_form' );
add_action( 'admin_post_nopriv_portfolio_contact', 'portfolio_theme_handle_contact_form' );

/**
 * wp_mail()'s default transport is the server's local mail command, which
 * on a cloud VM either doesn't exist (nothing to send with) or gets
 * spam-filtered by the receiving mailbox even when it does — cloud
 * provider IP ranges have a poor sending reputation for direct-to-MX mail.
 * Relaying through an authenticated SMTP account (here, a Gmail App
 * Password) sends as real, already-trusted mail instead. Credentials live
 * only in wp-config.php constants on the server, never in this file or in
 * git; this stays a silent no-op wherever those constants aren't defined
 * (e.g. the dev machine), so wp_mail() there keeps its existing behavior.
 */
function portfolio_theme_configure_smtp( $phpmailer ) {
	if ( ! defined( 'PORTFOLIO_SMTP_HOST' ) || ! defined( 'PORTFOLIO_SMTP_USERNAME' ) || ! defined( 'PORTFOLIO_SMTP_PASSWORD' ) ) {
		return;
	}

	$phpmailer->isSMTP();
	$phpmailer->Host       = PORTFOLIO_SMTP_HOST;
	$phpmailer->Port       = defined( 'PORTFOLIO_SMTP_PORT' ) ? PORTFOLIO_SMTP_PORT : 587;
	$phpmailer->SMTPAuth   = true;
	$phpmailer->Username   = PORTFOLIO_SMTP_USERNAME;
	$phpmailer->Password   = PORTFOLIO_SMTP_PASSWORD;
	$phpmailer->SMTPSecure = 'tls';
	$phpmailer->From       = PORTFOLIO_SMTP_USERNAME;
	$phpmailer->FromName   = get_bloginfo( 'name' );
}
add_action( 'phpmailer_init', 'portfolio_theme_configure_smtp' );

/**
 * WordPress only marks a menu item "current" on an exact URL match, so the
 * Projects nav link doesn't light up while viewing an individual project
 * (a different URL under the same section). Extends that highlighting to
 * cover single project pages too.
 */
function portfolio_theme_nav_current_class( $classes, $item ) {
	if ( is_singular( 'project' ) && $item->url === get_post_type_archive_link( 'project' ) ) {
		$classes[] = 'current-menu-item';
	}

	return $classes;
}
add_filter( 'nav_menu_css_class', 'portfolio_theme_nav_current_class', 10, 2 );

/**
 * Favicon (a plain SVG matching the header logo's own accent-dot mark —
 * not a separate visual identity) plus a meta description/Open Graph tag
 * for link previews. No SEO plugin — this is the entire, minimal set of
 * head tags a portfolio meant to be shared needs, using only real content
 * already on each page (never invented copy).
 */
function portfolio_theme_head_extras() {
	echo '<link rel="icon" type="image/svg+xml" href="' . esc_url( get_template_directory_uri() . '/favicon.svg' ) . '" />' . "\n";

	if ( is_page_template( 'template-about.php' ) ) {
		$description = __( "I'm Safi, a software developer focused on building practical, reliable software and thoughtful digital experiences.", 'portfolio-theme' );
	} elseif ( is_page_template( 'template-contact.php' ) ) {
		$description = __( 'Open to conversations about projects, collaboration, development opportunities, and interesting ideas.', 'portfolio-theme' );
	} elseif ( is_post_type_archive( 'project' ) ) {
		$description = __( 'A selection of software projects spanning web apps, APIs, and full-stack systems.', 'portfolio-theme' );
	} elseif ( is_singular( 'project' ) ) {
		$description = has_excerpt() ? get_the_excerpt() : wp_trim_words( wp_strip_all_tags( get_the_content() ), 30 );
	} else {
		$description = get_bloginfo( 'description' );
	}

	$description = trim( wp_strip_all_tags( $description ) );
	if ( ! $description ) {
		return;
	}

	echo '<meta name="description" content="' . esc_attr( $description ) . '" />' . "\n";
	echo '<meta property="og:type" content="website" />' . "\n";
	echo '<meta property="og:title" content="' . esc_attr( wp_get_document_title() ) . '" />' . "\n";
	echo '<meta property="og:description" content="' . esc_attr( $description ) . '" />' . "\n";
	echo '<meta property="og:url" content="' . esc_url( is_front_page() ? home_url( '/' ) : get_permalink() ) . '" />' . "\n";
}
add_action( 'wp_head', 'portfolio_theme_head_extras', 1 );

/**
 * The Projects archive is presented as one continuous scroll-driven
 * showcase, not a paginated grid, so every published project needs to be
 * on a single page. This is a presentation-layer query change only — it
 * does not touch the CPT registration, taxonomies, or meta in the
 * portfolio-content plugin.
 */
function portfolio_theme_project_archive_query( $query ) {
	if ( is_admin() || ! $query->is_main_query() ) {
		return;
	}

	if ( ! $query->is_post_type_archive( 'project' ) ) {
		return;
	}

	$query->set( 'posts_per_page', -1 );
	$query->set( 'orderby', 'menu_order' );
	$query->set( 'order', 'ASC' );
}
add_action( 'pre_get_posts', 'portfolio_theme_project_archive_query' );

/**
 * Finds the permalink of the published page assigned a given page template,
 * rather than assuming a hardcoded slug (e.g. "/about/") — the site owner
 * can rename a page's slug at any time without breaking whatever links to it
 * by template instead.
 */
function portfolio_theme_get_page_url_by_template( $template_file ) {
	$pages = get_posts(
		array(
			'post_type'      => 'page',
			'post_status'    => 'publish',
			'posts_per_page' => 1,
			'meta_key'       => '_wp_page_template',
			'meta_value'     => $template_file,
			'fields'         => 'ids',
		)
	);

	if ( empty( $pages ) ) {
		return '';
	}

	return get_permalink( $pages[0] );
}

/**
 * Finds a published project by exact title — used by the About page's
 * Experience section to link internship projects to their portfolio pages
 * where one exists, without hardcoding IDs/slugs or inventing a link when
 * no matching project has been added yet.
 */
function portfolio_theme_find_project_by_title( $title ) {
	$posts = get_posts(
		array(
			'post_type'      => 'project',
			'post_status'    => 'publish',
			'posts_per_page' => 1,
			'title'          => $title,
			'fields'         => 'ids',
		)
	);

	return empty( $posts ) ? 0 : $posts[0];
}

/**
 * A GitHub profile URL, resume link, contact email, LinkedIn URL, and an
 * optional certificate link are personal, editable settings, not content
 * the Projects/taxonomy architecture owns — the Customizer is the right
 * home for them (plain text/URL fields, no plugin change needed, no ACF).
 */
function portfolio_theme_customize_register( $wp_customize ) {
	$wp_customize->add_section(
		'portfolio_theme_links',
		array(
			'title'    => __( 'Contact & Links', 'portfolio-theme' ),
			'priority' => 160,
		)
	);

	$wp_customize->add_setting(
		'portfolio_email',
		array(
			'type'              => 'theme_mod',
			'default'           => '',
			'sanitize_callback' => 'sanitize_email',
			'transport'         => 'refresh',
		)
	);
	$wp_customize->add_control(
		'portfolio_email',
		array(
			'section'     => 'portfolio_theme_links',
			'label'       => __( 'Contact form recipient', 'portfolio-theme' ),
			'type'        => 'email',
			'description' => __( 'Private — where contact form submissions are sent. Never shown on the site. Falls back to the site admin email if left blank.', 'portfolio-theme' ),
		)
	);

	$wp_customize->add_setting(
		'portfolio_public_email',
		array(
			'type'              => 'theme_mod',
			'default'           => 'hello@safii.dev',
			'sanitize_callback' => 'sanitize_email',
			'transport'         => 'refresh',
		)
	);
	$wp_customize->add_control(
		'portfolio_public_email',
		array(
			'section'     => 'portfolio_theme_links',
			'label'       => __( 'Public email', 'portfolio-theme' ),
			'type'        => 'email',
			'description' => __( 'Shown on the Contact page. A separate, public-facing address — not the private recipient above. Leave blank to hide it.', 'portfolio-theme' ),
		)
	);

	$wp_customize->add_setting(
		'portfolio_linkedin_url',
		array(
			'type'              => 'theme_mod',
			'default'           => '',
			'sanitize_callback' => 'esc_url_raw',
			'transport'         => 'refresh',
		)
	);
	$wp_customize->add_control(
		'portfolio_linkedin_url',
		array(
			'section' => 'portfolio_theme_links',
			'label'   => __( 'LinkedIn URL', 'portfolio-theme' ),
			'type'    => 'url',
		)
	);

	$wp_customize->add_setting(
		'portfolio_certificate_url',
		array(
			'type'              => 'theme_mod',
			'default'           => '',
			'sanitize_callback' => 'esc_url_raw',
			'transport'         => 'refresh',
		)
	);
	$wp_customize->add_control(
		'portfolio_certificate_url',
		array(
			'section'     => 'portfolio_theme_links',
			'label'       => __( 'CodeAlpha certificate URL', 'portfolio-theme' ),
			'type'        => 'url',
			'description' => __( 'Optional. Link to a hosted certificate (e.g. a media library file). Leave blank to hide the "View certificate" link on About.', 'portfolio-theme' ),
		)
	);

	$wp_customize->add_setting(
		'portfolio_github_url',
		array(
			'type'              => 'theme_mod',
			'default'           => '',
			'sanitize_callback' => 'esc_url_raw',
			'transport'         => 'refresh',
		)
	);
	$wp_customize->add_control(
		'portfolio_github_url',
		array(
			'section'     => 'portfolio_theme_links',
			'label'       => __( 'GitHub URL', 'portfolio-theme' ),
			'type'        => 'url',
			'description' => __( 'Used by the homepage workspace scene\'s terminal object.', 'portfolio-theme' ),
		)
	);

	$wp_customize->add_setting(
		'portfolio_resume_url',
		array(
			'type'              => 'theme_mod',
			'default'           => '',
			'sanitize_callback' => 'esc_url_raw',
			'transport'         => 'refresh',
		)
	);
	$wp_customize->add_control(
		'portfolio_resume_url',
		array(
			'section'     => 'portfolio_theme_links',
			'label'       => __( 'Resume URL', 'portfolio-theme' ),
			'type'        => 'url',
			'description' => __( 'Link to a hosted resume file (PDF or otherwise). Used if GitHub URL is not set.', 'portfolio-theme' ),
		)
	);
}
add_action( 'customize_register', 'portfolio_theme_customize_register' );

/**
 * Minimal fallback menu so navigation still works before a menu is assigned
 * in Appearance > Menus.
 */
function portfolio_theme_menu_fallback() {
	echo '<ul class="site-nav__list">';
	echo '<li><a href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'Home', 'portfolio-theme' ) . '</a></li>';

	$projects_link = get_post_type_archive_link( 'project' );
	if ( $projects_link ) {
		echo '<li><a href="' . esc_url( $projects_link ) . '">' . esc_html__( 'Projects', 'portfolio-theme' ) . '</a></li>';
	}

	echo '</ul>';
}

/**
 * Enqueue the theme's built CSS/JS via the Vite manifest.
 * Falls back gracefully (no fatal) if the assets haven't been built yet.
 */
function portfolio_theme_enqueue_assets() {
	$manifest_path = get_template_directory() . '/dist/.vite/manifest.json';

	if ( ! file_exists( $manifest_path ) ) {
		$manifest_path = get_template_directory() . '/dist/manifest.json';
	}

	if ( ! file_exists( $manifest_path ) ) {
		return;
	}

	$manifest = json_decode( (string) file_get_contents( $manifest_path ), true );

	if ( ! is_array( $manifest ) ) {
		return;
	}

	$theme_version = wp_get_theme()->get( 'Version' );

	if ( isset( $manifest['src/css/tailwind.css']['file'] ) ) {
		wp_enqueue_style(
			'portfolio-theme-styles',
			get_template_directory_uri() . '/dist/' . $manifest['src/css/tailwind.css']['file'],
			array(),
			$theme_version
		);
	}

	if ( isset( $manifest['src/js/main.js']['file'] ) ) {
		// Classic script, not a module. type="module" scripts enforce CORS
		// on cross-origin loads (classic scripts don't) — since every asset
		// URL here is built from the site's configured siteurl, a visitor
		// reaching the site via any other hostname/IP than that exact
		// origin (e.g. localhost vs. a Tailscale IP/MagicDNS name) would
		// have this script silently blocked by the browser, which is
		// exactly what caused the "completely black" homepage. Three.js is
		// therefore statically imported inside workspace/index.js rather
		// than dynamically code-split — a real, disclosed bundle-size
		// trade-off in exchange for actually working regardless of which
		// hostname the site is reached through.
		wp_enqueue_script(
			'portfolio-theme-main',
			get_template_directory_uri() . '/dist/' . $manifest['src/js/main.js']['file'],
			array(),
			$theme_version,
			true
		);

		// The workspace scene's clickable objects navigate to real WordPress
		// destinations — resolved here in PHP (by post type archive / page
		// template / Customizer setting) rather than hardcoded in JS, so
		// renaming a page's slug or setting a GitHub/resume URL never
		// requires touching scene code.
		$github_url = get_theme_mod( 'portfolio_github_url', '' );
		$resume_url = get_theme_mod( 'portfolio_resume_url', '' );
		wp_localize_script(
			'portfolio-theme-main',
			'portfolioWorkspaceLinks',
			array(
				'projects' => get_post_type_archive_link( 'project' ) ?: '',
				'about'    => portfolio_theme_get_page_url_by_template( 'template-about.php' ),
				'contact'  => portfolio_theme_get_page_url_by_template( 'template-contact.php' ),
				'github'   => $github_url,
				'resume'   => $resume_url,
			)
		);

		// If main.js's own CSS import was bundled under the JS entry instead
		// of its own manifest key, enqueue it too.
		if ( ! empty( $manifest['src/js/main.js']['css'] ) ) {
			foreach ( $manifest['src/js/main.js']['css'] as $index => $css_file ) {
				wp_enqueue_style(
					'portfolio-theme-main-css-' . $index,
					get_template_directory_uri() . '/dist/' . $css_file,
					array(),
					$theme_version
				);
			}
		}
	}
}
add_action( 'wp_enqueue_scripts', 'portfolio_theme_enqueue_assets' );
