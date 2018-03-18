// A2Z F15
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F15

// This is the content script for the extension

var sidebar = "<div class='sidebar'> <ul class='sidebar-list'>"
sidebar += "<li class='sidebar-item'><a href='#' class='sidebar-anchor'>Item 1</a></li>" 
sidebar += "<li class='sidebar-item'><a href='#' class='sidebar-anchor'>Item 2</a></li>"
sidebar += "<li class='sidebar-item'><a href='#' class='sidebar-anchor'>Item 3</a></li>"
sidebar += "<li class='sidebar-item'><a href='#' class='sidebar-anchor'>Item 4</a></li>"
sidebar += "</ul></div>";



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
