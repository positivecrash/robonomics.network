<?php
/**
 * The front page template file
 *
 * @package Airalab
 * @subpackage Robonomics
 */

get_header(); ?>

 <main role="main">

 
  	<?php if( get_field('info_section_1') || get_field('info_section_2') || get_field('info_section_3') ): ?>

	  	<section class="sec-mid contentBlock-about">
			<div class="secw-base">
	      		<div class="row">
	            	 
	            	 

	        	 	<div class="col-sm-6 js-paroller" data-paroller-factor="-0.1" data-paroller-type="foreground">
	            		<a class="block-video" href="#"></a>
	              		

	              		<?php if( get_field('info_section_1')): ?>
	              			<div class="block-white text-hyphened">
		              			<img class="img-block" alt="" src="<?php echo get_template_directory_uri(); ?>/assets/i/about-1.png" srcset="<?php echo get_template_directory_uri(); ?>/assets/i/about-1@2x.png">
		              			<?php the_field('info_section_1'); ?>
		              		</div>
		              	<?php endif; ?>

	            	</div>
		            

		            <div class="col-sm-6 js-paroller" data-paroller-factor="0.1" data-paroller-type="foreground">
		          		<?php if( get_field('info_section_2')): ?>
		          			<div class="block-white text-hyphened">
			          			<img class="img-block" alt="" src="<?php echo get_template_directory_uri(); ?>/assets/i/about-2.png" srcset="<?php echo get_template_directory_uri(); ?>/assets/i/about-2@2x.png">
			          			<?php the_field('info_section_2'); ?>
			          		</div>
			          	<?php endif; ?>

		              	<?php if( get_field('info_section_3')): ?>
		              		<div class="block-white text-hyphened">
			              		<img class="img-block" alt="" src="<?php echo get_template_directory_uri(); ?>/assets/i/about-3.png" srcset="<?php echo get_template_directory_uri(); ?>/assets/i/about-3@2x.png">
			              		<?php the_field('info_section_3'); ?>
			              	</div>
			             <?php endif; ?>
		            </div>

	     		</div>
	        </div>

	        <svg class="snapsvg-darkDots plaxify" data-xrange="10" data-yrange="10"></svg>

	  	</section>

	 <?php endif; ?>



	 <section class="sec-dark contentBlock-shemes">
    	<div class="secw-base">
      		<?php if( get_field('for_developers_title')): ?>
      			<h2><?php the_field('for_developers_title'); ?></h2>
      		<?php endif; ?>

      		
  			<div class="js-slider anyslide" data-anyslide="controls">
            	<div class="js-slider-pager">
              		<div class="row">
                		<?php
                			$count = 0;
                			while ( have_rows('for_developers_slider') ) : the_row();
                		?>
                			<div class="col-md-4">
	                  			<div data-anyslide-slide="<?php echo $count; ?>"><?php the_sub_field('tab'); ?></div>
	                  			<a href="<?php the_sub_field('sheme_image_x2'); ?>" target="_blank">Смотреть схему 1 &rarr;</a>
	                		</div>
	                	<?php
	                		$count++;
	                		endwhile;
	                	?>
              		</div>	
            	</div>


            	<div class="js-slider-viewport sec-white">
              		<?php 
              			$count = 0;
              			while ( have_rows('for_developers_slider') ) : the_row();
              			$count++;
      				?>
              			<div class="slide">
	              			<img class="img-block" alt="" src="<?php the_sub_field('sheme_image'); ?>" srcset="<?php the_sub_field('sheme_image_x2'); ?>" />
	                		<p><a href="<?php the_sub_field('sheme_image_x2'); ?>" target="_blank">
	                			<?php 
	                				pll_e('Схема');
	                				echo' '.$count.'.';
	                				pll_e('Открыть в новой вкладке');
	                				echo ' &rarr;';
	                			?>
	            			</a></p>

	            			<?php if( get_sub_field('description')): ?>
	            				<p class="t-big"><?php the_sub_field('description'); ?></p>
	            			<?php endif; ?>
	              		</div>
	              	<?php endwhile; ?>
            	</div>

           		<div class="js-slider-controls">
           			<a class="prev" href="javascript:;"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42.9 119.6" xml:space="preserve" class="arrow"><path d="M41.5,0.3L0.6,58.4l41.9,60.9"/></svg></a>
           			<a class="next" href="javascript:;"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42.9 119.6" xml:space="preserve" class="arrow"><path d="M1.4,119.3l40.9-58.1L0.4,0.3"/></svg></a>
           		</div>
      		</div>
	      	
    	</div>
  	</section>



  	<section class="contentBlock-token">
        <div class="secw-base">
    		<?php if( get_field('token_title')): ?>
          		<h2><?php the_field('token_title'); ?></h2>
          	<?php endif; ?>
        </div>

        <div class="sec-dots__gray">
      		<div class="secw-base">
            	<div class="sec-pad">
              		<div class="contentBlock-token__info">
              			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 152.9 133.7" xml:space="preserve" class="logo-robonomics-outline">
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

		                <?php if( get_field('token_description')): ?>
		                	<div class="t-big">
			                  <?php the_field('token_description'); ?>
			                </div>
			            <?php endif; ?>

		          	</div>

              		<?php if( get_field('tge_title')): ?>
              			<h3><?php the_field('tge_title'); ?></h3>
              		<?php endif; ?>

              		<?php if( get_field('tge_steps')): ?>
              			<div class="block-gList row">
	              			<?php 
		              			$count = 0;
		              			while ( have_rows('tge_steps') ) : the_row();
		              			$count++;
		      				?>

		                		<div class="col-sm-4">
		                  			<div class="block-gList__bul">
		                  				<span <?php if( get_sub_field('tge_step_status') == 'done'){ echo 'class="t-blue"'; } ?>>
		                  					<?php echo $count ?>
		                  				</span>
		                  			</div>

		                  			<?php if( get_sub_field('tge_step_description')): ?>
		                  				<div class="block-gList__text"><?php the_sub_field('tge_step_description'); ?></div>
		                  			<?php endif; ?>
		                		</div>

			                <?php endwhile; ?>
		                </div>
		            <?php endif; ?>
              </div>
            </div>
          </div>
        </div>
  	</section>



  	<section class="sec-black">
    	<div class="secw-base">
    		<?php if( get_field('roadmap_title')): ?>
          		<h2><?php the_field('roadmap_title'); ?></h2>
          	<?php endif; ?>
      		
      		<div class="sec-pad contentBlock-roadmap">
            	<div class="row">
              		<?php while ( have_rows('roadmap_steps') ) : the_row(); ?>

              			<?php
              				$class = '';

              				if( get_sub_field('layout') == 'row'){
              					$class = 'col-md-3';
              				}
              				else{
              					$class = 'col-md-12';
              				}

              				if( get_sub_field('status') == 'done'){
              					$class = $class.' roadmap-gray';
              				}
              			?>

              			<div class="<?php echo $class; ?>">
	                		<div class="roadmap-title">
	                  			<div class="roadmap-title__in">
	                  				<?php if( get_sub_field('date')): ?>
	                  					<div><?php the_sub_field('date'); ?></div>
	                  				<?php endif; ?>

	                  				<?php if( get_sub_field('name')): ?>
	                  					<div><?php the_sub_field('name'); ?></div>
	                  				<?php endif; ?>
	                  			</div>
	                		</div>
	                		<?php if( get_sub_field('description')): ?>
	                			<div class="roadmap-desc"><?php the_sub_field('description'); ?></div>
	                		<?php endif; ?>
	              		</div>
              		<?php endwhile; ?>
          		</div>
        	</div>
        </div>
  	</section>


</main>

<?php get_footer();
