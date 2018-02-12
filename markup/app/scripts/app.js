jQuery(document).ready(function($){
	/*====== BASICS ======*/

	var $w = $(window);
	var $d = $(document);
	var $page = $('body');



	/*---  Fix navigation on top ---*/


    function FixNav(){

    	var navPos = 1300;
    	var $nav = $('#header-top');

        if( $w.scrollTop() >= navPos)
            $nav.addClass('fixed', 2000);
        else
            $nav.removeClass('fixed', 2000);
    }

    FixNav();
    $w.bind('scroll', FixNav);



    var $about = $('.contentBlock-about');
    if ( $about.length > 0 ){

        $about.find('.col-sm-6:nth-child(1)').paroller({ factor: '-0.1', type: 'foreground' });
        $about.find('.col-sm-6:nth-child(2)').paroller({ factor: '0.1', type: 'foreground' });
        
    }
        




});