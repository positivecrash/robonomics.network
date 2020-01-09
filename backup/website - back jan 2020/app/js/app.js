window.addEventListener('load', function(){

	//sort tags, '0-sort.js' required
	sort('sort', 'sort-sec', 'active');

	//show info by click, '0-show.js' required
	show('data-show');


	//progress for tge
	var eTgePtogress = document.querySelector('.tge-progress-progress');

	function setProgress(){

		if (window.innerWidth < 1000){
			eTgePtogress.style.width = eTgePtogress.getAttribute('data-progress');
			eTgePtogress.style.height = '2px';
		}
		else{
			eTgePtogress.style.height = eTgePtogress.getAttribute('data-progress');
			eTgePtogress.style.width = '2px';
		}
	}

	if ( eTgePtogress ){
		setProgress();

		window.addEventListener('resize', function(event) {
		  setProgress();
		});

	}
	

}, false);