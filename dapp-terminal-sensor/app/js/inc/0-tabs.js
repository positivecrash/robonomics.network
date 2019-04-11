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