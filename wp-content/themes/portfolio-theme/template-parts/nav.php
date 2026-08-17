<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<header class="site-header">
	<div class="container site-header__inner">
		<a class="site-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
			<?php bloginfo( 'name' ); ?>
		</a>

		<input type="checkbox" id="nav-toggle" class="nav-toggle-checkbox" />
		<label for="nav-toggle" class="nav-toggle-label" aria-label="<?php esc_attr_e( 'Toggle navigation', 'portfolio-theme' ); ?>">
			<span></span>
		</label>

		<nav class="site-nav" aria-label="<?php esc_attr_e( 'Primary', 'portfolio-theme' ); ?>">
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'primary',
					'container'      => false,
					'menu_class'     => 'site-nav__list',
					'fallback_cb'    => 'portfolio_theme_menu_fallback',
					'depth'          => 1,
				)
			);
			?>
		</nav>
	</div>
</header>
