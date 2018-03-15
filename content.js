// A2Z F15
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F15

// This is the content script for the extension

window.onload = function() {
		function wait(ms){
		   var start = new Date().getTime();
		   var end = start;
		   while(end < start + ms) {
		     end = new Date().getTime();
		  }
		}

		console.log('before');
		wait(7000);  //7 seconds in milliseconds
		console.log('after');

        alert('the DOM is ready');

		console.log("Chrome extension is running!");

		var str = document.location.href;

		console.log('js loaded',str);

		var geo = str.includes('facet.G=');

		var title = str.includes('jobTitleEntities=');

		var length = str.length;
		
		function checkLength() {
		    if (length <= 3700) {
		  	 $('.length').prop('checked', true);
		  }
		};

		function checkGeo() {
		    if (geo) {
		     $('.geo').prop('checked', true);
		  }
		};

		function checkTitle() {
		  if (title) {
		     $('.title').prop('checked', true);
		  }
		};

		setTimeout(checkLength, 1000);
		setTimeout(checkGeo, 2000);
		setTimeout(checkTitle, 3000);
};
