// jQuery.fn.spectragram.accessData = {
//     accessToken: '5373218.674061d.d6bddba2221f4332b42b06ad4d1b2929',
//     clientID: '850fc4185da64f47aaaa226035c868a0'
// };
//
// $('my-instashow').spectragram({
//     query: 'michaellunzer',
//     max: 14,
//     size: 'big',
//     wrapEachWith: '<p></p>'
// });



(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');







(function(){

	$wrapper = $('#wrapper');
	$drawerRight = $('#drawer-right');

	///////////////////////////////
	// Set Home Slideshow Height
	///////////////////////////////

	function setHomeBannerHeight() {
		var windowHeight = jQuery(window).height();
		jQuery('#header').height(windowHeight);
	}

	///////////////////////////////
	// Center Home Slideshow Text
	///////////////////////////////

	function centerHomeBannerText() {
			var bannerText = jQuery('#header > .center');
			var bannerTextTop = (jQuery('#header').actual('height')/2) - (jQuery('#header > .center').actual('height')/2) - 40;
			bannerText.css('padding-top', bannerTextTop+'px');
			bannerText.show();
	}


// Instagram Instashow widget


    // $('.my-instashow').instaShow({
    //     accessToken: '5373218.850fc41.07229c6e3dfb449997480b6cde7ce0d9',
    //     source: '',
    //     width: 'auto',
    //     height: '500px',
    //     columns: 5,
    //     rows: 3,
    //     direction: 'vertical',
    //     lang: 'en',
    //     popupInfo: ''
    // });


 // end Instagram widget




	///////////////////////////////
	// SlideNav
	///////////////////////////////

	function setSlideNav(){
		jQuery(".toggleDrawer").click(function(e){
			//alert($wrapper.css('marginRight'));
			e.preventDefault();

			if($wrapper.css('marginLeft')=='0px'){
				$drawerRight.animate({marginRight : 0},200);
				$wrapper.animate({marginLeft : -300},200);
			}
			else{
				$drawerRight.animate({marginRight : -300},200);
				$wrapper.animate({marginLeft : 0},200);
			}

		})
	}

	function setHeaderBackground() {
		var scrollTop = jQuery(window).scrollTop(); // our current vertical position from the top

		if (scrollTop > 300 || jQuery(window).width() < 700) {
			jQuery('#header .top').addClass('solid');
		} else {
			jQuery('#header .top').removeClass('solid');
		}
	}




	///////////////////////////////
	// Initialize
	///////////////////////////////

	jQuery.noConflict();
	setHomeBannerHeight();
	centerHomeBannerText();
	setSlideNav();
	setHeaderBackground();

	//Resize events
	jQuery(window).smartresize(function(){
		setHomeBannerHeight();
		centerHomeBannerText();
		setHeaderBackground();
	});


	//Set Down Arrow Button
	jQuery('#scrollToContent').click(function(e){
		e.preventDefault();
		jQuery.scrollTo("#portfolio", 1000, { offset:-(jQuery('#header .top').height()), axis:'y' });
	});

	jQuery('nav > ul > li > a').click(function(e){
		e.preventDefault();
		jQuery.scrollTo(jQuery(this).attr('href'), 400, { offset:-(jQuery('#header .top').height()), axis:'y' });
	})

	jQuery(window).scroll( function() {
	   setHeaderBackground();
	});

})();

jQuery(document).ready(function($) {
  $("#instagram").jqinstapics({
    "user_id": "5373218",
    "access_token": "5373218.850fc41.07229c6e3dfb449997480b6cde7ce0d9",
    "count": 20
  })

  // $("submit_form").click(function(){
  //   $( "input" )
  //     .keyup(function() {
  //       var value = $( this ).val();
  //       var contact_email = $( "contact_email" ).text( value );
  //       var contact_message = $( "contact_message" ).text( value );
  //     })
  //     .keyup();
  //
  //
    $.ajax({
    dataType: 'jsonp',
    url: "http://getsimpleform.com/messages/ajax?form_api_token=39c8f9e5a2de15ad63469475702522b9",
    data: {
      name: contact_email,
      message: contact_message,
    }
  }).done(function() {
    //callback which can be used to show a thank you message
    //and reset the form
    alert("Thank you for contacting me");
  });
  // });


});
