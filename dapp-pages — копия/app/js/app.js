window.addEventListener('load', function(){

	// //sort tags, '0-sort.js' required
	// sort('sort', 'sort-sec', 'active');

	// //show info by click, '0-show.js' required
	// show('data-show');

	if( document.querySelector('.disabled')){
		document.querySelector('.disabled').addEventListener("click", function(event){
		  event.preventDefault()
		});
	}



}, false);