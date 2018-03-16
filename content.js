// A2Z F15
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F15

// This is the content script for the extension

var sidebar = "div class='nav-right visible-xs'> <div class='button' id='btn'> <div class='bar top'></div> <div class='bar middle'></div> <div class='bar bottom'></div> </div> </div> <!-- nav-right --> <main> <nav> <div class='nav-right hidden-xs'> <div class='button' id='btn'> <div class='bar top'></div> <div class='bar middle'></div> <div class='bar bottom'></div> </div> </div> <!-- nav-right --> </nav> </main><div class='sidebar'> <ul class='sidebar-list'> <li class='sidebar-item'><a href='#' class='sidebar-anchor'>Item 1</a></li> <li class='sidebar-item'><a href='#' class='sidebar-anchor'>Item 2</a></li> <li class='sidebar-item'><a href='#' class='sidebar-anchor'>Item 3</a></li> <li class='sidebar-item'><a href='#' class='sidebar-anchor'>Item 4</a></li> </ul> </div>";

window.onload = function() {

// Replaces entire page with sidebar	     
    //   var body = document.body;

    var sideNav = document.createElement('div');
  	sideNav.innerHTML = sidebar;

    document.body.insertBefore(sideNav, document.body.firstChild);

    alert('Lets begin the search');

    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");


		console.log("Chrome extension is running!");

		var str = document.location.href;

		console.log('js loaded',str);

		var geo = str.includes('facet.G=');

		var title = str.includes('jobTitleEntities=');

		var length = str.length;

		function checkLength() {
		    if (length <= 3700) {
		  	 // $('.length').prop('checked', true);
		  }
		};

		function checkGeo() {
		    if (geo) {
		     // $('.geo').prop('checked', true);
		  }
		};

		function checkTitle() {
		  if (title) {
		     // $('.title').prop('checked', true);
		  }
		};

		setTimeout(checkLength, 1000);
		setTimeout(checkGeo, 2000);
		setTimeout(checkTitle, 3000);
};
