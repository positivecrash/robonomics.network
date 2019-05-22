window.addEventListener('load', function(){

	var sidebar = document.querySelector('.sidebar');
	var classClose = 'closed';
	var classOpen = 'opened';

	document.querySelector('.sidebar-toggle').addEventListener("click", function(event){
	  event.preventDefault();

	  if(sidebar.classList.contains(classClose)){
	  	sidebar.classList.remove(classClose);
	  	sidebar.classList.add(classOpen);
	  }
	  else{
	  	sidebar.classList.add(classClose);
	  	sidebar.classList.remove(classOpen);
	  }
	});

}, false);



var sidebarDetect = function (event) {
	var sidebar = document.querySelector('.sidebar');
	var classClose = 'closed';

	if(window.innerWidth > 1024){
		sidebar.classList.remove(classClose);
	}
	else{
		sidebar.classList.add(classClose);
	}
};

window.addEventListener('load', sidebarDetect, false);
window.addEventListener('resize', sidebarDetect, false);