// Usage: see github readme.md
var headshrink = ( function x() {
	"use strict";

	var scrolled = function() {
		var shrinkable, i, y = window.pageYOffset || document.documentElement.scrollTop;
		if (y > 50) {
			shrinkable = document.querySelectorAll(".headshrink");
			for (i = shrinkable.length - 1; i >= 0; i--) {
				shrinkable[i].classList.add("headshrunk");
			}
		}
		if (y < 20) {
			shrinkable = document.querySelectorAll(".headshrink");
			for (i = shrinkable.length - 1; i >= 0; i--) {
				shrinkable[i].classList.remove("headshrunk");
			}
		}
	};

	/* return methods that should be public */
	return {
		scrolled: scrolled
	};

} ());

document.addEventListener("scroll", headshrink.scrolled);
