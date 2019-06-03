(function () {
	'use strict';
   // this function is strict...
   $(document).ready(function(){     

     var owl = $("#featured");
     owl.owlCarousel({
                    items :4, //10 items above 1000px browser width
                    itemsDesktop : [1000,2], //5 items between 1000px and 901px
                    itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
                    itemsTablet: [600,1], //2 items between 600 and 0;
                    itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
                    autoPlay: true,
                    slideSpeed: 3000,
                    rewindSpeed: 1000,
                    stopOnHover: true,
                    responsive: true,
                    responsiveRefreshRate: 200
                  });
     var owl = $("#client");
     owl.owlCarousel({
                    items :5, //10 items above 1000px browser width
                    itemsDesktop : [1000,2], //5 items between 1000px and 901px
                    itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
                    itemsTablet: [600,1], //2 items between 600 and 0;
                    itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
                  });
   });
$('.panel-heading a').on('click',function(e){
  if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
   e.stopPropagation();
 }
});



}());