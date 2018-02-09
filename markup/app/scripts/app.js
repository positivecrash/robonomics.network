jQuery(document).ready(function($){
	/*====== BASICS ======*/

	var $w = $(window);
	var $d = $(document);
	var $page = $('body');



	/*---  Fix navigation on top ---*/


    function FixNav(){

    	var navPos = 1000;
    	var $nav = $('#header-top');

        if( $w.scrollTop() >= navPos)
            $nav.addClass('fixed', 2000);
        else
            $nav.removeClass('fixed', 2000);
    }

    FixNav();
    $w.bind('scroll', FixNav);

});