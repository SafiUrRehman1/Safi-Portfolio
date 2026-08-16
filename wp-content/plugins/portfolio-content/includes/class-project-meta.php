<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Portfolio_Project_Meta {

	const NONCE_ACTION = 'portfolio_project_meta_save';
	const NONCE_NAME   = 'portfolio_project_meta_nonce';

	public static function init() {
		add_action( 'init', array( __CLASS__, 'register_meta' ) );
		add_action( 'add_meta_boxes', array( __CLASS__, 'add_meta_boxes' ) );
		add_action( 'save_post_' . Portfolio_CPT_Project::POST_TYPE, array( __CLASS__, 'save' ) );
		add_action( 'admin_enqueue_scripts', array( __CLASS__, 'enqueue_admin_assets' ) );
	}

	public static function auth_callback() {
		return current_user_can( 'edit_posts' );
	}

	public static function register_meta() {
		$post_type = Portfolio_CPT_Project::POST_TYPE;

		register_post_meta(
			$post_type,
			'github_url',
			array(
				'type'              => 'string',
				'single'            => true,
				'show_in_rest'      => true,
				'sanitize_callback' => 'esc_url_raw',
				'auth_callback'     => array( __CLASS__, 'auth_callback' ),
			)
		);

		register_post_meta(
			$post_type,
			'live_demo_url',
			array(
				'type'              => 'string',
				'single'            => true,
				'show_in_rest'      => true,
				'sanitize_callback' => 'esc_url_raw',
				'auth_callback'     => array( __CLASS__, 'auth_callback' ),
			)
		);

		register_post_meta(
			$post_type,
			'featured',
			array(
				'type'          => 'boolean',
				'single'        => true,
				'show_in_rest'  => true,
				'default'       => false,
				'auth_callback' => array( __CLASS__, 'auth_callback' ),
			)
		);

		register_post_meta(
			$post_type,
			'screenshots',
			array(
				'type'          => 'array',
				'single'        => true,
				'show_in_rest'  => array(
					'schema' => array(
						'type'  => 'array',
						'items' => array( 'type' => 'integer' ),
					),
				),
				'auth_callback' => array( __CLASS__, 'auth_callback' ),
			)
		);

		register_post_meta(
			$post_type,
			'project_meta',
			array(
				'type'          => 'array',
				'single'        => true,
				'show_in_rest'  => array(
					'schema' => array(
						'type'  => 'array',
						'items' => array(
							'type'       => 'object',
							'properties' => array(
								'label' => array( 'type' => 'string' ),
								'value' => array( 'type' => 'string' ),
							),
						),
					),
				),
				'auth_callback' => array( __CLASS__, 'auth_callback' ),
			)
		);
	}

	public static function add_meta_boxes() {
		add_meta_box(
			'portfolio_project_links',
			__( 'Project Links', 'portfolio-content' ),
			array( __CLASS__, 'render_links_box' ),
			Portfolio_CPT_Project::POST_TYPE,
			'side',
			'default'
		);

		add_meta_box(
			'portfolio_project_screenshots',
			__( 'Screenshots', 'portfolio-content' ),
			array( __CLASS__, 'render_screenshots_box' ),
			Portfolio_CPT_Project::POST_TYPE,
			'normal',
			'default'
		);

		add_meta_box(
			'portfolio_project_extra_meta',
			__( 'Additional Project Metadata (optional)', 'portfolio-content' ),
			array( __CLASS__, 'render_extra_meta_box' ),
			Portfolio_CPT_Project::POST_TYPE,
			'normal',
			'default'
		);
	}

	public static function enqueue_admin_assets( $hook ) {
		if ( ! in_array( $hook, array( 'post.php', 'post-new.php' ), true ) ) {
			return;
		}
		if ( get_post_type() !== Portfolio_CPT_Project::POST_TYPE ) {
			return;
		}

		wp_enqueue_media();
		wp_enqueue_script(
			'portfolio-project-admin',
			PORTFOLIO_CONTENT_URL . 'assets/admin.js',
			array( 'jquery' ),
			'0.1.0',
			true
		);
	}

	public static function render_links_box( $post ) {
		wp_nonce_field( self::NONCE_ACTION, self::NONCE_NAME );

		$github_url = get_post_meta( $post->ID, 'github_url', true );
		$demo_url   = get_post_meta( $post->ID, 'live_demo_url', true );
		$featured   = (bool) get_post_meta( $post->ID, 'featured', true );
		?>
		<p>
			<label for="portfolio_github_url"><strong><?php esc_html_e( 'GitHub URL', 'portfolio-content' ); ?></strong></label><br />
			<input type="url" id="portfolio_github_url" name="portfolio_github_url" class="widefat" value="<?php echo esc_attr( $github_url ); ?>" placeholder="https://github.com/..." />
		</p>
		<p>
			<label for="portfolio_live_demo_url"><strong><?php esc_html_e( 'Live Demo URL', 'portfolio-content' ); ?></strong></label><br />
			<input type="url" id="portfolio_live_demo_url" name="portfolio_live_demo_url" class="widefat" value="<?php echo esc_attr( $demo_url ); ?>" placeholder="https://..." />
		</p>
		<p>
			<label>
				<input type="checkbox" name="portfolio_featured" value="1" <?php checked( $featured ); ?> />
				<?php esc_html_e( 'Feature this project on the homepage', 'portfolio-content' ); ?>
			</label>
		</p>
		<?php
	}

	public static function render_screenshots_box( $post ) {
		$ids = get_post_meta( $post->ID, 'screenshots', true );
		$ids = is_array( $ids ) ? $ids : array();
		?>
		<div id="portfolio-screenshots-field">
			<input type="hidden" name="portfolio_screenshots" id="portfolio_screenshots_input" value="<?php echo esc_attr( implode( ',', $ids ) ); ?>" />
			<div id="portfolio-screenshots-preview" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
				<?php foreach ( $ids as $id ) : ?>
					<?php $thumb = wp_get_attachment_image_src( $id, 'thumbnail' ); ?>
					<?php if ( $thumb ) : ?>
						<div class="portfolio-screenshot-item" data-id="<?php echo esc_attr( $id ); ?>" style="position:relative;">
							<img src="<?php echo esc_url( $thumb[0] ); ?>" style="width:100px;height:100px;object-fit:cover;display:block;" />
							<button type="button" class="button portfolio-remove-screenshot" style="position:absolute;top:0;right:0;line-height:1;">&times;</button>
						</div>
					<?php endif; ?>
				<?php endforeach; ?>
			</div>
			<button type="button" class="button button-secondary" id="portfolio-add-screenshots">
				<?php esc_html_e( 'Add Screenshots', 'portfolio-content' ); ?>
			</button>
		</div>
		<?php
	}

	public static function render_extra_meta_box( $post ) {
		$rows = get_post_meta( $post->ID, 'project_meta', true );
		$rows = is_array( $rows ) ? $rows : array();
		?>
		<div id="portfolio-extra-meta-field">
			<p class="description"><?php esc_html_e( 'Optional label/value pairs for anything not covered above (e.g. Role, Year, Client).', 'portfolio-content' ); ?></p>
			<div id="portfolio-extra-meta-rows">
				<?php foreach ( $rows as $row ) : ?>
					<div class="portfolio-extra-meta-row" style="display:flex;gap:8px;margin-bottom:6px;">
						<input type="text" name="portfolio_meta_label[]" placeholder="<?php esc_attr_e( 'Label', 'portfolio-content' ); ?>" value="<?php echo esc_attr( $row['label'] ?? '' ); ?>" />
						<input type="text" name="portfolio_meta_value[]" placeholder="<?php esc_attr_e( 'Value', 'portfolio-content' ); ?>" value="<?php echo esc_attr( $row['value'] ?? '' ); ?>" style="flex:1;" />
						<button type="button" class="button portfolio-remove-meta-row">&times;</button>
					</div>
				<?php endforeach; ?>
			</div>
			<button type="button" class="button button-secondary" id="portfolio-add-meta-row">
				<?php esc_html_e( 'Add Row', 'portfolio-content' ); ?>
			</button>
		</div>
		<?php
	}

	public static function save( $post_id ) {
		if ( ! isset( $_POST[ self::NONCE_NAME ] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST[ self::NONCE_NAME ] ) ), self::NONCE_ACTION ) ) {
			return;
		}
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		$github_url = isset( $_POST['portfolio_github_url'] ) ? esc_url_raw( wp_unslash( $_POST['portfolio_github_url'] ) ) : '';
		update_post_meta( $post_id, 'github_url', $github_url );

		$demo_url = isset( $_POST['portfolio_live_demo_url'] ) ? esc_url_raw( wp_unslash( $_POST['portfolio_live_demo_url'] ) ) : '';
		update_post_meta( $post_id, 'live_demo_url', $demo_url );

		$featured = ! empty( $_POST['portfolio_featured'] );
		update_post_meta( $post_id, 'featured', $featured );

		$screenshot_ids = array();
		if ( ! empty( $_POST['portfolio_screenshots'] ) ) {
			$raw            = sanitize_text_field( wp_unslash( $_POST['portfolio_screenshots'] ) );
			$screenshot_ids = array_filter( array_map( 'absint', explode( ',', $raw ) ) );
		}
		update_post_meta( $post_id, 'screenshots', array_values( $screenshot_ids ) );

		$labels = isset( $_POST['portfolio_meta_label'] ) ? (array) wp_unslash( $_POST['portfolio_meta_label'] ) : array();
		$values = isset( $_POST['portfolio_meta_value'] ) ? (array) wp_unslash( $_POST['portfolio_meta_value'] ) : array();
		$rows   = array();
		foreach ( $labels as $index => $label ) {
			$label = sanitize_text_field( $label );
			$value = isset( $values[ $index ] ) ? sanitize_text_field( $values[ $index ] ) : '';
			if ( '' === $label && '' === $value ) {
				continue;
			}
			$rows[] = array(
				'label' => $label,
				'value' => $value,
			);
		}
		update_post_meta( $post_id, 'project_meta', $rows );
	}
}
