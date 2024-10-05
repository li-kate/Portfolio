

  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });



  /* HTML document is loaded. DOM is ready. 
  -------------------------------------------*/

  $(document).ready(function() {


  /*-------------------------------------------------------------------------------
    Navigation - Hide mobile menu after clicking on a link
  -------------------------------------------------------------------------------*/

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


    $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });



  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

    function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#about').parallax("100%", 0.3);
    $('#service').parallax("100%", 0.2);
    $('#experience').parallax("100%", 0.3);
    $('#education').parallax("100%", 0.1);
    $('footer').parallax("100%", 0.2);

  }
  initParallax();



  /*-------------------------------------------------------------------------------
    smoothScroll js
  -------------------------------------------------------------------------------*/
  
    $(function() {
        $('.custom-navbar a, #home a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });
  


  /*-------------------------------------------------------------------------------
    wow js - Animation js
  -------------------------------------------------------------------------------*/

  new WOW({ mobile: false }).init();


  });

  /*-------------------------------------------------------------------------------
    expand classes in education section
  -------------------------------------------------------------------------------*/
  function toggleSection() {
    const section = document.getElementById("bulletedSection");
    const button = document.getElementById("expandButton");

    if (section.classList.contains("hidden")) {
        section.classList.remove("hidden");
        section.style.maxHeight = section.scrollHeight + "px"; // Set max-height to the scroll height
        button.textContent = "Collapse Relevant Courses −"; // Change to Collapse
    } else {
        section.style.maxHeight = "0"; // Collapse to height 0
        section.addEventListener("transitionend", function() {
            section.classList.add("hidden"); // Add hidden class after transition
            section.style.maxHeight = ""; // Reset max-height
        }, { once: true });
        button.textContent = "Expand to Show Relevant Courses +"; // Change to Expand
    }
}