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

require_once PORTFOLIO_CONTENT_PATH . 'includes/class-cpt-project.php';
require_once PORTFOLIO_CONTENT_PATH . 'includes/class-taxonomy-project-category.php';
require_once PORTFOLIO_CONTENT_PATH . 'includes/class-taxonomy-technology.php';
require_once PORTFOLIO_CONTENT_PATH . 'includes/class-project-meta.php';
require_once PORTFOLIO_CONTENT_PATH . 'includes/class-rest-graph.php';

Portfolio_CPT_Project::init();
Portfolio_Taxonomy_Project_Category::init();
Portfolio_Taxonomy_Technology::init();
Portfolio_Project_Meta::init();
Portfolio_REST_Graph::init();

register_activation_hook( __FILE__, 'portfolio_content_activate' );
function portfolio_content_activate() {
	Portfolio_CPT_Project::register();
	Portfolio_Taxonomy_Project_Category::register();
	Portfolio_Taxonomy_Technology::register();
	flush_rewrite_rules();
}

register_deactivation_hook( __FILE__, 'portfolio_content_deactivate' );
function portfolio_content_deactivate() {
	flush_rewrite_rules();
}
