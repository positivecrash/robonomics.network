window.addEventListener('load', function(){

	// //sort tags, '0-sort.js' required
	// sort('sort', 'sort-sec', 'active');

	// //show info by click, '0-show.js' required
	// show('data-show');

	document.querySelector('.disabled').addEventListener("click", function(event){
	  event.preventDefault()
	});



}, false);
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
/*
Took on  https://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling
demo - http://jsfiddle.net/W33YR/411/
*/


var visibleY = function(el){
  if(el){
    var
      rect = el.getBoundingClientRect(),
      top = rect.top,
      height = rect.height,
      el = el.parentNode;

      do {
        rect = el.getBoundingClientRect();
        if (top <= rect.bottom === false) return false;
        
        // Check if the element is out of view due to a container scrolling
        if ((top + height) <= rect.top) return false;
        el = el.parentNode;
      } while (el != document.body);

      // Check its within the document viewport
      return top <= document.documentElement.clientHeight;
      }
};


/* Usage */
// IfInView();
// document.addEventListener('scroll', IfInView);
// document.addEventListener('resize', IfInView);

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
var showSorted = function(tag, tagLink, tagSec, active){

	var sec = document.querySelectorAll('[data-' + tagSec + ']');
	var link = document.querySelectorAll('[data-' + tagLink + ']');

	for (var i = 0; i < sec.length; i++) {

		sec[i].style.display = 'block';

		if( (tag != 0) ){

			if( sec[i].getAttribute('data-' + tagSec) != tag ){
				sec[i].style.display = 'none';
			}
		}
	}
}

var sort = function(tagLink, tagSec, active){

	var sec = document.querySelectorAll('[data-' + tagSec + ']');
	var link = document.querySelectorAll('[data-' + tagLink + ']');

	for (var i = 0; i < link.length; i++) {

		link[i].addEventListener('click', function(){

			for (var j = 0; j < link.length; j++) {
				link[j].classList.remove(active);
			}

			this.classList.add(active);
			showSorted( this.getAttribute('data-' + tagLink), tagLink, tagSec, active);
		});
	}

	
}
/* 0-cookie.js requires */

window.addEventListener('load', function(){
	var
		agreementMsg      = document.querySelector('#js-cookiePolicy'),
		agreementBtn      = document.querySelector('#js-cookiePolicy .btn'),
		agreementCookie   = 'policy';

		if (agreementMsg && agreementBtn){
			if(!getCookie(agreementCookie))
				agreementMsg.style.display = 'block';

			agreementBtn.addEventListener('click', function(){
				var date = new Date(new Date().getTime() + 3600 * 1000 * 24 * 365);
				document.cookie = agreementCookie+'=true; expires=' + date.toUTCString();
				agreementMsg.style.display = 'none';
			});
		}

		console.log(getCookie(agreementCookie));
}, false);
window.addEventListener('load', function(){

	/*
	Check elemen in view
	0-inview.js
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