<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Portfolio_CPT_Project {

	const POST_TYPE = 'project';

	public static function init() {
		add_action( 'init', array( __CLASS__, 'register' ) );
	}

	public static function register() {
		$labels = array(
			'name'                  => __( 'Projects', 'portfolio-content' ),
			'singular_name'         => __( 'Project', 'portfolio-content' ),
			'add_new'               => __( 'Add New', 'portfolio-content' ),
			'add_new_item'          => __( 'Add New Project', 'portfolio-content' ),
			'edit_item'             => __( 'Edit Project', 'portfolio-content' ),
			'new_item'              => __( 'New Project', 'portfolio-content' ),
			'view_item'             => __( 'View Project', 'portfolio-content' ),
			'view_items'            => __( 'View Projects', 'portfolio-content' ),
			'search_items'          => __( 'Search Projects', 'portfolio-content' ),
			'not_found'             => __( 'No projects found', 'portfolio-content' ),
			'not_found_in_trash'    => __( 'No projects found in Trash', 'portfolio-content' ),
			'all_items'             => __( 'All Projects', 'portfolio-content' ),
			'archives'              => __( 'Project Archives', 'portfolio-content' ),
			'featured_image'        => __( 'Featured Image', 'portfolio-content' ),
			'set_featured_image'    => __( 'Set featured image', 'portfolio-content' ),
			'remove_featured_image' => __( 'Remove featured image', 'portfolio-content' ),
		);

		register_post_type(
			self::POST_TYPE,
			array(
				'labels'            => $labels,
				'public'            => true,
				'has_archive'       => true,
				'show_in_rest'      => true,
				'menu_icon'         => 'dashicons-portfolio',
				'menu_position'     => 5,
				'rewrite'           => array(
					'slug'       => 'projects',
					'with_front' => false,
				),
				'supports'          => array( 'title', 'editor', 'excerpt', 'thumbnail', 'revisions', 'page-attributes', 'custom-fields' ),
				'taxonomies'        => array( 'project_category', 'technology' ),
				'capability_type'   => 'post',
				'show_in_admin_bar' => true,
			)
		);
	}
}
