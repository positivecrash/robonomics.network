<?php
/**
 * The header for our theme
 *
 *
 * @package Airalab
 * @subpackage Robonomics
 */

?>

<div class="msg--fixed msg--fixed-bottom" id="js-cookiePolicy" style="display: none;">
  <div class="secw-base">
    <div class="d-t secw-full">
      <div class="d-t_cell"><?php pll_e('Этот сайт использует cookie'); ?>. <a class="t-color-text-light" href="https://robonomics.network/cookie-policy/"><b><?php pll_e('Узнать больше'); ?></b></a></div>
      <div class="d-t_cell t-right"><a class="btn-blue btn-small btn" href="javascript:;">Ok</a></div>
    </div>
  </div>
</div>


<footer role="contentinfo">

  <?php
    if(pll_current_language('slug') == 'ru'){
      echo do_shortcode( ' [themewidget id="370"] ' );
    }
    elseif(pll_current_language('slug') == 'en'){
      echo do_shortcode( ' [themewidget id="368"] ' );
    }
  ?>


  <section class="sec-black">
    <div class="secw-base">
      <div class="row">
        <div class="col-md-6">
          <section>
              <a class="sec-synopsis" href="<?php echo pll_home_url(); ?>"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 152.9 133.7" xml:space="preserve" class="logo-robonomics-outline">
                <g transform="translate(3037 2448)">
                <circle cx="-2960.3" cy="-2443" r="5"/>
                <circle cx="-3032" cy="-2319.3" r="5"/>
                <circle cx="-2889.1" cy="-2319.3" r="5"/>
                <path d="M-2960.5-2443l-71.5,123.7h142.9L-2960.5-2443z"/>
                <path d="M-2959.8-2359.1l-33.9,17.8h67.8L-2959.8-2359.1z"/>
                <path d="M-2959.8-2400l-33.9,58.7l34-17.8L-2959.8-2400z"/>
                <path d="M-2959.8-2400l0.3,40.7l33.6,18L-2959.8-2400z"/>
                </g>
                </svg>
                
                <div class="sec-synopsis__text">
                  <?php if( get_field('project_title', pll_current_language('slug')) ): ?>
                    <h2><?php the_field('project_title', pll_current_language('slug')); ?></h2>
                  <?php endif; ?>

                  <?php if( get_field('project_subtitle', pll_current_language('slug')) ): ?>
                    <p>{ <?php the_field('project_subtitle', pll_current_language('slug')); ?> }</p>
                  <?php endif; ?>

                </div>
              </a>
          </section>

          <section>

          <h2><?php pll_e('Новости'); ?></h2>
          <a class="twitter-timeline" data-height="400" data-theme="dark" data-link-color="#F5F8FA" allowtransparency="true" data-chrome="nofooter noborders transparent noscrollbar noheader" href="https://twitter.com/AIRA_Robonomics">Tweets by AIRA_Robonomics</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </section>
        </div>

        <div class="col-md-6">
          <section>
            <h2><?php pll_e('Технологии'); ?></h2>
            <div class="sec-techs"><span class="sprite-basic-ethereum"></span><span class="sprite-basic-aira"></span><span class="sprite-basic-ros"></span><span class="sprite-basic-ipfs"></span><span class="sprite-basic-nixos"></span></div>
          </section>

          <section>
            <h2><?php pll_e('Сообщество'); ?></h2>

            <div class="row">
              <div class="col-sm-6">
                <p><a class="link-social" href="https://github.com/airalab" target="_blank"><span class="icon"><i class="sprite-basic-github"></i></span><span>GitHub</span></a></p>

                <?php
                  if ( pll_current_language('slug') == 'en' ){
                    echo '<p><a class="link-social" href="https://blog.aira.life/" target="_blank"><span class="icon"><i class="sprite-basic-medium"></i></span><span>Blog</span></a></p>';
                  }

                  if ( pll_current_language('slug') == 'ru' ){
                    echo '<p><a class="link-social" href="https://blog.aira.life/" target="_blank"><span class="icon"><i class="sprite-basic-medium"></i></span><span>Blog (EN)</span></a></p>';
                    echo '<p><a class="link-social" href="http://ensrationis.com" target="_blank"><span class="icon"><i class="sprite-basic-blog"></i></span><span>Blog (RU)</span></a></p>';
                  }
                ?>

                <p><a class="link-social" href="https://twitter.com/AIRA_Robonomics" target="_blank"><span class="icon"><i class="sprite-basic-twitter"></i></span><span>Twitter</span></a></p>
                <p><a class="link-social" href="https://www.youtube.com/c/Airalab" target="_blank"><span class="icon"><i class="sprite-basic-youtube"></i></span><span>YouTube</span></a></p>
              </div>
              <div class="col-sm-6">
                <?php
                  if ( pll_current_language('slug') == 'en' ){
                    echo '<p><a class="link-social" href="https://aira.life/chat" target="_blank"><span class="icon"><i class="sprite-basic-telegram"></i></span><span>Telegram chat</span></a></p>';
                  }

                  if ( pll_current_language('slug') == 'ru' ){
                    echo '<p><a class="link-social" href="https://aira.life/chat" target="_blank"><span class="icon"><i class="sprite-basic-telegram"></i></span><span>Telegram chat (EN)</span></a></p>';

                    echo '<p><a class="link-social" href="https://aira.life/chatru" target="_blank"><span class="icon"><i class="sprite-basic-telegram"></i></span><span>Telegram chat (RU)</span></a></p>';
                  }
                ?>


                
                <p><a class="link-social" href="https://www.facebook.com/aira.robonomics/" target="_blank"><span class="icon"><i class="sprite-basic-facebook"></i></span><span>Facebook</span></a></p>
                <p><a class="link-social" href="https://bitcointalk.org/index.php?topic=4184662.new#new" target="_blank"><span class="icon"><i class="sprite-basic-forum"></i></span><span>BitcoinTalk</span></a></p>
              </div>
            </div>

            <?php //get_template_part( 'template-parts/page/content', 'acf-socials' ); ?>

          </section>
          <section>
            <h2><?php pll_e('Контакты'); ?></h2>
            <?php while ( have_rows('email', pll_current_language('slug')) ) : the_row(); ?>

              <p><a href="mailto:<?php the_sub_field('email', pll_current_language('slug')); ?>"><?php the_sub_field('email', pll_current_language('slug')); ?></a> – <?php the_sub_field('title', pll_current_language('slug')); ?></p>
            <?php endwhile; ?>

          </section>
        </div>
      </div>
    </div>
  </section>
</footer>


<?php wp_footer(); ?>


<?php
	while ( have_rows('code_in_footer', 'basic') ) : the_row();
	  the_sub_field('code', 'basic');
	endwhile;
?>

</body>
</html>
