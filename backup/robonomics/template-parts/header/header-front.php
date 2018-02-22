<?php
/**
 * The header for front page
 *
 *
 * @package Airalab
 * @subpackage Robonomics
 */

?>


<header role="banner">
	<div id="header-top">
		<div class="secw-base">
      			<div class="header-top__sec">
      				<a href="<?php echo pll_home_url(); ?>" id="header-top__logo"> <img alt="" src="<?php echo get_template_directory_uri(); ?>/assets/i/logo-robonomics-2.svg"></a>
      			</div>

      			<div class="header-top__sec t-right">
            		<div class="hamburger">
		              <div class="line"></div>
		              <div class="line"></div>
		              <div class="line"></div>
		            </div>
          		</div>
          
          		<div class="header-top__sec t-right nav-mobilehide">
            		<nav class="header-top__nav">

            			<?php
            				wp_nav_menu(array(
      								'container'       => '',
      								'menu_class'      => '',
      								'items_wrap'      => '%3$s',
      								'theme_location'  => 'top',
      								'depth'           => 1,
      								'walker'          => new Simple_Navigation_Walker
      							));
						      ?>


						<?php
              $pageID = 'basic';
              if( have_rows('social', $pageID) ):
            ?>

							<div class="dropdown">
          				<a href="javascript:;">Join us</a>
	            				
                  <div class="dropdown-content">

          							<?php while ( have_rows('social', $pageID) ) : the_row(); ?>

          	    						<a class="lk-headerSocial" href="<?php the_sub_field('url', $pageID); ?>" target="_blank">
          	    							<span>
          	    								<?php the_sub_field('svg', $pageID); ?>
          									</span>
          								</a>
          							<?php endwhile; ?>

                        <?php while ( have_rows('social', pll_current_language('slug')) ) : the_row(); ?>
                          <a class="lk-headerSocial" href="<?php the_sub_field('url', pll_current_language('slug')); ?>" target="_blank">
                              <span>
                                <?php the_sub_field('svg', pll_current_language('slug')); ?>
                            </span>
                          </a>
                        <?php endwhile; ?>

						      </div>
      				</div>

					   <?php endif; ?>

              			

              			<div class="dropdown">
              				<a href="javascript:;"><?php echo pll_current_language('name'); ?></a>
                			<div class="dropdown-content">
                				<?php
                					$langs = pll_the_languages(array('raw'=>1, 'hide_current'=>1));

                					foreach ($langs as $lng) {
										        echo '<a href="'. $lng['url'] .'"'. (($lng['current_lang']==1) ? ' class="active"' : '') .'>'. $lng['name'] .'</a>';
									         }
            					   ?>
                			</div>
              			</div>
            		</nav>
          		</div>
    		</div>
      </div>

    <div id="header-mid">
		<div id="header-mid__content">
      		<div class="plaxify" id="header-logo-robonomics" data-xrange="20" data-yrange="20">
      			<svg class="logo-robonomics" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="196.9px" height="170.3px" viewBox="0 0 196.9 170.3" style="enable-background:new 0 0 196.9 170.3;" xml:space="preserve">
				<g transform="translate(2530 155)">
				<circle class="dot" cx="-2339.7" cy="8.7" r="6.6"/>
				<circle class="dot" cx="-2523.4" cy="8.2" r="6.6"/>
				<circle class="dot" cx="-2430.8" cy="-148.4" r="6.6"/>
				<path class="line" d="M-2523.4,7.9l184.2,0.5l-91.7-158.1L-2523.4,7.9z"/>
				<path class="triangle-1" d="M-2477.3-18.3l92.1,0.3l-45.8-79L-2477.3-18.3z"/>
				<path class="triangle-2" d="M-2431.2-18.1l46,0.1l-45.8-79L-2431.2-18.1z"/>
				<path class="triangle-3" d="M-2477.3-18.3l92.1,0.3l-46-20.3L-2477.3-18.3z"/>
				</g>
				</svg>
          	</div>

          	<img class="plaxify" id="logo-ethereum" alt="" src="<?php echo get_template_directory_uri(); ?>/assets/i/logo-ethereum.svg" data-xrange="50" data-yrange="50">
          	
          	<div class="secw-base">

            	<?php if( get_field('project_title', pll_current_language('slug')) ): ?>
              		<div id="header-title"><span><?php the_field('project_title', pll_current_language('slug')); ?></span></div>
        		<?php endif; ?>

        		<?php if( get_field('project_subtitle', pll_current_language('slug')) ): ?>
              		<div id="header-subtitle">{ <?php the_field('project_subtitle', pll_current_language('slug')); ?> }</div>
        		<?php endif; ?>
            
            	
          	</div>
        </div>

	    <div class="plaxify" id="snapsvg-header-wrap" data-xrange="10" data-yrange="10">
	      <svg id="snapsvg-header"></svg>
	    </div>
	</div>
</header>