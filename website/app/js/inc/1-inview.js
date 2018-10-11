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
