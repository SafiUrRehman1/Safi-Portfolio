<?php
/**
 * Theme setup and asset enqueue only. No CPT/taxonomy logic belongs here —
 * that is owned by the portfolio-content plugin.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

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
			'label'       => __( 'Contact email', 'portfolio-theme' ),
			'type'        => 'email',
			'description' => __( 'Shown on the Contact page. Falls back to the site admin email if left blank.', 'portfolio-theme' ),
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
