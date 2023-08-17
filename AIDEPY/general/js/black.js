// HTML document is loaded
$win.on("load", function(){     
 "use strict";


  // var preloader
  var loader = $('.preloader');
  var bgpreloader = $('.bg-preloader');

  // var navigation
  var Slink = $('.scroll-link');
  var menumobile = $('#main-menu');
  var navdefault = $('.navbar-default');
  var sTick = $(".navbar-fixed-top");

  //contactform var
  var contactname = $('#name-contact');
  var contactemail = $('#email-contact, input#email-contact');
  var contactmessage = $('#message-contact');
  var contactsent = $('#send-contact');
  
  //form failed succes var
  var successent = $("#mail_success");
  var failedsent = $("#mail_failed");

  //totop var
  var totop = $('#totop');
  var bodyScroll = $('html,body');

  //slidertext var
  var slidtext = $('#slidertext');



// start function
loader.fadeOut('slow', function() {	
 "use strict";

 // opening slideup
 bgpreloader.slideUp(500);

 // animated transition & scroll onStep
 onStep();

        // scroll navigation
        if($win.width() < 1025) {
		Slink.on('click', function (event) {
            event.preventDefault();
            var sectionID = $(this).attr("data-id");
            scrollToID('#' + sectionID, 800);
			menumobile.removeClass('menu-show');
			navdefault.removeClass('fullHeight');
        });
        } else {
		Slink.on('click', function (event) {
            event.preventDefault();
            var sectionID = $(this).attr("data-id");
            scrollToID('#' + sectionID, 800);
        });
        }
		   
        function scrollToID(id, speed) {
            var offSet = 50;
            var targetOffset = $(id).offset().top - offSet;
            bodyScroll.animate({ scrollTop: targetOffset }, speed);
	    }


                     //mobile icon
                     $(".navbar-toggle").on("click", function () {
				     menumobile.toggleClass('menu-show');
					 navdefault.toggleClass('fullHeight'); 
					 bodyScroll.animate({scrollTop: 0}, 800);
					 });

// animation block menu
$win.scroll(function() {
	    if ($(".navbar").offset().top > 50) {
	        sTick.addClass("sticky-nav");
			totop.fadeIn(100);
	    } else {
	        sTick.removeClass("sticky-nav");
			totop.fadeOut(100);
	    }
	});

$(document).height(function() { 
		 if ($(".navbar").offset().top > 50) {
	        sTick.addClass("sticky-nav");
			totop.fadeIn(100);
	    } else {
	        sTick.removeClass("sticky-nav");
			totop.fadeOut(100);
	    }				   
	 });

});

    totop.on("click", function(e) {
        e.preventDefault();
        bodyScroll.animate({
            scrollTop: 0
        }, 800);
    });
// end function


// contact form
$(function() {
    contactsent.on('click', function(e) {
        e.preventDefault();
        var e = contactname.val(),
            a = contactemail.val(),
            s = contactmessage.val(),
            r = !1;
        if (0 == a.length || "-1" == a.indexOf("@") || "-1" == a.indexOf(".")) {
            var r = !0;
          contactemail.css({"border-color": "#ffcc00", 
             "border-width":"1px", 
             "border-style":"solid"});
        } else  contactemail.css("border", "none");
		if (0 == e.length) {
            var r = !0;
             contactname.css({"border-color": "#ffcc00", 
             "border-width":"1px", 
             "border-style":"solid"});
        } else contactname.css("border", "none");
        if (0 == s.length) {
            var r = !0;
            contactmessage.css({"border-color": "#ffcc00", 
             "border-width":"1px", 
             "border-style":"solid"});
        } else  contactmessage.css("border", "none");
        return 0 == r && (contactsent.attr({
            disabled: "true",
            value: "Sending..."
        }), $.ajax({
            type: "POST",
            url: "send.php",
            data: "name=" + e + "&email=" + a + "&subject=You Got Email&message=" + s,
            success: function(e) {
                "success" == e ? ( successent.fadeIn(500)) : (failedsent.html(e).fadeIn(500), contactsent.removeAttr("disabled").attr("value", "send").remove())
            }
        })), !1
    })
});

//slideshow text home
$(function() {
    var slideBegin = 3000,
        transSpeed = 500,
        simple_slideshow = slidtext,
        listItems = simple_slideshow.children('.main-text'),
        listLen = listItems.length,
        i = 0,
        changeList = function() {
            listItems.eq(i).fadeOut(transSpeed, function() {
                i += 1, i === listLen && (i = 0), listItems.eq(i).fadeIn(transSpeed)
            })
        };
    listItems.not(':first').hide(), setInterval(changeList, slideBegin);
});

   // Magnific Popup img
   $('.big-img').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: false
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});


