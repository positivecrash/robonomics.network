<?php
/**
 * The outdated browser template file
 *
 * @package Airalab
 * @subpackage Robonomics
 */

get_header(); ?>

    <div id="page-outdated__content"><img class="img-block" alt="" src="<?php echo get_template_directory_uri(); ?>/assets/i/outdated@2x.png">
      <h2><?php pll_e('ОЙ-ОЙ! КАЖЕТСЯ, ВАШ БРАУЗЕР НЕ МОЖЕТ ОТКРЫТЬ ROBONOMICS.NETWORK'); ?></h2>
      <p class="t-center t-mid"><?php pll_e('Чтобы посмотреть полную версию сайта, обновите, пожалуйста, свой браузер или скачайте другой:'); ?></p>
      
      <div class="d-t">
        <a class="d-t_cell" target="_blank" href="https://www.google.com/chrome/browser/desktop/"><span class="sprite sprite-browsers-chrome"></span></a>
        <a class="d-t_cell" target="_blank" href="https://www.mozilla.org/ru/firefox/new/"><span class="sprite sprite-browsers-firefox"></span></a>
        <a class="d-t_cell" target="_blank" href="http://www.opera.com/ru?utm_medium=roc&amp;utm_source=burocratik&amp;utm_campaign=outdatedbrowser"><span class="sprite sprite-browsers-opera"></span></a>
      </div>
    </div>
  </body>
</html>