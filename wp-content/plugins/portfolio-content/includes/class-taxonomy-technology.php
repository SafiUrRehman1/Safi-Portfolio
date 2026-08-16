<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Portfolio_Taxonomy_Technology {

	const TAXONOMY = 'technology';

	public static function init() {
		add_action( 'init', array( __CLASS__, 'register' ) );
	}

	public static function register() {
		$labels = array(
			'name'          => __( 'Technologies', 'portfolio-content' ),
			'singular_name' => __( 'Technology', 'portfolio-content' ),
			'search_items'  => __( 'Search Technologies', 'portfolio-content' ),
			'all_items'     => __( 'All Technologies', 'portfolio-content' ),
			'edit_item'     => __( 'Edit Technology', 'portfolio-content' ),
			'update_item'   => __( 'Update Technology', 'portfolio-content' ),
			'add_new_item'  => __( 'Add New Technology', 'portfolio-content' ),
			'new_item_name' => __( 'New Technology Name', 'portfolio-content' ),
			'menu_name'     => __( 'Technologies', 'portfolio-content' ),
		);

		register_taxonomy(
			self::TAXONOMY,
			array( Portfolio_CPT_Project::POST_TYPE ),
			array(
				'labels'            => $labels,
				'hierarchical'      => false,
				'public'            => true,
				'show_in_rest'      => true,
				'show_admin_column' => true,
				'rewrite'           => array( 'slug' => 'technology' ),
			)
		);
	}
}
