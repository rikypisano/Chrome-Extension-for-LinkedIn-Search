// A2Z F15
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F15

// This is the content script for the extension

var sidebar = "<div class='sidebar'> <ul class='sidebar-list'>"
sidebar += "<li class='sidebar-item'><p class='sidebar-anchor'>Item 1</p></li>" 
sidebar += "<li class='sidebar-item'><p class='sidebar-anchor'>Item 2</p></li>"
sidebar += "<li class='sidebar-item'><p class='sidebar-anchor'>Item 3</p></li>"
sidebar += "<li class='sidebar-item'><p class='sidebar-anchor'>Item 4</p></li>"
sidebar += "</ul></div>";

var check = "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 130.2 130.2'> <circle class='path circle' fill='none' stroke='#73AF55' stroke-width='6' stroke-miterlimit='10' cx='65.1' cy='65.1' r='62.1'/> <polyline class='path check' fill='none' stroke='#73AF55' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' points='100.2,40.2 51.5,88.8 29.8,67.5 '/> </svg> <p class='success'>Oh Yeah!</p>";

var cross = "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 130.2 130.2'> <circle class='path circle' fill='none' stroke='#D06079' stroke-width='6' stroke-miterlimit='10' cx='65.1' cy='65.1' r='62.1'/> <line class='path line' fill='none' stroke='#D06079' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' x1='34.4' y1='37.9' x2='95.8' y2='92.3'/> <line class='path line' fill='none' stroke='#D06079' stroke-width='6' stroke-linecap='round' stroke-miterlimit='10' x1='95.8' y1='38' x2='34.4' y2='92.2'/> </svg> <p class='error'>Bummer!</p>";

window.onload = function() {

// Replaces entire page with sidebar	     
    //   var body = document.body;

    var sideNav = document.createElement('div');
  	sideNav.innerHTML = sidebar;

    document.body.insertBefore(sideNav, document.body.firstChild);

    alert('Lets begin the search');

    // Sidebar toggle
    function toggleSidebar() {
      $(".button").toggleClass("active");
      $("main").toggleClass("move-to-left");
      $(".sidebar-item").toggleClass("active");
      $(".sidebar").toggleClass("gray-background");
    }

    toggleSidebar();

    var checklist = $('.sidebar-item');
    console.log('these are the checklist elements',checklist);

    var crossSign = document.createElement('div');
    crossSign.innerHTML = cross;

    for(var i in checklist){
    	var guideline = checklist[i];
    	guideline.before(crossSign);
    	// refElem.parentNode.insertBefore(elementToInsert.CloneNode(), refElem.nextSibling);
	};
    
    

    // $(".button").on("click tap", function() {
    //     toggleSidebar();
    // });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
          toggleSidebar();
      }
    });


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
