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





    /*---  Parallax effects ---*/

    function parallax()
        {
            $.plax.disable();

            if ($w.width() > 576){
                $('.js-paroller').paroller();
                $('.plaxify').plaxify();
                $.plax.enable();
            }
        }


    parallax();

    $w.on('resize', function(){
        parallax();
    });

    // $('#header-mid').zlayer([
    //     {
    //         layer:'#logo-robonomics'
    //     },
    //     {
    //         layer:'#logo-ethereum'
    //     }
    // ]);


});