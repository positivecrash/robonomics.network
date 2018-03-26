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
		dotsQuantX: 38,

		// CALLBACKS
		onInit: function(index) { return true; }
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
      		
      		snap.dotAttrHide = {fill: snap.config.colorHidden, r: 0};
      		snap.dotAttrShow = {fill: snap.config.color, r: snap.config.dotRadius};
      		snap.lineAttr = { stroke: snap.config.color, strokeWidth: 1, scale: 1 };


      		//Array for dots
      		dots = [];

      		drawGrid();
      		drawRandomLines();

      		snap.config.onInit.call(el);
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

    		for (var y = snap.config.distY/2; y < (snap.config.canvasHeight - snap.config.distY); y += snap.config.distY) {

    			for (var x = snap.config.distX; x < (snap.config.canvasWidth - snap.config.distX); x += snap.config.distX) {

    				oDot = drawDot(x, y, snap.config.dotsAnimate);
    				dots.push(oDot);

    				// snap.svg.text(x, y, dots.length);

    			}

    		}
    	}




    	var removeLine = function(obj, x2, y2){
    		
    		setTimeout(function(){
  				obj
  					.animate({x1: x2, y1: y2}, 1000)
			}, 3500);

    	}


    	var drawLine = function(x1, y1, x2, y2){
    		
    		l = snap.svg
				.line(x1, y1, x1, y1)
				.attr(snap.lineAttr)
				.animate({x2: x2, y2: y2}, 1000);

			snap.svg.prepend(l);
			removeLine(l, x2, y2);
    	}



    	var drawTrainOfLines = function(startPoint){

    		var
    			direction = Math.random()*2|0 || -1,
    			x1 = dots[startPoint].getBBox().cx,
    			y1 = dots[startPoint].getBBox().cy,
    			koefsX = [0, snap.config.distX],
    			koefsY = [0, snap.config.distY];


			for (var i = 0; i < 4; i++)
    		{
    			setTimeout(function(){

    				x2 = x1 + direction * koefsX[Math.floor(Math.random() * 2)];
    				y2 = y1 + direction * koefsY[Math.floor(Math.random() * 2)];

    				drawLine(x1, y1, x2, y2);
    				x1 = x2;
    				y1 = y2;

	    		}, i*1000);
    		}

    	}


    	var drawRandomLines = function(){

    		setInterval(function(){
  				start = randomInteger(20, dots.length - 20);
  				drawTrainOfLines(start);
			}, 500);	

    	}


    	var drawText = function(text, x, y, styleFrom, styleTo){
    		
    		t = snap.svg
				.text(x, y, text)
				.attr(styleFrom)
				.animate(styleTo, 5000, mina.elastic);

			snap.svg.prepend(t);
			return t;
    	}





    	init();

	    $(el).data('SnapSvgNet', this);

	    // returns the current jQuery object
	    return this;

	};

})(jQuery);




jQuery(document).ready(function($){
	$('.snapsvg-wrap-1').SnapSvgNet();

	$('#snapsvg-index').SnapSvgNet();
});