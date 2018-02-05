/**
 * AnySlide v 2.0
 * Copyright 2017 Anastasiia Bakai (positivecrash)
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */


(function($) {

  var defaults = {

      // GENERAL
      content: '.js-slider-viewport',
      contentEl: 'div',
      classActive: 'active',  // this class for both – tabs and content
      loadFirst: false,   // should we check if all element in content of slider is loaded. There should be a selector in parametr
      anchorSupport: false,  //it is only for NOT single content so far
      loop: false, // If true, clicking "Next" while on the last slide will transition to the first slide and vice-versa
      autoplay: false, // Autoplay, Slides will automatically transition
      pause: 4000, //Autoplay pause, The amount of time (in ms) between each auto transition
      autoHover: true, //Auto show will pause when mouse hovers over slider

      // PAGER
      tab: '.js-slider-pager',
      tabEl: 'a',

      // CONTROLS
      controls: '.js-slider-controls',
      controlsPrev: '.prev',
      controlsNext: '.next',
      controlDisabled: 'disabled', //Class for non-active control (when no content to show further)


      //FOR SLIDER WITH ONE BLOCK FOR CONTENT
      singleContainer: false,  // if true – all content in one selector (e.g. for parallax effects)
      classSlide: 'slide_',
      classPrevSlide: 'prevslide_',

      //FOR SLIDER THAT SETUP TO SCROLL TOP WHILE CHANGING TAB
      scrollTop: false,
      scrollTopDelay: 1000,  //how long to wait till scroll tab to top
      scrollTopSpeed: 400,   // scroll top speed
      mobileViewPort: 500,  // max width for mobile screens
      desktopOffset: 50,    // how much height from top while scrolling tab for desktop
      mobileOffset: 100,    // how much height from top while scrolling tab for mobiles

      
      // CALLBACKS
      onSliderLoad: function(index) { return true; },
      afterContentShow: function(index) { return true; },
      onSlideChange: function(index) { return true; }
  };



  $.fn.AnySlide = function (options) {

  
    if (this.length < 1)
            return;

    // support multiple elements
    if (this.length > 1) {
      this.each(function() {
        $(this).AnySlide(options);
      });
      return this;
    }



    // create a namespace to be used throughout the plugin
    var slider = {},

    // set a reference to slider element
    el = this,

    $w = $(window);




    var init = function() {

      // Return if slider is already initialized
      if ($(el).data('AnySlide')) { return; }


      // merge user-supplied options with the defaults
      slider.config = $.extend({}, defaults, options);

      // store tabs
      slider.tab = el.children(slider.config.tab).children(slider.config.tabEl);

      // store containers for content
      slider.content = el.children(slider.config.content).children(slider.config.contentEl);

      // store container for controls
      slider.controls = el.children(slider.config.controls);

      // used if singleContainer == true
      slider.activeslide = 'init';

      // number of slides
      slider.length = countSlides();


      //detect show tabs or not
      if (slider.tab.length > 0){
        slider.hastabs = true
      }

      //detect show content or not
      if (slider.content.length > 0){
        slider.hascontent = true
      }

      //detect if there are controls
      if (slider.controls.length > 0){
        slider.hascontrols = true;
      }


      // check if there are some element that need to be preloaded
      if ( slider.config.loadFirst ){

        // get all items for checking
        var items = slider.content.find(slider.config.loadFirst);
        var itemslen = items.length;
        // var itemsLoaded = 0;


        // if we have smth to preload
        if ( itemslen > 0 )
        {

          // hide sontent, show loader
          contentHide(0);

          items.waitForImages(function() {
              sliderShow(500);
              setup();
          });


        }
        // if there are no elements for preloading
        else
        {
          sliderShow(500);
          setup();
        }


      }
      // if no need to preload anything
      else{
        setup();
      }



      // Show page from start if there is a hash in the url
      if ( slider.config.anchorSupport ){

        $('html, body').animate({
            scrollTop: 0
        }, 0.2);
      }

    }



    var setup = function() {

      getActiveSlide();

     // 1. show default slide
      show(slider.activeslide);

    // 2. if there is autoplay set up
      if (slider.config.autoplay)
        initAuto(slider.activeslide);
      // else
      //   show(slider.activeslide);

      // 2.  watch for changes and show another slide if needed
      action();

      // 3. onSliderLoad callback
      slider.config.onSliderLoad.call(el, slider.activeslide);

    }


    var show = function(index) {

      setActiveIndex(index);

      if ( slider.hascontent ){
        showContent(index);
      }

      if ( slider.hastabs ){
        showTab(index);
      }

      if ( slider.config.scrollTop ){
        scrollTop();
      }

      if ( slider.hascontrols ){
        controlsState();
      }


      // onSlideChange callback
      slider.config.onSlideChange.call(el, index);

    }



    var startAuto = function(startIndex) {

      // if an interval already exists, disregard call
      if (slider.interval) { return; }

      var index = startIndex;
      slider.play = true;


      // create an interval
      slider.interval = setInterval(function() {

        if ( index < (slider.length - 1) ){
          index++;
          slider.play = true;
        }
        else{
          if ( slider.config.loop ){
            index = 0;
            slider.play = true;
          }
          else
            stopAuto();
        }

        if ( slider.play )
          show(index);
        
      }, slider.config.pause);

    }


    var stopAuto = function(){
      // if no interval exists, disregard call
      if (!slider.interval) { return; }

      clearInterval(slider.interval);
      slider.interval = null; //reset

      slider.play = false;
    }



    var initAuto = function(startIndex) {
      startAuto(startIndex);

      if ( slider.config.autoHover ){
        el.on({
          mouseenter: function () {
            slider.autoplayPaused = true;
            stopAuto();
          },
          mouseleave: function () {
            if ( slider.autoplayPaused ){
              startAuto(slider.activeslide);
              slider.autoplayPaused = null; //reset
            }
          }
        });
      }

    }






    var action = function(){


      // If slider has tabs, detect action on tabs

      if ( slider.hastabs ){

        slider.tab.on('click', function(e){

          e.preventDefault();
          e.stopPropagation();

          show($(this).index());

        });
      }


      if ( slider.hascontrols ){
        controlsAction();
      }

    }




    var contentHide = function(timeout) {

        setTimeout(function(){
          // wrap content with help selector
          el.children(slider.config.content).wrapInner('<div class="anyslide-content"></div>');

          // add loader
          el.children(slider.config.content).prepend('<div class="anyslide-loader"></div>');

          // hide content selector
          el.children(slider.config.content).find('.anyslide-content').hide();
          el.removeClass('anyslide-loaded');

        }, timeout);

    }


    var sliderShow = function(timeout) {

        setTimeout(function(){
          el.children(slider.config.content).find('.anyslide-loader').remove();
          el.children(slider.config.content).find('.anyslide-content').fadeIn();
          el.addClass('anyslide-loaded');
        }, timeout);

    }



    var getSlideByUrl = function(){
      var hash = window.location.hash.substring(1);
      var index = 0;

      if (hash){

        slider.content.each(function(){
          if ( $(this).attr('id') == hash )
            index = $(this).index();
        });

      }

      return index;

    }


    var getActiveSlide = function() {

      if ( slider.config.anchorSupport ){
        setActiveIndex ( getSlideByUrl() );
      }
      else{
          if ( el.data('activeslide') )
            setActiveIndex ( el.data('activeslide') );
          else
            setActiveIndex(0);
      }

      return slider.activeslide;
    }




    var setActiveIndex = function(index) {
      slider.prevslide = slider.activeslide;
      slider.activeslide = index;

      if ( slider.config.anchorSupport ){

        // Show page from start if there is a hash in the url
        // $('html, body').animate({
        //     scrollTop: 0
        // }, 300);


        window.location.hash = slider.content.eq(index).attr('id');

      }
    }


    var addActiveClass = function(object, index){

      object.each(function(){
          $(this).removeClass(slider.config.classActive);
      });

      object.eq(index).addClass(slider.config.classActive);
    }




    var countSlides = function(){
      var count = 0;

      // For parrallax effects we need all content in one slide technically
      if ( slider.config.singleContainer ){   
          if ( el.data('anyslide') ){
            attr = el.data('anyslide').split(' ');

            for( var i = 0; i < attr.length; ++i ){
              // find an element in our 'attr' array which contains word 'total'
              if( attr[i].indexOf( 'total' ) >= 0 ){
                count = attr[i].split('-')[1]; // get 2 element in array ['total', 'some number']
              }
            }

          }
      }
      // If there is normal content separated with some selectors (by default <div>)
      else{
         slider.content.each(function(){
          count++;
         });
      }

      return count;
    }


    var scrollTop = function(){

        // set offset for better viewing
        var offset = 0;

        if ($w.width() > slider.config.mobileViewPort ){
          offset = $(el).offset().top - slider.config.desktopOffset;
        }
        else{
          offset = $(el).offset().top - slider.config.mobileOffset;
        }


        $('html, body')
          .delay(slider.config.scrollTopDelay)
          .animate({scrollTop: offset }, slider.config.scrollTopSpeed);

    }



    var showContent = function(index) {


      // For parrallax effects we need all content in one slide technically
      if ( slider.config.singleContainer ){
          slider.content
            .removeClass() //remove all classes before
            .addClass(slider.config.classSlide+index)  //add class of active slide
            .addClass(slider.config.classPrevSlide+slider.prevslide);  //add class for previous slider (e.g. to setup specific styles for diferrent directions)
      }
      // If there is normal content separated with some selectors (by default <div>)
      else{
        addActiveClass(slider.content, index);
      }

      // afterContentShow callback
      slider.config.afterContentShow.call(el, index);

    }



    var showTab = function(index){
      addActiveClass(slider.tab, index);
    }


    var controlsState = function(){

      //Checks state for previous control
      if ( !slider.config.loop && slider.activeslide == 0 )
        slider.controls.find(slider.config.controlsPrev).addClass(slider.config.controlDisabled);
      else
        slider.controls.find(slider.config.controlsPrev).removeClass(slider.config.controlDisabled);

      
      //Checks state for next control
      if ( !slider.config.loop && slider.activeslide == (slider.length - 1) )
        slider.controls.find(slider.config.controlsNext).addClass(slider.config.controlDisabled);
      else
        slider.controls.find(slider.config.controlsNext).removeClass(slider.config.controlDisabled);
      
    }



    var controlsAction = function(){
      
     
      slider.controls.find(slider.config.controlsPrev).on('click', function(e){

        e.preventDefault();
        e.stopPropagation();

        var prevSlide = 0;


        if ( slider.activeslide == 0 ){
          if ( slider.config.loop )
            prevSlide = slider.length - 1;
          else
            return;
        }
        else{
          prevSlide = slider.activeslide - 1;
        }

        show(prevSlide);

      });


      slider.controls.find(slider.config.controlsNext).on('click', function(e){

        e.preventDefault();
        e.stopPropagation();


        var nextSlide = 0;


        if ( slider.activeslide == (slider.length - 1)){
          if ( slider.config.loop )
            nextSlide = 0;
          else
            return;
        }
        else{
          nextSlide = slider.activeslide + 1;
        }

        show(nextSlide);


      });

    }












    init();

    $(el).data('AnySlide', this);

    // returns the current jQuery object
    return this;

  };

})(jQuery);