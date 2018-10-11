window.addEventListener('load', function(){

	/*
	Check elemen in view
	1-inview.js
	*/
	function IfInView(){
		var 
			el = document.querySelector('.js-checkInView'),
			classview = 'isInView';

		if(visibleY(el))
			el.classList.add(classview);
	}

	IfInView();
	document.addEventListener('scroll', IfInView);
	document.addEventListener('resize', IfInView);

}, false);