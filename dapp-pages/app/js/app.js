window.addEventListener('load', function(){

	// //sort tags, '0-sort.js' required
	// sort('sort', 'sort-sec', 'active');

	if( document.querySelector('.disabled')){
		document.querySelector('.disabled').addEventListener("click", function(event){
		  event.preventDefault()
		});
	}

}, false);


window.addEventListener('resize', function(){
	if(window.innerWidth > 1120){
		document.querySelector('.nav-popup').style.display = 'block';
	}
	else{
		document.querySelector('.nav-popup').style.display = 'none';
	}
}, false);