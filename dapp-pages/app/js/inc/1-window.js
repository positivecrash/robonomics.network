/*
	Dependencies
	0-cookie.js
	0-show.js
*/

function windowSlideAct(o, hide){
	content = o.closest('.window').children[1];
	w = o.closest('.window');

	if ( hide ){
  		content.style.display = 'none';
  		o.innerHTML = '+';

  		if(w.getAttribute('id')){
  			date = new Date(new Date().getTime() + 3600 * 1000 * 24 * 365);
			document.cookie = w.getAttribute('id')+'=hide; expires=' + date.toUTCString();
		}
  	}
  	else{
  		content.style.display = 'block';
  		o.innerHTML = '–';

  		if(w.getAttribute('id')){
  			date = new Date(new Date().getTime() + 3600 * 1000 * 24 * 365);
			document.cookie = w.getAttribute('id')+'=show; expires=' + date.toUTCString();
		}
  	}
}


function windowSlide(){
	var content, wID, hide,
	w = document.querySelectorAll('.window-head-toggle');

	if(w){

		for (var i = 0; i < w.length; i++) {

			if( w[i].closest('.window').getAttribute('id'))
				{
					wID = w[i].closest('.window').getAttribute('id');
			  		if(getCookie(wID)){
			  			if(getCookie(wID) == 'hide') { hide = true; }
			  			if(getCookie(wID) == 'show') { hide = false; }

			  			windowSlideAct(w[i], hide);
			  		}
			  	}

			w[i].addEventListener("click", function(event){
		  		event.preventDefault();

		  		content = this.closest('.window').children[1];

			  	// func isVisible from 0-show.js
			  	if(isVisible(content)){ hide = true; }
			  	else{ hide = false; }

			  	windowSlideAct(this, hide);
			  	
			});
		}
	}
}


window.addEventListener('load', windowSlide, false);