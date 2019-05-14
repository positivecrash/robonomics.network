function isVisible(element){
	if (element.offsetWidth > 0 && element.offsetHeight > 0)
		return true;
}


var show = function(link, block, textShow, textHide){

	var infoblock = document.querySelectorAll(block);

	for (var j = 0; j < infoblock.length; j++) {
		if (isVisible(infoblock[j])){
			infoblock[j].style.display = 'none';
			if(textHide) link.innerHTML = textHide;
		}
		else{
			infoblock[j].style.display = 'block';
			if(textShow) link.innerHTML = textShow;
		}
	}
	
}