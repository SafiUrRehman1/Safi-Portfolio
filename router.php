<?php
/**
 * PHP's built-in dev server has no config file for response headers (unlike
 * .htaccess/nginx.conf on a real web server). Returning false from a router
 * script hands a request to the server's own static-file serving, which
 * rebuilds the response internally and drops any headers set here first —
 * so for the static assets we want cached, this reads and serves the file
 * itself instead, with explicit Cache-Control. Everything else (actual
 * WordPress requests) still falls through to normal handling untouched.
 */
$uri  = parse_url( $_SERVER['REQUEST_URI'], PHP_URL_PATH );
$file = __DIR__ . $uri;

// Vite's build output is content-hashed (the filename itself changes
// whenever the content does), so it's safe to cache for a full year — a
// code change ships under a brand new URL, never a stale cached one.
$is_hashed_asset = 0 === strpos( $uri, '/wp-content/themes/portfolio-theme/dist/assets/' );
$is_static_ext    = (bool) preg_match( '/\.(svg|png|jpe?g|gif|ico|woff2?|ttf|css|js)$/i', $uri );

if ( ( $is_hashed_asset || $is_static_ext ) && is_file( $file ) ) {
	$mime_types = array(
		'js'    => 'application/javascript',
		'css'   => 'text/css',
		'svg'   => 'image/svg+xml',
		'png'   => 'image/png',
		'jpg'   => 'image/jpeg',
		'jpeg'  => 'image/jpeg',
		'gif'   => 'image/gif',
		'ico'   => 'image/x-icon',
		'woff'  => 'font/woff',
		'woff2' => 'font/woff2',
		'ttf'   => 'font/ttf',
	);
	$ext = strtolower( pathinfo( $file, PATHINFO_EXTENSION ) );

	header( 'Content-Type: ' . ( $mime_types[ $ext ] ?? 'application/octet-stream' ) );
	header(
		'Cache-Control: public, max-age=' . ( $is_hashed_asset ? '31536000, immutable' : '604800' )
	);
	readfile( $file );
	return true;
}

return false;
