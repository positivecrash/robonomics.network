/*
	Dependencies
	0-inview.js
	0-cookie.js
*/

var classOpen = 'open',
	classClose = 'close',
	classSwitchOn = 'on',
	dataElOpen = 'show-onopen',
	dataElClose = 'show-onclose';


function getEl(e, attr){
	return document.querySelectorAll( e.getAttribute(attr) );
}

// function setCookie(e, state){
// 	date = new Date(new Date().getTime() + 3600 * 1000 * 24 * 365);
// 	document.cookie = e +'=' + state + '; expires=' + date.toUTCString();
// }

function action(e){
	e.classList.toggle(classSwitchOn);

	var open = getEl(e, dataElOpen);
	open[0].classList.toggle(classOpen);
	open[0].classList.toggle(classClose);

	if ( e.getAttribute(dataElClose) )
		{
			var close = getEl(e, dataElClose);

			close[0].classList.toggle(classOpen);
			close[0].classList.toggle(classClose);
		}

	setCookie(open[0].getAttribute('id'), e.classList.contains(classSwitchOn));
}

// function setAction(e){
// 	e.classList.add(classSwitchOn);
// 	var open = getEl(e, dataElOpen);
// 	open[0].classList.add(classOpen);
// }

function init(){

	var e = document.querySelectorAll('['+dataElOpen+']');

	e.forEach(function(i){

		// if( getCookie(i.getAttribute(dataElOpen)) == 'true' ){
		// 	setAction(i);
		// }

		i.addEventListener("click", function(event){
			event.preventDefault();
			action(this);
		});

	});

	// if(e)
	// 	{
	// 		console.log(e.length);
	// 		for (var i = 0; i < e.length; i++)
	// 			{
	// 				console.log(e[i].getAttribute(dataElOpen));
	// 				e[i].addEventListener("click", function(event){
	// 					event.preventDefault();
	// 					action(this);
	// 				});

	// 				// if( getCookie(e[i].getAttribute('show-onopen')) ){
	// 				// 	console.log(e[i].getAttribute('show-onopen')+' = ');
	// 				// 	console.log(getCookie(e[i].getAttribute('show-onopen')));
	// 				// }
						
	// 				// console.log(document.cookie);
	// 			}
	// 	}
}


window.addEventListener('load', init, false);