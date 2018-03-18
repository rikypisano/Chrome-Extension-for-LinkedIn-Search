// A2Z F15
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F15

// This is the content script for the extension

var sidebar = "<div class='sidebar'> <ul class='sidebar-list'>"
sidebar += "<li class='sidebar-item'><p class='salesNav sidebar-anchor'>Use LinkedIn Sales Navigator</p></li>"
sidebar += "<li class='sidebar-item'><p class='keywords sidebar-anchor'>Don't Base your Search on the Keywords Box</p></li>"
sidebar += "<li class='sidebar-item'><p class='geo sidebar-anchor'>Targeting by geography</p></li>" 
sidebar += "<li class='sidebar-item'><p class='title sidebar-anchor'>Targeting by Title</p></li>"
sidebar += "<li class='sidebar-item'><p class='results sidebar-anchor'>Under 1.5K Results</p></li>"
sidebar += "<li class='sidebar-item'><p class='length sidebar-anchor'>URL Should be under 3,700 charcters</p></li>"
sidebar += "<li class='sidebar-item'><a onclick='toggleSidebar()'><p class='sidebar-anchor'>Close GuideLines</p></a></li>"
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

    var checklist = $('.sidebar-item');
    console.log('these are the checklist elements',checklist);

	console.log("Chrome extension is running!");

	var str = document.location.href;

	console.log('js loaded',str);

	var geo = str.includes('facet.G=');

	var title = str.includes('jobTitleEntities=');

	var length = str.length;

	console.log('geo requirement is ',geo);
	console.log('title requirement is ',title);
	console.log('url length is',length);

	function checkLength() {
	    if (length <= 3700) {
	  	console.log('the url length is good');
		  	 // $('.length').
	  }
	};

	function checkGeo() {
	    if (geo) {
		console.log('the geo is good');
		     // $('.geo').
	  }
	};

	function checkTitle() {
	  if (title) {
	  	console.log('the title is good');
	     // $('.title').
	  }
	};
};
