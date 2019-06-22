/*
	Dependencies
	0-inview.js
	0-cookie.js
*/

var classOpen = 'open',
	classClose = 'close',
	classSwitchOn = 'on',
	showON = 'show-on',
	showOFF = 'show-off';


function setCookie(e, state){
	date = new Date(new Date().getTime() + 3600 * 1000 * 24 * 365);
	document.cookie = e +'=' + state + '; expires=' + date.toUTCString();
}

function toggleEl(e){
	e.classList.toggle(classOpen);
	e.classList.toggle(classClose);
}

function openEl(e){
	e.classList.add(classOpen);
	e.classList.remove(classClose);
}

function closeEl(e){
	e.classList.add(classClose);
	e.classList.remove(classOpen);
}


function state(e, state){

	var open, close;

	if(state == 'true'){

		if( e.getAttribute(showOFF) ){
			close = document.querySelectorAll( e.getAttribute(showOFF) );
			closeEl(close[0]);
		}

		e.classList.add(classSwitchOn);
		open = document.querySelectorAll( e.getAttribute(showON) );
		openEl(open[0]);

		
	}
	else{

		if( e.getAttribute(showOFF) ){
			close = document.querySelectorAll( e.getAttribute(showOFF) );
			openEl(close[0]);
		}

		e.classList.remove(classSwitchOn);
		open = document.querySelectorAll( e.getAttribute(showON) );
		closeEl(open[0]);

		
	}
	
}


function action(e){

	var open, close;

	e.classList.toggle(classSwitchOn);

	if ( e.getAttribute(showOFF) )
		{
			close = document.querySelectorAll( e.getAttribute(showOFF) );
			toggleEl(close[0]);
		}

	open = document.querySelectorAll( e.getAttribute(showON) );
	toggleEl(open[0]);
	

	if( e.getAttribute('id') )
		setCookie(e.getAttribute('id'), e.classList.contains(classSwitchOn));
}



function init(){

	// console.log(document.cookie);

	var e = document.querySelectorAll('['+showON+']');

	e.forEach(function(i){

		if( i.getAttribute('id') && getCookie(i.getAttribute('id')) ){
			state(i, getCookie(i.getAttribute('id')));
		}

		i.addEventListener("click", function(event){
			event.preventDefault();
			action(this);
		});

	});
}


window.addEventListener('load', init, false);