jQuery(document).ready(function($){

	//Objects
	var
		$w = $(window),
		s = Snap('#header-canvas'),
		obj = $('#header-mid'),
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
		colorDot = '#cccccc',
		colorDotHov = '#03A5ED';


	//Attributes
	var
		attrDotIn =  {fill: '#ffffff', r: 0},
		attrDotOut = {fill: colorDot, r: radius};


	//Text styles
	var
		TextStyleRobonomicsStart = { fontSize: 24, fontWeight: '300', fill: '#282B38'},
		TextStyleRobonomics = { fill: '#F15A24'};




	//Draw dots in grid
	function showDot(x, y, animate)
		{
			if (animate == 'true')
				return s
					.circle(x, y, 0)
					.attr(attrDotIn)
					.animate(attrDotOut, 5000, mina.elastic);

			if (animate == 'false')
				return s
					.circle(x, y, 0)
					.attr(attrDotOut);
		}


	function drawGrid(animate)
		{
			// cw = 3400;
			cw = obj.outerWidth(true);
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

			// console.log(dotsRight[15].node.getBoundingClientRect().y);
			// console.log('dotsRight ' + dotsRight.length);
			// console.log('dotsLeft ' + dotsLeft.length);
		}



  	//Draw letters
  	function replaceDot(array,num,x,y,text,style, side)
  		{
  			for (i = 0; i<array.length; i++)
				{
					if (num == i)
					{
						array[i].stop().animate({'r': 0}, 100, mina.linear);

						s
							.text(array[i].getBBox().cx+x, array[i].getBBox().cy+y, text)
							.attr(TextStyleRobonomicsStart)
							.animate(style, 5000, mina.elastic);
					}
				}
  		}

  	function drawLetter(side,i,x,y,text,style,delay)
  		{
  			setTimeout(function(){
  				if (side == 'left')
		  			{
		  				replaceDot(dotsLeft,i,x,y,text,style, side);
		  			}

		  		else
		  			{
		  				replaceDot(dotsRight,i,x,y,text,style, side);
		  			}

		  	



  			for (i = 0; i<dotsRight.length; i++)
				{
					s.text(dotsRight[i].node.getBoundingClientRect().x, dotsRight[i].node.getBoundingClientRect().y, i);
				}

			for (i = 0; i<dotsLeft.length; i++)
				{
					s.text(dotsLeft[i].node.getBoundingClientRect().x, dotsLeft[i].node.getBoundingClientRect().y, i);
					// dotsLeft[i].stop().attr({'r': 0});
				}
			}, delay);
  		}


  	function TextRobonomics(delayArray)
  		{
  			var y = 6;

  			drawLetter('left', 23, -3, y, 'r', TextStyleRobonomics, delayArray[0]);
			drawLetter('left', 18, -7, y, 'o', TextStyleRobonomics, delayArray[1]);
			drawLetter('left', 13, -7, y, 'b', TextStyleRobonomics, delayArray[2]);
			drawLetter('left', 8, -7, y, 'o', TextStyleRobonomics, delayArray[3]);
			drawLetter('left', 3, -7, y, 'n', TextStyleRobonomics, delayArray[4]);
			drawLetter('right', 3, -7, y, 'o', TextStyleRobonomics, delayArray[5]);
			drawLetter('right', 8, -10, y, 'm', TextStyleRobonomics, delayArray[6]);
			drawLetter('right', 13, -3, y, 'i', TextStyleRobonomics, delayArray[7]);
			drawLetter('right', 18, -7, y, 'c', TextStyleRobonomics, delayArray[8]);
			drawLetter('right', 23, -7, y, 's', TextStyleRobonomics, delayArray[9]);
  		}



  	//ACTION!

	setTimeout(function(){
		drawGrid('true');
  	}, 1500);

	var TextRobonomicsDelay = [2700, 2500, 2600, 2000, 2800, 3300, 3000, 3100, 3200, 2900];
	TextRobonomics(TextRobonomicsDelay);



	// function SvgPosition()
	// 	{
	// 		var paddingLeft = $('#header-canvas').outerWidth(true)/2;
	// 		$('#header-canvas').css('margin-left', - paddingLeft);
	// 	}

	// SvgPosition();


  	$w.on('resize', function(){
  		s.clear();
		s.attr({  width: obj.outerWidth(true), height: obj.outerHeight(true) });

		drawGrid('false');

		TextRobonomicsDelay = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		TextRobonomics(TextRobonomicsDelay);
	});




	//Hover effect on main SVG object

	s.mouseover(
		function(e){
			e = e || window.event;

			// console.log(e.target.getBBox());
			// console.log(Snap(e.target).type);

			if (Snap(e.target).type == 'circle'){
				Snap(e.target).animate({
		          fill: colorDotHov
		        },500);
			}

		}
	)
	.mouseout(
		function(e){
			e = e || window.event;

			if (Snap(e.target).type == 'circle'){
				setTimeout(function(){
		         Snap(e.target).animate({
		            fill: colorDot
		          }, 1000);
		        }, 3000);
			}
		}
	);



});