// Magnific Popup dailymotion
$('.big-video').magnificPopup({
  type: 'iframe',
  iframe: {
    patterns: {
      dailymotion: {
        index: 'dailymotion.com',
        id: function(url) {        
            var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
            if (m !== null) {
                if(m[4] !== undefined) {
                    return m[4];
                }
                return m[2];
            }
            return null;
        },
        src: 'http://www.dailymotion.com/embed/video/%id%'
      }
    }
  }
});

// Magnific Popup youtube
$('.big-youtube').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    removalDelay: 0,
    preloader: false,
    fixedContentPos: false,
    iframe: {
        patterns: {
            youtube: {
                src: 'http://www.youtube.com/embed/%id%?autoplay=1&rel=0'
            }
        }
    }
});

    //Magnific Popup html
    $('.detail-page').magnificPopup({					
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll'
	});


// Magnific Popup form
$('.popup-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#subscribeemail',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				$("#subscribeemail").val("");
	            $("form#subscribe .subscribeerror").remove();
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#subscribeemail';
				}
			}
		}
});


// isotope
var positionFunc = Isotope.prototype._positionItem;
Isotope.prototype._positionItem = function( item, x, y, isInstant ) {
  positionFunc(item, x, y, true);
};

// service
var $container = jQuery('#services');
    $container.isotope({
        itemSelector: '.service',
        filter: '.webdesign',
        hiddenStyle: {
        opacity: 0
        },
        visibleStyle: {
        opacity: 1
        }
});
jQuery('.filt-serv').on('click', function(e) {
    e.preventDefault();
    var $this = jQuery(this);
    if ( $this.hasClass('selected') ) {
        return false;
        }
    var $optionSet = $this.parents();
    $optionSet.find('.selected').removeClass('selected');
    $this.addClass('selected');
            
    var selector = jQuery(this).attr('data-filter');
    $container.isotope({ 
    filter: selector,
});
return false;
});

// projects
var $containerpro = jQuery('#projects-wrap');
    $containerpro.isotope({
        itemSelector: '.projects',
        filter: '*'
});
jQuery('.filt-projects').on('click', function(e) {
    e.preventDefault();
    var $this = jQuery(this);
    if ( $this.hasClass('actived') ) {
        return false;
        }
    var $optionSetpro = $this.parents();
    $optionSetpro.find('.actived').removeClass('actived');
    $this.addClass('actived');
            
    var selector = jQuery(this).attr('data-project');
    $containerpro.isotope({ 
    filter: selector,
});
return false;
});


// owlCarousel brand
var owl = $("#owl-brand");
   owl.owlCarousel({
   items : 5, 
   itemsDesktop : [1000,4], 
   itemsDesktopSmall : [900,3], 
   itemsTablet: [600,2],
   itemsMobile : false,
   autoPlay : 2000,
   stopOnHover : true
});	
   
  // owl slider home
  var time = 7; // time in seconds
  var $progressBar,
      $bar, 
      $elem, 
      isPause, 
      tick,
      percentTime;
 
    //Init the carousel
    $("#owl-slider-home").owlCarousel({
      slideSpeed : 500,
      paginationSpeed : 500,
      singleItem : true,
      transitionStyle : "fade",
      afterInit : progressBar,
      afterMove : moved,
	  loop : true,
      autoHeight: true,
      touchDrag : false,
      mouseDrag : false,
	  navigation: true,
	   navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ]
    });
 
    //Init progressBar where elem is $("#owl-slider-home")
    function progressBar(elem){
      $elem = elem;
      //build progress bar elements
      buildProgressBar();
      //start counting
      start();
    }
 
    //create div#progressBar and div#bar then prepend to $("#owl-slider-home")
    function buildProgressBar(){
      $progressBar = $("<div>",{
        id:"progressBar"
      });
      $bar = $("<div>",{
        id:"bar"
      });
      $progressBar.append($bar).prependTo($elem);
    }
 
    function start() {
      //reset timer
      percentTime = 0;
      isPause = false;
      //run interval every 0.01 second
      tick = setInterval(interval, 10);
    };
 
    function interval() {
      if(isPause === false){
        percentTime += 1 / time;
        $bar.css({
           width: percentTime+"%"
         });
        //if percentTime is equal or greater than 100
        if(percentTime >= 100){
          //slide to next item 
          $elem.trigger('owl.next')
        }
      }
    }
 
    //moved callback
    function moved(){
      //clear interval
      clearTimeout(tick);
      //start again
      start();
    }

});
// HTML document is loaded end


