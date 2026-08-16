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
}
add_action( 'after_setup_theme', 'portfolio_theme_setup' );
