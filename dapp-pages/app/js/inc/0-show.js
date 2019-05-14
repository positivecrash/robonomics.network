var show = function(link, block, textShow, textHide){

	var infoblock = document.querySelectorAll(block);

	for (var j = 0; j < infoblock.length; j++) {
		if (infoblock[j].style.display === 'none'){
			infoblock[j].style.display = 'block';

			if(textShow) link.innerHTML = textShow;
		}
		else{
			infoblock[j].style.display = 'none';

			if(textHide) link.innerHTML = textHide;
		}
	}
	
}