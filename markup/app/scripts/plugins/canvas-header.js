jQuery(document).ready(function($){

	//Objects
	var
		$w = $(window),
		s = Snap('#header-canvas'),
		obj = $('#header-canvas-wrap'),
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
		attrDotOut = {fill: colorDot, r: radius},
		attrDotHide = {fill: '#ffffff', r: radius*3},
		airaLines = { stroke: "#ccc", strokeWidth: 1, scale: 0 };


	//Text styles
	var
		TextStyleStart = { fontSize: '24px', fontWeight: '300', fill: '#282B38'},
		TextStyleRobonomics = { fill: '#F15A24'},
		TextStyleEthereum = { fill: '#535974'};


	var classDel = 'deleted';




	//DO IT

	function testNums()
  		{
				for (i = 0; i<dotsRight.length; i++)
				{
					s.text(dotsRight[i].node.getBoundingClientRect().x, dotsRight[i].node.getBoundingClientRect().y, i);
				}

				for (i = 0; i<dotsLeft.length; i++)
				{
					s.text(dotsLeft[i].node.getBoundingClientRect().x, dotsLeft[i].node.getBoundingClientRect().y, i);
				}
  		}


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



  	//Draw letters
  	function replaceDot(array,num,x,y,text,styleFrom,styleTo)
  		{
  			array[num].stop().animate(attrDotHide, 100, mina.linear).addClass(classDel);

			s
				.text(array[num].getBBox().cx+x, array[num].getBBox().cy+y, text)
				.attr(styleFrom)
				.animate(styleTo, 5000, mina.elastic);
  		}

  	function drawLetter(side,i,x,y,text,styleFrom,styleTo,delay)
  		{
  			setTimeout(function(){
  				if (side == 'left')
		  			{
		  				replaceDot(dotsLeft,i,x,y,text,styleFrom,styleTo);
		  			}

		  		else
		  			{
		  				replaceDot(dotsRight,i,x,y,text,styleFrom,styleTo);
		  			}
			}, delay);
  		}




  	// Show text 'Robonomics'
  	function TextRobonomics(delayArray)
  		{
  			var y = 6;

  			drawLetter('left', 23, -3, y, 'r', TextStyleStart, TextStyleRobonomics, delayArray[0]);
			drawLetter('left', 18, -7, y, 'o', TextStyleStart, TextStyleRobonomics, delayArray[1]);
			drawLetter('left', 13, -7, y, 'b', TextStyleStart, TextStyleRobonomics, delayArray[2]);
			drawLetter('left', 8, -7, y, 'o', TextStyleStart, TextStyleRobonomics, delayArray[3]);
			drawLetter('left', 3, -7, y, 'n', TextStyleStart, TextStyleRobonomics, delayArray[4]);
			drawLetter('right', 3, -7, y, 'o', TextStyleStart, TextStyleRobonomics, delayArray[5]);
			drawLetter('right', 8, -10, y, 'm', TextStyleStart, TextStyleRobonomics, delayArray[6]);
			drawLetter('right', 13, -3, y, 'i', TextStyleStart, TextStyleRobonomics, delayArray[7]);
			drawLetter('right', 18, -7, y, 'c', TextStyleStart, TextStyleRobonomics, delayArray[8]);
			drawLetter('right', 23, -7, y, 's', TextStyleStart, TextStyleRobonomics, delayArray[9]);
  		}


  	// Show text 'Ethethereum'
  	function TextEthereum(delayArray)
		{
			var y = 6;

			drawLetter('left', 16, -3, y, 'e', TextStyleStart, TextStyleEthereum, delayArray[0]);
			drawLetter('left', 11, -4, y, 't', TextStyleStart, TextStyleEthereum, delayArray[1]);
			drawLetter('left', 6, -7, y, 'h', TextStyleStart, TextStyleEthereum, delayArray[2]);
			drawLetter('left', 1, -7, y, 'e', TextStyleStart, TextStyleEthereum, delayArray[3]);
			drawLetter('right', 1, -4, y, 'r', TextStyleStart, TextStyleEthereum, delayArray[4]);
			drawLetter('right', 6, -7, y, 'e', TextStyleStart, TextStyleEthereum, delayArray[5]);
			drawLetter('right', 11, -7, y, 'u', TextStyleStart, TextStyleEthereum, delayArray[6]);
			drawLetter('right', 16, -10, y, 'm', TextStyleStart, TextStyleEthereum, delayArray[7]);
		}



	//Draw AIRA logo in lines
	function drawLines(points, start, duration)
		{	
			setTimeout(function(){
				for(i=1; i<points.length; i++)
				{
					var l = s
						.line(dotsRight[points[i-1]].getBBox().cx, dotsRight[points[i-1]].getBBox().cy, dotsRight[points[i-1]].getBBox().cx, dotsRight[points[i-1]].getBBox().cy)
						.attr(airaLines)
						.animate({x2: dotsRight[points[i]].getBBox().cx, y2: dotsRight[points[i]].getBBox().cy}, duration, mina.easeinout);

					s.prepend(l);
				}
			}, start);
		}




  	//ACTION!

	setTimeout(function(){
		drawGrid('true');
		// testNums();

		var TextDelay = [2000, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3300];
		TextRobonomics(TextDelay);
		TextEthereum(TextDelay);

		//AIRA logo
		drawLines(['13','17','21','22','23','18','13','17','18','22'], 3200, 2000);
  	}, 1500);

	



 //  	$w.on('resize', function(){
 //  		s.clear();
	// 	s.attr({  width: obj.outerWidth(true), height: obj.outerHeight(true) });

	// 	drawGrid('false');

	// 	TextDelay = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	// 	TextRobonomics(TextDelay);
	// 	TextEthereum(TextDelay);
	// });









	//HOVER

	s.mouseover(
		function(e){
			e = e || window.event;

			if ( (Snap(e.target).type == 'circle') && (!Snap(e.target).hasClass(classDel)) ){
				Snap(e.target).animate({
		          fill: colorDotHov
		        },500);
			}

		}
	)
	.mouseout(
		function(e){
			e = e || window.event;

			if ( (Snap(e.target).type == 'circle') && (!Snap(e.target).hasClass(classDel)) ){
				setTimeout(function(){
		         Snap(e.target).animate({
		            fill: colorDot
		          }, 1000);
		        }, 10000);
			}
		}
	);



});