// scrollspy init
$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 126});   
});

// smooth scroll init
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#tab_1"]')
  .not('[href="#tab_2"]')
  .not('[href="#tab_3"]')
  .not('[href="#tab_4"]')
  .not('[href="#tab_5"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

// hide navbar-collapse
$('.navbar-nav li a').click(function(){
    $('.navbar-collapse').collapse('hide');
});

// sticky menu init
$(document).ready(function(){
	var navbar = $(".navbar");

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 126 && navbar.hasClass("default") ){
			navbar.removeClass("default").addClass("sticky");
    } else if($(this).scrollTop() <= 126 && navbar.hasClass("sticky")) {
      navbar.removeClass("sticky").addClass("default");
    }
  });
});

// portfolio more
$('.btn-more').click(function() {
    $('.portfolio-thumbnails-hidden').slideToggle(800);
    $(this).toggleClass('opened');
    if($(this).hasClass('opened')) {
      $(this).html('Скрыть')
    } else {
      $(this).html('Показать еще')
    }
});

// wow animate init
new WOW().init();