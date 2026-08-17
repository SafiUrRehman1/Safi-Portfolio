<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Portfolio_REST_Graph {

	const NAMESPACE_NAME = 'portfolio/v1';
	const ROUTE          = '/graph';
	const CACHE_KEY       = 'portfolio_graph_data';

	public static function init() {
		add_action( 'rest_api_init', array( __CLASS__, 'register_route' ) );

		add_action( 'save_post_' . Portfolio_CPT_Project::POST_TYPE, array( __CLASS__, 'invalidate_cache' ) );
		add_action( 'delete_post', array( __CLASS__, 'invalidate_cache' ) );
		add_action( 'set_object_terms', array( __CLASS__, 'invalidate_cache' ) );
		add_action( 'edited_term', array( __CLASS__, 'invalidate_cache' ) );
		add_action( 'delete_term', array( __CLASS__, 'invalidate_cache' ) );
	}

	public static function register_route() {
		register_rest_route(
			self::NAMESPACE_NAME,
			self::ROUTE,
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( __CLASS__, 'get_graph' ),
				'permission_callback' => '__return_true',
			)
		);
	}

	public static function invalidate_cache() {
		delete_transient( self::CACHE_KEY );
	}

	public static function get_graph() {
		$cached = get_transient( self::CACHE_KEY );
		if ( false !== $cached ) {
			return rest_ensure_response( $cached );
		}

		$data = self::build_graph();
		set_transient( self::CACHE_KEY, $data, 0 );

		return rest_ensure_response( $data );
	}

	protected static function build_graph() {
		$nodes = array();
		$edges = array();

		$projects = get_posts(
			array(
				'post_type'      => Portfolio_CPT_Project::POST_TYPE,
				'post_status'    => 'publish',
				'posts_per_page' => -1,
				'orderby'        => 'menu_order',
				'order'          => 'ASC',
			)
		);

		foreach ( $projects as $project ) {
			$project_node_id = 'project-' . $project->ID;

			$category_terms = wp_get_post_terms( $project->ID, Portfolio_Taxonomy_Project_Category::TAXONOMY );
			$categories     = array();
			if ( ! is_wp_error( $category_terms ) ) {
				$categories = wp_list_pluck( $category_terms, 'slug' );
			}

			$thumbnail = get_the_post_thumbnail_url( $project->ID, 'medium' );

			$nodes[ $project_node_id ] = array(
				'id'         => $project_node_id,
				'type'       => 'project',
				'title'      => get_the_title( $project ),
				'slug'       => $project->post_name,
				'featured'   => (bool) get_post_meta( $project->ID, 'featured', true ),
				'thumbnail'  => $thumbnail ? $thumbnail : null,
				'categories' => $categories,
			);

			$tech_terms = wp_get_post_terms( $project->ID, Portfolio_Taxonomy_Technology::TAXONOMY );
			if ( is_wp_error( $tech_terms ) ) {
				continue;
			}

			foreach ( $tech_terms as $term ) {
				$tech_node_id = 'tech-' . $term->term_id;

				if ( ! isset( $nodes[ $tech_node_id ] ) ) {
					$nodes[ $tech_node_id ] = array(
						'id'    => $tech_node_id,
						'type'  => 'technology',
						'title' => $term->name,
						'slug'  => $term->slug,
					);
				}

				$edges[] = array(
					'source' => $project_node_id,
					'target' => $tech_node_id,
				);
			}
		}

		return array(
			'nodes' => array_values( $nodes ),
			'edges' => $edges,
		);
	}
}
