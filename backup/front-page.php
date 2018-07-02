<?php
/**
 * The front page template file
 *
 * @package Airalab
 * @subpackage Robonomics
 */

get_header(); ?>

 <main role="main">

 
<!--   	<?php if( get_field('info_section_1') || get_field('info_section_2') || get_field('info_section_3') ): ?>

	  	<section class="sec-mid contentBlock-about">
			<div class="secw-base">
	      		<div class="row">
	            	 
	        	 	<div class="col-sm-6 js-paroller" data-paroller-factor="-0.1" data-paroller-type="foreground">
	            		<a class="block-video" href="javascript:;" data-src="#index-video" data-fancybox></a>
	              		

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


	     		<div class="plugin-fancybox__popup" id="index-video">
            		<div class="js-slider anyslide" data-anyslide="controls">
              			<div class="js-slider-pager">
                			<div class="row">
                  				<div class="col-md-4" data-anyslide-slide="0">The economy of robots: what is it</div>
                  				<div class="col-md-4" data-anyslide-slide="1">Why people need robot economics?</div>
                  				<div class="col-md-4" data-anyslide-slide="2">Why does a robot need Blockchain?</div>
                			</div>
              			</div>
              			<div class="js-slider-viewport sec-white">
                			<div class="slide">
                				<div class="embed-video-fluid"><iframe width="560" height="315" src="https://www.youtube.com/embed/IwT30VOD8K8?controls=0&listType=user_uploads&list=Airalab&modestbranding=1&rel=0&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
                			</div>
                			<div class="slide"><img class="img-block" alt="" src="<?php echo get_template_directory_uri(); ?>/assets/i/video-2.jpg" srcset="<?php echo get_template_directory_uri(); ?>/assets/i/video-2@2x.jpg"></div>
                			<div class="slide">
                				<div class="embed-video-fluid"><iframe width="560" height="315" src="https://www.youtube.com/embed/FkR8OJvRpeE?controls=0&listType=user_uploads&list=Airalab&modestbranding=1&rel=0&showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>
                			</div>
              			</div>
              			<div class="js-slider-controls">
              				<a class="prev" href="javascript:;"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42.9 119.6" xml:space="preserve" class="arrow"><path d="M41.5,0.3L0.6,58.4l41.9,60.9"/></svg></a>
              				<a class="next" href="javascript:;"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 42.9 119.6" xml:space="preserve" class="arrow"><path d="M1.4,119.3l40.9-58.1L0.4,0.3"/></svg></a>
              			</div>
              		</div>
              	</div>
          	</div>

	        <div class="snapsvg-wrap-2 snapsvg-wrap plaxify" data-xrange="10" data-yrange="10">
	          <svg class="snapsvg"></svg>
	        </div>

	  	</section>

	 <?php endif; ?> -->



