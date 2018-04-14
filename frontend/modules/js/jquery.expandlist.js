// Expands and reduces some list
//
// HTML example
// <div class="js-expand">
// <a href="#">List item 1</a>
// <a href="#">List item 2</a>
// <div class="js-expand-content">
// <a href="#">List item 3</a>
// <a href="#">List item 4</a>
// </div>
// <a href="#" class="js-expand-toggle">Expand</a>
// </div>
//
// JS example
// $('.js-expand').expand();
//
// Resualt in this case:
// List item 4 will be hidden by default and will appear by clicking element with class js-expand-toggle
//
// Don't forget to add styles for hide and show
// e.g.
// .hidden { visibility: hidden; opacity: 0; height: 0; }
// .opened { visibility: visible; opacity: 1; height: auto; }


(function($) {

	var defaults = {
    toggle: 'js-expand-toggle', //class name
    content: 'js-expand-content', //class name
    textin: 'Expand all',
    textout: 'Reduce',
    classHidden: 'hidden',
    classOpened: 'opened',
    classTogHide: 'hide',
    classTogOpen: 'open',

		// CALLBACKS
    onExpand: function(index) { return true; },
		onReduce: function(index) { return true; }
	};

	$.fn.expand = function (options) {
		
		if (this.length < 1)
            return;

	    // support multiple elements
	    if (this.length > 1) {
	      this.each(function() {
	        $(this).expand(options);
	      });
	      return this;
	    }


	    // create a namespace to be used throughout the plugin
    	var expand = {},

    	// set a reference to 
    	el = this;




      var initialHide = function() {
        items.each(function(){
          $(this).addClass(expand.config.classHidden);
        });

        toggler.data('expand-status', 'hidden');
      }





      var showItems = function() {
        items.each(function(){
          $(this)
            .removeClass(expand.config.classHidden)
            .addClass(expand.config.classOpened);
        });
        toggler.data('expand-status','opened');
      }




      var hideItems = function() {
        items.each(function(){
          $(this)
            .removeClass(expand.config.classOpened)
            .addClass(expand.config.classHidden);
        });


        toggler.data('expand-status','hidden');
      }




      var toggleText = function() {
        if ( toggler.data('expand-status') == 'hidden' )
          {
            toggler
              .html(expand.config.textin)
              .removeClass(expand.config.classTogHide).addClass(expand.config.classTogOpen);
          }
        else
          {
            toggler
              .html(expand.config.textout)
              .removeClass(expand.config.classTogOpen).addClass(expand.config.classTogHide);
          }
      }




    	var init = function() {
    		// Return if slider is already initialized
      		if ($(el).data('expand')) { return; }


      		// merge user-supplied options with the defaults
      		expand.config = $.extend({}, defaults, options);

          items = el.find('.'+expand.config.content);
          toggler = el.find('.'+expand.config.toggle);

          initialHide();
          toggleText();


          toggler.on('click', function(e){
            e.preventDefault();
            e.stopPropagation();

            if (toggler.data('expand-status') == 'hidden'){
              showItems();
            }
            else{
              hideItems();
            }

            toggleText();
          });
    	}



    	init();

	    $(el).data('expand', this);

	    // returns the current jQuery object
	    return this;

	};

})(jQuery);


jQuery(document).ready(function($){

  $('.js-listexpand').expand();

});