/*JavaScript*/

var scroll = new SmoothScroll('a[data-scroll]');



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

    /*---  end of Fix navigation on top ---*/





    /*---  HEADER: open mobile nav ---*/

    $('.hamburger').on('click', function(){
        $this = $(this);
        var $nav = $('.nav-mobilehide');
        var c = 'opened';

        if ( $this.hasClass(c) )
            {
                $this.removeClass(c);
                $nav.removeClass(c);
            }
        else
        {
            $this.addClass(c);
            $nav.addClass(c);
        }
    });

    /*---  end of HEADER: open mobile nav ---*/






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


    if ( $('.plaxify').length > 0 )
        {
            parallax();

            $w.on('resize', function(){
                parallax();
            });
        }

    /*---  end of Parallax effects ---*/



    /*---  Index page  ---*/

    function set_height(source, set, outer){
        
        var counter = 0;

        $(source).each(function(){
            if ( outer ){
                if ( $(this).outerHeight(true) > counter )
                    counter = $(this).outerHeight(true);
            }
            else
            {
                if ( $(this).height() > counter )
                    counter = $(this).height();
            }
        });

        $(set).height(counter);
    }


    if ( $('.roadmap-title').length > 0 )
        {
            set_height('.roadmap-title__in', '.roadmap-title', false);

            $w.on('resize', function(){
                set_height('.roadmap-title__in', '.roadmap-title', false);
            });
        }
    
    /*---  end of Index page  ---*/
    

});