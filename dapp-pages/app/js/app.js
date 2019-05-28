window.addEventListener('load', function(){

	
	// func isVisible from 0-show.js
	if( document.querySelectorAll('.window-head-toggle')){

		var w = document.querySelectorAll('.window-head-toggle');

		for (var i = 0; i < w.length; i++) {

			w[i].addEventListener("click", function(event){
			  event.preventDefault();

			  var content = this.closest('.window').children[1];
			  if(isVisible(content)){
			  	content.style.display = 'none';
			  	this.innerHTML = '+';
			  }
			  else{
			  	content.style.display = 'block';
			  	this.innerHTML = '–';
			  }
			});
		}
	}

}, false);