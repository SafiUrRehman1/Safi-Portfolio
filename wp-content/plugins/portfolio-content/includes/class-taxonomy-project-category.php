<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Portfolio_Taxonomy_Project_Category {

	const TAXONOMY = 'project_category';

	public static function init() {
		add_action( 'init', array( __CLASS__, 'register' ) );
	}

	public static function register() {
		$labels = array(
			'name'          => __( 'Project Categories', 'portfolio-content' ),
			'singular_name' => __( 'Project Category', 'portfolio-content' ),
			'search_items'  => __( 'Search Categories', 'portfolio-content' ),
			'all_items'     => __( 'All Categories', 'portfolio-content' ),
			'edit_item'     => __( 'Edit Category', 'portfolio-content' ),
			'update_item'   => __( 'Update Category', 'portfolio-content' ),
			'add_new_item'  => __( 'Add New Category', 'portfolio-content' ),
			'new_item_name' => __( 'New Category Name', 'portfolio-content' ),
			'menu_name'     => __( 'Categories', 'portfolio-content' ),
		);

		register_taxonomy(
			self::TAXONOMY,
			array( Portfolio_CPT_Project::POST_TYPE ),
			array(
				'labels'            => $labels,
				'hierarchical'      => true,
				'public'            => true,
				'show_in_rest'      => true,
				'show_admin_column' => true,
				'rewrite'           => array( 'slug' => 'project-category' ),
			)
		);
	}
}
