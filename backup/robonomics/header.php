<?php
/**
 * The header for our theme
 *
 *
 * @package Airalab
 * @subpackage Robonomics
 */

?>

<!DOCTYPE html>
<html <?php echo 'lang="'.pll_current_language('slug').'"' ?>>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<?php wp_head(); ?>

  <?php
    while ( have_rows('code_in_header', 'basic') ) : the_row();
      the_sub_field('code', 'basic');
    endwhile;
  ?>

	<link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
</head>

<body <?php body_class(); ?>>

  <?php
    echo '<div style="display:none">'.$GLOBALS['current_theme_template'].'</div>';

    if( is_front_page() & ($GLOBALS['current_theme_template']!='outdated-browser.php') ) {
      // echo '<header role="banner">';
      get_template_part( 'template-parts/header/header', 'front' );
      // echo '</header>';
    }
  ?>