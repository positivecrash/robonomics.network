<?php
/**
 * Robonomics: Customizer
 *
 * @package Airalab
 * @subpackage Robonomics
 */

define('ACF_EARLY_ACCESS', '5');

/* Set multilingual Options page */
if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
	      'page_title' => 'Basic Info',
	      'menu_title' => 'Basic Info',
	      'post_id'    => 'basic'
    ));

	$languages = array( 'en', 'ru' );

	foreach ( $languages as $lang ) {
	    acf_add_options_page( array(
	      'page_title' => 'Site Options (' . strtoupper( $lang ) . ')',
	      'menu_title' => __('Site Options (' . strtoupper( $lang ) . ')', 'text-domain'),
	      'menu_slug'  => "site-options-${lang}",
	      'post_id'    => $lang
	    ) );
  	}
}


?>