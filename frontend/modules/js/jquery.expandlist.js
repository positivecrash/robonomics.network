// Expands and reduces some list
//
// HTML example
// <div class="js-expand">
// <a href="#">List item 1</a>
// <a href="#">List item 2</a>
// <a href="#">List item 3</a>
// <a href="#">List item 4</a>
// <a href="#" class="js-expand-toggle">Expand</a>
// </div>
//
// JS example
// $('.js-expand').expand({itemshow:3});
//
// Resualt in this case:
// List item 4 will be hidden by default and will appear by clicking element with class js-expand-toggle
//
// Don't forget to add styles for hide and show
// e.g.
// .hide { visibility: hidden; opacity: 0; }


(function($) {

	var defaults = {
		itemshow: 10,
    itemType: '> a',
    toggle: 'js-expand-toggle',
    textin: 'Expand all',
    textout: 'Reduce',
    classHide: 'hide',
    classShow: 'show',

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
        var c = 0;

        items.each(function(){
          c++;

          if(c > expand.config.itemshow)
              {
                if (!$(this).hasClass(expand.config.toggle)){
                  $(this).addClass(expand.config.classHide);
                }
              }
        });

        toggler.data('hidden');
      }


      var showItems = function() {
        items.each(function(){
          $(this).removeClass(expand.config.classHide).addClass(expand.config.classShow);
        });
        toggler.data('opened');
      }

      var hideItems = function() {
        items.each(function(){
          $(this).removeClass(expand.config.classShow).addClass(expand.config.classHide);
        });
        toggler.data('hidden');
      }


    	var init = function() {
    		// Return if slider is already initialized
      		if ($(el).data('expand')) { return; }


      		// merge user-supplied options with the defaults
      		expand.config = $.extend({}, defaults, options);
          items = el.find(expand.config.itemType);
          toggler = el.find(expand.config.toggle);

          initialHide();

          toggler.on('click', function(e){
            e.preventDefault();
            e.stopPropagation();

            if (toggler.data('hidden')){
              showItems();
            }
            else{
              hideItems();
            }
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