<?php
/**
 * Plugin Name: Portfolio Content
 * Description: Site-specific plugin owning the portfolio's content architecture (Projects CPT, taxonomies, and REST graph data). No visual or template logic lives here — that belongs to the active theme.
 * Version: 0.1.0
 * Author: Safi
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'PORTFOLIO_CONTENT_PATH', plugin_dir_path( __FILE__ ) );
define( 'PORTFOLIO_CONTENT_URL', plugin_dir_url( __FILE__ ) );
