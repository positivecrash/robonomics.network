<?php
/**
 * Robonomics Theme functions and definitions
 *
 *
 * @package Airalab
 * @subpackage Robonomics
 */

function robonomics_setup() {

	show_admin_bar( false );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );

	remove_action('wp_head', 'print_emoji_detection_script', 7);
	remove_action('wp_print_styles', 'print_emoji_styles');

	// add_image_size( 'twentyseventeen-featured-image', 2000, 1200, true );
	// add_image_size( 'twentyseventeen-thumbnail-avatar', 100, 100, true );


	// This theme uses wp_nav_menu() in two locations.
	register_nav_menus( array(
		'top'    => __( 'Top Menu', 'robonomics' )
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 *
	 * See: https://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
		'gallery',
		'audio',
	) );
}
add_action( 'after_setup_theme', 'robonomics_setup' );




function robonomics_scripts() {
	if( !is_admin()){

		wp_enqueue_style("robonomics-style", get_template_directory_uri()."/assets/css/robonomics.min.css", array(), '1.0.3');

		wp_deregister_script('jquery');
		wp_register_script( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js', array(), '1', true);
		wp_enqueue_script('jquery');

		wp_register_script( 'robonomics-js', get_template_directory_uri() . '/assets/js/main.min.js', array('jquery'), '1', true);
		wp_enqueue_script('robonomics-js');

	}
}
add_action( 'wp_enqueue_scripts', 'robonomics_scripts' );




//Some styles we can add in footer
function footer_styles(){
	wp_enqueue_style( 'robonomics-fonts', 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,&amp;amp;subset=cyrillic,cyrillic-ext', array(), '1' );
}
add_action( 'get_footer', 'footer_styles' );




//Отключаем всякое
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
function hide_wp_vers() {
	return '';
}
add_filter('the_generator','hide_wp_vers');

// Отключаем сам REST API
add_filter('rest_enabled', '__return_false');

// Отключаем фильтры REST API
remove_action( 'xmlrpc_rsd_apis',            'rest_output_rsd' );
remove_action( 'wp_head',                    'rest_output_link_wp_head', 10, 0 );
remove_action( 'template_redirect',          'rest_output_link_header', 11, 0 );
remove_action( 'auth_cookie_malformed',      'rest_cookie_collect_status' );
remove_action( 'auth_cookie_expired',        'rest_cookie_collect_status' );
remove_action( 'auth_cookie_bad_username',   'rest_cookie_collect_status' );
remove_action( 'auth_cookie_bad_hash',       'rest_cookie_collect_status' );
remove_action( 'auth_cookie_valid',          'rest_cookie_collect_status' );
remove_filter( 'rest_authentication_errors', 'rest_cookie_check_errors', 100 );

// Отключаем события REST API
remove_action( 'init', 'rest_api_init' );
remove_action( 'rest_api_init', 'rest_api_default_filters', 10, 1 );
remove_action( 'parse_request', 'rest_api_loaded' );

// Отключаем Embeds связанные с REST API
remove_action( 'rest_api_init', 'wp_oembed_register_route' );
remove_filter( 'rest_pre_serve_request', '_oembed_rest_pre_serve_request', 10, 4 );

remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );
// если собираетесь выводить вставки из других сайтов на своем, то закомментируйте след. строку.
remove_action( 'wp_head', 'wp_oembed_add_host_js' );




require get_template_directory() . '/inc/simple-menu-walker.php';
require get_template_directory() . '/inc/plugin-polylang.php';
require get_template_directory() . '/inc/plugin-acf.php';
require get_template_directory() . '/inc/template-functions.php';

?>