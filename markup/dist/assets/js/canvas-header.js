jQuery(document).ready(function($){

	//Objects
	var
		$w = $(window),
		s = Snap('#header-canvas'),
		obj = $('#header-mid');



	//Measures
	var
		cw = 0,
		ch = 0,
		distX = 90,
		distY = 90,
		radius = 3.5;


	//Colors
	var
		colorDot = '#cccccc',
		colorDotHov = '#03A5ED';




	//Draw dots in grid
	function drawGrid()
		{
			cw = obj.outerWidth(true);
			ch = obj.outerHeight(true);

			for (var x = cw/2+distX/2+radius; x < cw; x += distX) {
				for (var y = radius; y < ch; y += distY) {
					s
						.circle(x, y, radius)
						.attr({ fill: colorDot });
				}
			}

			for (var x = cw/2+distX/2+radius; x > 0; x -= distX) {
				for (var y = radius; y < ch; y += distY) {
					s
						.circle(x, y, radius)
						.attr({ fill: colorDot });
				}
			}
			
		}

	drawGrid();


	$w.on('resize', function(){
		s.attr({  width: obj.outerWidth(true), height: obj.outerHeight(true) });
		s.clear();
		drawGrid();
	});




	//Hover effect on main SVG object

	s.hover(
		function(e){
			e = e || window.event;

			Snap(e.target).animate({
	          fill: colorDotHov
	        },500);
		}

		,function(e){
			e = e || window.event;

			setTimeout(function(){
	         Snap(e.target).animate({
	            fill: colorDot
	          }, 1000);
	        }, 3000);
		}
	);



});