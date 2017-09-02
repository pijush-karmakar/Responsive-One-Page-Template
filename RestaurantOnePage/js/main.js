
(function ($) {
	"use strict";

    jQuery(document).ready(function($){

 // ..........  For Sticky Header  ............

$(".header-area").sticky({
           topSpacing:0,
           zIndex:999
        });
  

// .........  for smooth scroll  ..........        

 $('.smooth-menu a').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = '65';
        $('html, body').stop().animate({                
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"            
        }, 1200, 'easeInOutExpo');
        
        event.preventDefault();
        
    });

// ............  Scroll Spy ............

$('body').scrollspy({
    target:'.navbar-collapse',
    offset:95
});


//  ...............  For paralax effect  ..............

   $(".top-area-bg").parallax("50%", 0.2);
   $(".reviews-area-bg").parallax("50%", 0.6);
   $(".ingredients-area-bg").parallax("50%", 0.7); 

// For Mobile Menu toogle style

$(".navbar-toggle").click(function(){
   $("body").addClass("main-menu-toggle");
});

$("ul.nav.navbar-nav li a").click(function(){
   $(".navbar-collapse").removeClass("in");
});






    });


    jQuery(window).load(function(){

        
    });


}(jQuery)); 