<!-- 	 <section class="sec-dark contentBlock-shemes">
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
 -->

 	<section id="index-terminal" style="display: none">
 		<div class="secw-base" id="index-terminal">
 			<div class="row">

 				<div class="col-md-5 col-null">

 					<progress-bar :val="Number(step)" :max="Number(commands.length)"></progress-bar>

 					<div class="row" id="index-terminal__info">

 						<div class="col-lg-3"><div id="index-terminal__step" v-if="step"><b>{{ step }} шаг</b>из {{ commands.length }}</div></div>

 						<div class="col-lg-9">
 							<h3 v-if="step == 0">Начало работы с сетью робономика</h3>
 							<h3 v-if="step == 1">Обзор существующих рынков в сети</h3>
 							<h3 v-if="step == 2">Обзор возможности рынка исполнить заказ</h3>
 							<h3 v-if="step == 3">Выставление своего заказа на рынок </h3>
 							<h3 v-if="step == 4">Получение заказа</h3>
 							<h3 v-if="step == 5">Поздравляем!</h3>

 							<div class="m-b-base text-hyphened">
 								<div v-if="step == 0">
 									<p>Робономика – это большая децентрализованная сеть контроля и оказания услуг кибер-физическими системами, адаптирующаяся к потребностям человека.</p><p>Для работы с сетью создайте экземпляр объекта сети, набрав в терминале команду:</p>
 								</div>

 								<div v-if="step == 1">
 									<p>В основе Робономики лежит рыночный механизм, а значит в сети существуют рынки. Для работы с сетью посмотрите, какие рынки в сети существуют на данный момент.</p><p>Введите в терминале команду:</p>
 								</div>

 								<div v-if="step == 2">
 									<p>Мы получили рынки. Теперь видим, что в сети Робономика есть три рынка: рынок автономных фабрик, рынок умных городов, рынок беспилотной логистики. Давайте выберем рынок автономных фабрик и посмотрим, есть ли на нем кто-нибудь и что там предлагают.</p><p>Отправим запрос, введя в терминале команду:</p>
 								</div>

 								<div v-if="step == 3">
 									<p>Теперь мы знаем, что на рынке есть автономная фабрика, готовая исполнить заказ по производству персонализированных ваз. Сформулируем предложение, загрузив параметры вазы в ipfs, и выставим его на рынок. Сеть Робономики создаст для нас и умной фабрики контракт обязательства.</p><p>Введите в терминале команду:</p>
 								</div>

 								<div v-if="step == 4">
 									<p>Теперь начнём слушать событие об исполнении обязательства автономной фабрикой. Как только фабрика исполнит своё обязательство, мы получим лог её операций.</p><p>Введите в терминале команду:</p>
 								</div>

 								<div v-if="step == 5">
 									<p>Теперь ваш черед - создавайте новое поколение децентрализованных приложений для Умных городов и Индустрии 4.0 на платформе Робономика.</p><p><a class="btn-primary" href="#" target="_blank" style="display: none">Перейти в SDK</a></p><p><a class="btn-border" href="#" target="_blank">Общаться с разработчиками</a></p>
 								</div>
 							</div>

 							<p v-if="getCmd"><a id="index-terminal__info_cmd" href="#" @click.prevent="setCmd" title="Кликните, чтобы автоматически скопировать команду в терминал">{{ getCmd }}</a></p>
 						</div>

 					</div>
 				
 				</div>


 				<div class="col-md-7 col-null">

 					<div class="terminal__window">
 						<div class="terminal__window_head">Terminal</div>
 						<div class="terminal__window_content">
 							<p>Press enter to submit commands</p><p class="cmd" v-html="entry" v-for="entry in history">{{ entry }}</p>
 							<p class="input"><textarea ref="cmdInput" v-model.trim="cmd" @keyup.enter="process" autofocus></textarea></p>
 						</div>
 					</div>

 					<div class="terminal__window">
 						<div class="terminal__window_head">Result</div>
 						<div class="terminal__window_content" id="index-terminal-result">

 							<div class="index-terminal-result__grid">
 								<img class="active" alt="" src="assets/i/Terminal-Result-1.png" srcset="assets/i/Terminal-Result-1@2x.png">
 								<img v-bind:class="{'active' : (step &gt;= 1)}" alt="" src="assets/i/Terminal-Result-2.png" srcset="assets/i/Terminal-Result-2@2x.png">
 								<img v-bind:class="{'active' : (step &gt;= 2)}" alt="" src="assets/i/Terminal-Result-3.png" srcset="assets/i/Terminal-Result-3@2x.png">
 								<img v-bind:class="{'active' : (step &gt;= 3)}" alt="" src="assets/i/Terminal-Result-4.png" srcset="assets/i/Terminal-Result-4@2x.png">
 								<img v-bind:class="{'active' : (step &gt;= 5)}" alt="" src="assets/i/Terminal-Result-5.png" srcset="assets/i/Terminal-Result-5@2x.png">
 							</div>

 							<div class="index-terminal-result__step" v-bind:class="{'active-step-3' : (step == 3), 'active-step-4' : (step == 4), 'active-step-5' : (step == 5)}">
 								<img id="index-terminal-result__factory" alt="" src="assets/i/factory.svg">
 								<img id="index-terminal-result__ordernew" alt="" src="assets/i/Terminal-newOrder.svg">
 								<div id="index-terminal-result__process"><span class="sprite-basic-hourglass"></span></div>

	 							<div id="index-terminal-result__ok"><span class="sprite-basic-ok"></span></div>
	 							<div id="terminal-way-up"><span></span></div>
	 							<div id="terminal-way-down"></div>
	 							<div id="terminal-cars"></div>
	 							<img id="index-terminal-result__orderdone" alt="" src="assets/i/Terminal-doneOrder.svg">
	 						</div>

	 					</div>
	 				</div>

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



  	<section id="roadmap" class="sec-black">
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
