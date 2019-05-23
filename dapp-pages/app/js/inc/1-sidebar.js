window.addEventListener('load', function(){

	var sidebar = document.querySelector('.sidebar'),
		classClose = 'closed',
		classOpen = 'opened',
		date;

	document.querySelector('.sidebar-toggle').addEventListener("click", function(event){
	  event.preventDefault();

	  if(sidebar.classList.contains(classClose)){
	  	sidebar.classList.remove(classClose);
	  	sidebar.classList.add(classOpen);

	  	date = new Date(new Date().getTime() + 3600 * 1000 * 24 * 365);
		document.cookie = 'sidebarTog=open; expires=' + date.toUTCString();
	  }
	  else{
	  	sidebar.classList.add(classClose);
	  	sidebar.classList.remove(classOpen);
	  	date = new Date(new Date().getTime() + 3600 * 1000 * 24 * 365);
		document.cookie = 'sidebarTog=close; expires=' + date.toUTCString();
	  }
	});

}, false);



var sidebarDetect = function (event) {
	var sidebar = document.querySelector('.sidebar'),
		classClose = 'closed',
		cookie;

	if(window.innerWidth > 1024){

		cookie = getCookie('sidebarTog');

		console.log('sidebar status – '+cookie);

		if(!cookie || cookie=='open'){
			sidebar.classList.remove(classClose);
		}
		else{
			sidebar.classList.add(classClose);
		}
	}
	else{
		sidebar.classList.add(classClose);
	}
};

window.addEventListener('load', sidebarDetect, false);
window.addEventListener('resize', sidebarDetect, false);