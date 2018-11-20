var sortTag = function(tag){
	var tagName = 'data-sort-data';

	var data = document.querySelectorAll('['+tagName+']');

	console.log('tag: ' + tag);
	console.log('data: ' + data);

	for (var i = 0; i < data.length; i++) {
		console.log(data[i].innerHTML);
	}
}



window.addEventListener('load', function(){
	var tag = document.querySelector('[data-sort]');

	tag.addEventListener('click', function(){
		console.log('test');
		sortTag(4);
	});
}, false);