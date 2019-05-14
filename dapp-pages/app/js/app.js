window.addEventListener('load', function(){

	// //sort tags, '0-sort.js' required
	// sort('sort', 'sort-sec', 'active');

	if( document.querySelector('.disabled')){
		document.querySelector('.disabled').addEventListener("click", function(event){
		  event.preventDefault()
		});
	}



}, false);