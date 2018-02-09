jQuery(document).ready(function($){

	//Objects
	var
		$w = $(window),
		s2 = Snap('.snapsvg-darkDots'),
		obj = $('.snapsvg-darkDots').parent('.sec-dark'),
		dotsLeft = [],
		dotsRight = [];



	//Measures
	var
		cw = 0,
		ch = 0,
		distX = 90,
		distY = 90,
		radius = 3.5;


	//Colors
	var
		colorDot = '#393d50';


	//Attributes
	var
		attrDotIn =  {fill: '#282b38', r: 0},
		attrDotOut = {fill: colorDot, r: radius};


	//DO IT


	//Draw dots in grid
	function showDot(x, y, animate)
		{
			if (animate == 'true')
				return s2
					.circle(x, y, 0)
					.attr(attrDotIn)
					.animate(attrDotOut, 5000, mina.elastic);

			if (animate == 'false')
				return s2
					.circle(x, y, 0)
					.attr(attrDotOut);
		}


	function drawGrid(animate)
		{
			cw = 3400;
			// cw = obj.outerWidth(true);
			ch = obj.outerHeight(true);

			//reset arrays
			dotsRight = [];
			dotsLeft = [];


			for (var x = cw/2+distX/2+radius; x < cw; x += distX) {
				for (var y = radius; y < ch; y += distY) {
					oDot = showDot(x, y, animate);
					dotsRight.push(oDot);
				}
			}

			for (var x = cw/2-distX/2+radius; x > 0; x -= distX) {
				for (var y = radius; y < ch; y += distY) {
					oDot = showDot(x, y, animate);
					dotsLeft.push(oDot);
				}
			}
		}


  	//ACTION!
  	
  	setTimeout(function(){
		drawGrid('true');
  	}, 8000);


});