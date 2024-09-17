//  
$( document ).ready(function() {
    document.getElementById("copyrgtyear").innerHTML = "2023";

 $(".testimonial-wrp, .banner-slider").slick({
	  dots: true,
	  infinite: true,
	  autoplay: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});
 	//packages slide
	$(".p-links").on("click", function(event) {
	 	event.preventDefault(); 
	 	$(this).closest(".link-wrp").siblings(".pacakges-links").slideToggle();
	});

	//scroll form
	$(".search-menu").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  //----click issue
  // $('.list-style-1 a').on('click touchend', function(e) {
  //   var el = $(this);
  //   var link = el.attr('href');
  //   window.location = link;
  // });
  
  
  
    /*$('#owl-demo-sop').slick({
    	autoplay:true,
		arrows: false,
  		fade: true,
		autoplaySpeed: 3000,
		dots: false,
		pauseOnHover: false,
		pauseOnFocus: false,
        adaptiveHeight: true
  	});*/
    
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
	autoplay:true,
	autoplayTimeout:2500,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false,
            loop:true
        },
        992:{
            items:4,
            nav:false,
            loop:true
        }
    }
	
});
    
    
});