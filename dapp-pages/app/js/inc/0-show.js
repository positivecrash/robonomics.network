var show = function(switcher){

	var link = document.querySelectorAll('['+switcher+']');
	var infoblock;

	for (var i = 0; i < link.length; i++) {

		link[i].addEventListener('click', function(){

			infoblock = document.querySelectorAll(this.getAttribute(switcher));

			for (var j = 0; j < infoblock.length; j++) {
				infoblock[j].style.display = 'block';
			}
		});
	}

	
}