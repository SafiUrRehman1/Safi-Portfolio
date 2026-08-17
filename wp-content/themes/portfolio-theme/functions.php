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
		wp_enqueue_script(
			'portfolio-theme-main',
			get_template_directory_uri() . '/dist/' . $manifest['src/js/main.js']['file'],
			array(),
			$theme_version,
			true
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
