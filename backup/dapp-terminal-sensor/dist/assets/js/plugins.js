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

function openTab(evt, tabID) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("js-tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }


    tablinks = document.getElementsByClassName("js-tablink");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabID).style.display = "block";
    evt.currentTarget.className += " active";
}


/*
Usage:

<a href="#" class="tablink active" onclick="openTab(event, 'Tab1')">Tab1Name</a>
<a href="#" class="tablink" onclick="openTab(event, 'Tab2')">Tab2Name</a>
<a href="#" class="tablink" onclick="openTab(event, 'Tab3')">Tab3Name</a>

<div id="Tab1" class="tabcontent" style="display:block"></div>
<div id="Tab2" class="tabcontent"></div>
<div id="Tab3" class="tabcontent"></div>

*/