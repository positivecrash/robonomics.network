// use Snap.svg 0.5.1

(function($) {

	var defaults = {
		dotRadius: 3.5,
		distX: 90,
		distY: 90,
		canvasWidth: 0,
		canvasHeight: 0,
		color: '#cccccc',
		colorHidden: '#ffffff',
		dotsAnimate: true,
		svgEl: '.snapsvg',
		dotsQuantX: 38
	};

	$.fn.SnapSvgNet = function (options) {
		
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
    	var snap = {},

    	// set a reference to 
    	el = this;


    	var randomInteger = function(min, max) {
		    var rand = min - 0.5 + Math.random() * (max - min + 1);
		    rand = Math.round(rand);
		    return rand;
		}



    	var init = function() {
    		// Return if slider is already initialized
      		if ($(el).data('SnapSvgNet')) { return; }


      		// merge user-supplied options with the defaults
      		snap.config = $.extend({}, defaults, options);


      		snap.svg = Snap(snap.config.svgEl);

      		snap.config.canvasHeight = el.outerHeight(true);
      		snap.config.canvasWidth = ((snap.config.dotRadius*2) + snap.config.distX) * (snap.config.dotsQuantX - 1) + snap.config.dotRadius*2;
      		snap.Y = Math.floor(snap.config.canvasHeight / ((snap.config.dotRadius*2) + snap.config.distX)) - 1;
      		console.log(snap.Y * snap.config.dotsQuantX);
      		
      		snap.dotAttrHide = {fill: snap.config.colorHidden, r: 0};
      		snap.dotAttrShow = {fill: snap.config.color, r: snap.config.dotRadius};
      		snap.lineAttr = { stroke: snap.config.color, strokeWidth: 1, scale: 1 };


      		//Array for dots
      		dots = [];

      		drawGrid();
      		drawRandomLine();
    	}



    	var drawDot = function(x, y, animate) {
    	
    		if (animate)
    		{
    			return snap.svg
					.circle(x, y, 0)
					.attr(snap.dotAttrHide)
					.animate(snap.dotAttrShow, 5000, mina.elastic);
    		}
    		else
    		{
    			return snap.svg
    				.circle(x, y, 0)
					.attr(snap.dotAttrShow);
    		}
    	}

    	var drawGrid = function() {

    		for (var x = snap.config.distX; x < (snap.config.canvasWidth - snap.config.distX); x += snap.config.distX) {

    			for (var y = snap.config.distY; y < (snap.config.canvasHeight-snap.config.distY); y += snap.config.distY) {

    				oDot = drawDot(x, y, snap.config.dotsAnimate);
    				dots.push(oDot);

    				// snap.svg.text(x, y, dots.length);

    			}

    		}
    	}

    	var drawRandomLine = function(){
    		
    		var r1 = randomInteger(20, dots.length - 40);
    		// var r1 = Math.floor(Math.random() * dots.length);
    		console.log(r1);
    		var k = Math.floor(Math.random() * 5 + 1);
    		var k2 = Math.floor(Math.random() * 3 + 1);
    		var k3 = Math.floor(Math.random() * 7 + 1);


			l = snap.svg
				.line(dots[r1].getBBox().cx, dots[r1].getBBox().cy, dots[r1+k].getBBox().cx, dots[r1+k].getBBox().cy)
				.attr(snap.lineAttr);

			snap.svg.prepend(l);

			l = snap.svg
				.line(dots[r1+k].getBBox().cx, dots[r1+k].getBBox().cy, dots[r1+k2].getBBox().cx, dots[r1+k2].getBBox().cy)
				.attr(snap.lineAttr);

			snap.svg.prepend(l);


			l = snap.svg
				.line(dots[r1+k2].getBBox().cx, dots[r1+k2].getBBox().cy, dots[r1+k3].getBBox().cx, dots[r1+k3].getBBox().cy)
				.attr(snap.lineAttr);

			snap.svg.prepend(l);

			

			

    	}



    	init();

	    $(el).data('SnapSvgNet', this);

	    // returns the current jQuery object
	    return this;

	};

})(jQuery);




jQuery(document).ready(function($){
	$('.snapsvg-wrap-1').SnapSvgNet();
});