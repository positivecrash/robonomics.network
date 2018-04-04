<?php
/**
 * Robonomics Theme specific functions and definitions
 *
 *
 * @package Airalab
 * @subpackage Robonomics
 */

	
	/*
	* Set class for <body>
	*/
	function robonomics_body_classes( $classes ) {
		
		// For outdated page
		// if ( is_page_template('outdated-browser.php') ) {
		if ( $GLOBALS['current_theme_template'] == 'outdated-browser.php' ) {
			$classes[] = 'page-outdated';
		}

		return $classes;
	}
	add_filter( 'body_class', 'robonomics_body_classes' );

	/*
	* Detect Internet Explorer
	*/
	add_filter( 'template_include', 'oldbrowser_callback' );
	function oldbrowser_callback( $original_template ) {
		if( strpos($_SERVER['HTTP_USER_AGENT'],'MSIE')!==false || strpos($_SERVER['HTTP_USER_AGENT'],'rv:11.0')!==false)
			return get_template_directory() . '/outdated-browser.php';
		else
			return $original_template;
	}


	function define_current_theme_file( $template ) {
	    $GLOBALS['current_theme_template'] = basename($template);
	    return $template;
	}
	add_action('template_include', 'define_current_theme_file', 1000);

?>