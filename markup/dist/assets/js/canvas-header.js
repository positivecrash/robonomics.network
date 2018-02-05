jQuery(document).ready(function($){


	var
		$w = $(window),
		s = Snap('#header-canvas'),
		obj = $('#header-mid'),
		cw = 0,
		ch = 0,
		distX = 90,
		distY = 90,
		radius = 3.5,
		dCol = '#cccccc',
		dot;



	function drawGrid()
		{
			cw = obj.outerWidth(true);
			ch = obj.outerHeight(true);

			for (var x = cw/2+distX/2+radius; x < cw; x += distX) {
				for (var y = radius; y < ch; y += distY) {
					dot = s.circle(x, y, radius);
					dot.attr({ fill: dCol });
				}
			}

			for (var x = cw/2+distX/2+radius; x > 0; x -= distX) {
				for (var y = radius; y < ch; y += distY) {
					dot = s.circle(x, y, radius);
					dot.attr({ fill: dCol });
				}
			}
			
		}

	drawGrid();

	$w.on('resize', function(){
		s.attr({  width: obj.outerWidth(true), height: obj.outerHeight(true) });
		s.clear();
		drawGrid();
	});



	// var
	// 	obj = $('#header-mid'),
	// 	canvas = document.getElementById('header-canvas'),
	// 	context = canvas.getContext('2d'),
	// 	$w = $(window),
	// 	cw = obj.outerWidth(true),
	//   	ch = obj.outerHeight(true),
	//   	r = 7,
	//   	distX = 90,
	// 	distY = 90;



	// function drawDots() {
	//   for (var x = cw/2+distX/2; x < cw; x+=distX) {
	//     for (var y = r; y < ch; y+=distY) {
	//         context.fillStyle = '#cccccc';   
	//         context.fillRect(x-r/2,y-r/2,r,r);
	//       }
	//   }
	// }



	// function resizeCanvas() {
	//   canvas.width = obj.outerWidth(true);
	//   canvas.height = obj.outerHeight(true);
	//   drawDots();
	// }


	// resizeCanvas();

	// $w.on('resize', function(){
	//   	resizeCanvas();
	// });


});