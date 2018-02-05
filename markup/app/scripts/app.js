jQuery(document).ready(function($){
	/*====== BASICS ======*/

	var $w = $(window);
	var $d = $(document);
	var $page = $('body');




	/*====== INDEX BANNER ANIMATED ======*/

	if($('#index-banner').length > 0){

		var $banner = $('#index-banner');
		var cFade = 'fade';                   // Класс для появления анимации
		var cAnimation = 'animate-on';        // Класс для обозначения, что нужна анимация
		var cDone = 'done';                   // Класс, когда fade "отыграл". Анимация некоторых эл-ов продолжается, если есть класс cAnimation
		var cookie_name = 'banner-animate';        // Имя для Cookie, в которую записываем видел ли пользователь полную анимацию
		
		// отменяет анимацию, полностью статичное изображение
		function CancelAnimation(){
			$banner.removeClass(cFade + ' ' + cAnimation);
		}

		// отменяет "появление" при анимации, но оставляет движение
		function StaticAnimation(){
			$banner
				.removeClass(cFade)
				.addClass(cAnimation + ' ' + cDone);
		}

		// если css анимации не поддерживаются
		if (!Modernizr.cssanimations) {
			CancelAnimation();
		}
		else{


			// 0. Проверяем, загрузился ли спрайт баннера, чтобы не показывать кусками
			var $banner_fields = $banner.find('#index-banner-pic .field');

		    $('#bannerCheckImg').on('load', function() {
			   $(this).remove(); // prevent memory leaks
			   $banner_fields.addClass('show');
			});




			//1. Проверяем куки. Если пользователь уже видел полную анимацию, показываем укороченную

			// console.log(cookie_name + ' = ' + Cookies.get(cookie_name)); //check TMP

			if ( Cookies.get(cookie_name) == 1 ){
				// Если уже проигрывалось
				StaticAnimation();
			}
			else{
				// Устанавливаем куки
				// в path записываем путь для главной странице, чтобы только для нее куки записывать
				// Cookies.set(cookie_name, 1, { expires: 7, path: 'index.html' });
				Cookies.set(cookie_name, 1, { expires: 7 });
			}



			// 2. отслеживаем, смотрит ли пользователь на вкладку или можно отключить анимацию
			var blurcount = 0;
			
			$w.on('blur', function(){
				blurcount++;
				
				if (blurcount > 0) //Если вводить url в браузере, то сначала сайт в состоянии blur, поэтому первый раз blur игнорируем
					CancelAnimation();
			});

			$w.on('focus', function(){
				StaticAnimation();
			});



			// 3. если баннер не в зоне видимости, тоже отменяем анимацию
			// Используется плагин jquery.visible.js и уникальное пространство имен для событий

			$w.on('scroll.ibanner resize.ibanner', function(){
				setTimeout(function(){

					if ( !$banner.visible(true) ){
						CancelAnimation();
						$banner.data('isInView', 0);
					}

					// Активируем это только, если до этого баннер попадал вне поле видимости.
			        //Иначе будет активироваться сразу и никогда полноценно анимация не будет проигрываться
					if ( $banner.visible(true) && $banner.data('isInView') == 0 ){
				        StaticAnimation();
				    }
			    }, 250);
			});


		    // 4. если экран ресайзится уже после загрузки страницы, останавливаем плавное появление, чтобы избежать некоторых казусов
			$w.on('resize', function(){
				StaticAnimation();
			});


		}


		

	}




	/*====== TOKENS ======*/
	// if($('#tokens-buy').length > 0){
	// 	var $step1  = $('#tokens-buy_step1');
	// 	var $step2  = $('#tokens-buy_step2');
	// 	var $radio  = $('#tokens-buy_step1 .form-radio');       // wallet choise (step 1)
	// 	var $btn    = $('#tokens-buy_btn');                     // continue button
	// 	var $cancel = $('.tokens-buy_cancel')                   // choose another wallet (from step 2)

	// 	$radio.on('click', function(){

 //            var wallet = $(this).find('input[type="radio"]').attr('id');

 //            if($btn.is(':hidden'))
 //            	$btn
 //            		.fadeIn();
            
 //            $btn.data('wallet', wallet);
	// 	});



	// 	$btn.on('click', function(e){
	// 		e.preventDefault();
 //            e.stopPropagation();

 //            $step1.hide();
 //            $btn.hide();

 //            $step2
 //            	.find('.tokens-buy_wallet[data-wallet='+ $btn.data('wallet') +']')
 //            	.fadeIn();
	// 	});



	// 	$cancel.on('click', function(e){
	// 		e.preventDefault();
 //            e.stopPropagation();

 //            $step2.find('.tokens-buy_wallet').hide();
 //            $step1.fadeIn();
 //            $btn.fadeIn();
 //        });
	// }







	/*====== COPY TEXT ======*/

	function show_msg(o_msg){
		o_msg.fadeIn();

		setTimeout(function(){
	        o_msg.fadeOut();
	    }, 3000);
	}

	if($('a[data-copytext]').length > 0){
		$('a[data-copytext]').on('click', function(e){
			e.preventDefault();
            e.stopPropagation();

            var $this = $(this);
            var copytext_id = $this.data('copytext');

            if ($this.data('copytextmsg'))
            	var copytext_msg = $this.data('copytextmsg');

            var gettext = $('#'+copytext_id).html();

            $('body').append('<div id="msg-copied" class="msg-floating" style="display:none;"></div>');
            var $msg = $('#msg-copied');

            clipboard.copy(gettext).then(
		  		function(){

			  		if(copytext_msg)
			  			$msg.html(copytext_msg + ' copied to clipboard');
			  		else
			  			$msg.html('Copied to clipboard');

			  		show_msg($msg);

 				},
			  	function(err){

			  		$msg.html('Sorry, copy to clipboard is not supported on your device').addClass('err');

			  		show_msg($msg);

			  	}
			);
        });
	}






	/*====== DROPDOWNS ======*/
	if($('.dropdown').length > 0){
       
        $('.dropdown__toggle').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();

            var $ddwrap = $(this).parent('.dropdown');

            $ddwrap.toggleClass('show');


            $d.on('click', function(e){
                if ( ($(e.target).closest($ddwrap.children('.dropdown__content')).length) ) return;
                $ddwrap.removeClass('show');
                e.stopPropagation();
            });

        });

    }






	/*====== Disabled link ======*/
	if ( $('a.btn-disabled').length > 0 ){
		$('a.btn-disabled').on('click', function(e){
			e.preventDefault();
            e.stopPropagation();
		});
	}




	/*===  TABS, Slides ===*/

	$('#index-videos.bxslider').bxSlider({
	  video: true,
	  useCSS: false,
	  pagerCustom: '#index-videos_pager',
	  controls: false,
	  infiniteLoop: false
	});


	$('.js-slider').AnySlide();



	//Page 'How works the global robot economics'

	function imgHeight(object){
		// if (object.length > 0)
		// 	object.height(object.find('img.slide-0').height());

		var h = 0;

		if (object.length > 0){
			object.find('img').each(function(){

				if (h < $(this).outerHeight())
					h = $(this).outerHeight();
			});

			if ( h > 0 )
				object.height(h);
		}
	}

	function tipHeight(object){
		var h = 0;

		if (object.length > 0){
			object.find('.tip-blue-cb').each(function(){
				if ( h < $(this).outerHeight() )
					h = $(this).outerHeight();
			});
		}

		object.height(h);
	}

	function tipHeightCur(object, index){
		var h = 0;

		if (object.length > 0){
			h = object.find('.tip-blue-cb').eq(index).outerHeight();
		}

		setTimeout(function() {
			object.height(h);
     	}, 500);

	}


	var mobileScreen = 500,
		imgContainer = $(this).find('#robonomics-slide'),
		tipContainer = $(this).find('#robonomics-text');


	$('#robonomics').AnySlide({
		singleContainer: true,
		loadFirst: 'img',
		scrollTop: true,
		autoplay: true,
		pause: 6000
	});

	/*===  END TABS ===*/




	/*====== ANIMATIONS ======*/
	function show_animated_jello(object){
		object.addClass('animation-jello');
	}

	function show_animated(object){
		object.addClass('animate-on');
	}




	function visible(object, events, showfunc, once){
		if ( object.visible(false, false, 'vertical') ){
			showfunc();

			if(once){
				$w.off(events, function(){
					console.log('off '+ events);
				});
			}
		}
	}

	function process_visible(object, event, showfunc, once){

		once = once || 'true';
		events = 'scroll.'+event+' resize.'+event;

		visible(object, events, showfunc, once);

		$w.on(events, function(){

			setTimeout(function(){
				visible(object, events, showfunc, once);
			}, 250);

		});
	}




	/*====== INDEX ======*/

	//показываем анимацию, если элемент в зоне видимости
	//Используется плагин jquery.visible.js и уникальное пространство имен для событий
	// if($('#index-cases').length > 0){

	// 	case_1 = $('#index-cases .sprite-polyg-man');
	// 	case_2 = $('#index-cases .sprite-polyg-earth');

	// 	process_visible(case_1, 'case1', function(){ show_animated_jello(case_1) });
	// 	process_visible(case_2, 'case2', function(){ show_animated_jello(case_2) });
		
	// }






	/*====== OTHER ======*/

	//показываем анимацию, если элемент в зоне видимости
	//Используется плагин jquery.visible.js и уникальное пространство имен для событий
	// if($('#footer-subscribe').length > 0){

	// 	var footer_subscribe = $('#footer-subscribe');
	// 	process_visible(footer_subscribe, 'subscribe', function(){ show_animated(footer_subscribe)});
		
	// }


	//SCROLL ANCHOR SMOOTH
	$('.js-scrollSmooth').on('click', function(e){
		e.preventDefault();

		var ScrollBlockId = $(this).attr('href');

		if ( $(ScrollBlockId).length > 0 ){

			var ScrollPosition = $(ScrollBlockId).offset().top;
	    	$('html, body').animate({scrollTop: ScrollPosition }, 750);
	    }
	});



	// //Input count plus minus
	// $('.js-inputCounter').InputCounter({
	// 	onChange: function(){
	// 		console.log($(this).find('input').val());
	// 	}
	// });



	//Release 0.10 Game
	if ( $('#game-action').length > 0 ){

		var $gContainer = $('#game-action');
		var gClass = 'animate';
		var gClassPause = 'animate-paused';

		var interval = setInterval(function() {
			if ( $gContainer.hasClass(gClass) )
				$gContainer.removeClass(gClass).addClass(gClassPause);

			// clearInterval(interval);
		}, 15000);

		var interval2 = setInterval(function() {
			if ( $gContainer.hasClass(gClassPause) )
				$gContainer.addClass(gClass).removeClass(gClassPause);

			// clearInterval(interval2);
		}, 5000);
	}


	// Cases: Industry 4.0
	// function getYoutubeUrl(videoTag, youtubeId)
	// 	{
	// 		YoutubeVideo(videoTag, youtubeId, function(video){
	
	// 		  var webm = video.getSource("video/webm", "medium");
			  
	// 		  var mp4 = video.getSource("video/mp4", "medium");

	// 		  $(videoTag).find('source').attr("src", webm.url);
	// 		});
	// 	}


	// getYoutubeUrl('#video-sFSC-9TZYOY', '1AEmpKReDzE');

	// $('.video-controled').click(function() {
	//     if (this.paused) {
	//         this.play();
	//     } else { 
	//         this.pause();
	//     }
	//     return false;
	// });

	$().prettyEmbed({ useFitVids: true });




	//TMP: terminal for Industry 4.0
	$('#terminal-resize').on('click', function(e){
		e.preventDefault();

		$o = $(this);

		if ( $('#terminal').hasClass('expand') )
		{
			$('#terminal').removeClass('expand');
			$o
				.find('span')
				.removeClass('sprite-basic-compress').addClass('sprite-basic-expand')
				.attr('title', 'Expand terminal');
		}
		else
		{
			$('#terminal').addClass('expand');
			$o
				.find('span')
				.removeClass('sprite-basic-expand')
				.addClass('sprite-basic-compress')
				.attr('title', 'Compress terminal');
		}


	});


});