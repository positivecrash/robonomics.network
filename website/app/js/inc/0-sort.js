var showSorted = function(tag, tagLink, tagSec, active){

	var sec = document.querySelectorAll('[data-' + tagSec + ']');
	var link = document.querySelectorAll('[data-' + tagLink + ']');

	for (var i = 0; i < sec.length; i++) {

		sec[i].style.display = 'block';

		if( (tag != 0) ){

			if( sec[i].getAttribute('data-' + tagSec) != tag ){
				sec[i].style.display = 'none';
			}
		}
	}
}

var sort = function(tagLink, tagSec, active){

	var sec = document.querySelectorAll('[data-' + tagSec + ']');
	var link = document.querySelectorAll('[data-' + tagLink + ']');

	for (var i = 0; i < link.length; i++) {

		link[i].addEventListener('click', function(){

			for (var j = 0; j < link.length; j++) {
				link[j].classList.remove(active);
			}

			this.classList.add(active);
			showSorted( this.getAttribute('data-' + tagLink), tagLink, tagSec, active);
		});
	}

	
}