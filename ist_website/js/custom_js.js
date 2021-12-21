
$(document).ready(function() {

	/*=========================
 		PAGE PILLING
	===========================*/
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#1DC690',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['BANNER','OVERVIEW', 'INDUSTRIES WE SERVE', 'OUR CLIENTS', 'VALUE  PROPOSITION', 'OUR STRENGTH', 'OUR PRODUCTS', 'TESTIMONIAL OUR STORIES', 'News, Blog, Event', 'Footer']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});

	/*=========================
 		PAGE PILLING ENDS
	===========================*/

});

jQuery(document).ready(function($) {
    "use strict";
    

    /* ===============================================
     Initializing Popup-Gallery
     =============================================== */
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>By Inventive Templates</small>';
            }
        }
    });
    
    
    /* ===============================================
     Adding Isotope Effect to Gird(Gallery) Items
     =============================================== */
    $('.grid').isotope({
        // options
        itemSelector: '.gallery_item',
        layoutMode: 'fitRows'
    });
    
        
})(jQuery);