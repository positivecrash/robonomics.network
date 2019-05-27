window.addEventListener('load', function(){

	
	// func isVisible from 0-show.js
	if( document.querySelector('.window-head-toggle')){
		document.querySelector('.window-head-toggle').addEventListener("click", function(event){
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

}, false);