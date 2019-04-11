window.addEventListener('load', function(){

	// //sort tags, '0-sort.js' required
	// sort('sort', 'sort-sec', 'active');

	// //show info by click, '0-show.js' required
	// show('data-show');

	// if( document.querySelector('.disabled')){
	// 	document.querySelector('.disabled').addEventListener("click", function(event){
	// 	  event.preventDefault()
	// 	});
	// }



	/*
	Check elemen in view
	0-inview.js
	*/
	function IfInView(){
		var 
			el = document.querySelectorAll('.js-checkInView'),
			classview = 'isInView';

		el.forEach(function(item){
			if(visibleY(item))
				item.classList.add(classview);
		});
	}

	IfInView();
	document.addEventListener('scroll', IfInView);
	document.addEventListener('resize', IfInView);



}, false);