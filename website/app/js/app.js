window.addEventListener('load', function(){

	/*
	Check elemen in view
	1-inview.js
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