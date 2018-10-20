// When the user scrolls the page, execute myFunction 
window.onscroll = function() {stick()};

// Get the header
var landing = document.getElementById("landing");
var landingImg = document.getElementById("landing-img");
var landingText = document.getElementById("landing-text");
var overlay = document.getElementById("overlay");
// Get the offset position of the navbar
var sticky = landing.offsetTop + window.innerHeight;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stick() {
  if (window.pageYOffset < sticky) {
    landing.classList.add("sticky");
    landing.classList.remove("land");
  } else {
  	landing.classList.add("land");
    landing.classList.remove("sticky");
  }
}

$(document).ready(function() {
	//fading on scroll
	$('.fade').css('opacity', "1.0");
    $(window).scroll(function(e) {
        var dist = $(window).scrollTop(), op = 1 - (dist / 200);

        $('.fade').css('opacity', op);
        $('#overlay').css('opacity', op*0.2);
    });
});