;(($) => {
	'use strict';
	$(function(){
		$('.team__slider').slick({
			slidesToScroll: 1,
			infinite: true,
			speed: 300,
slidesToShow: 3,

responsive: [   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint:  768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }    
  ]			
		});
	})


const form = $('#contactForm');
form.on('submit', (e) => {
  e.preventDefault();
});

$('.up').on('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });





})(jQuery);


function initMap() {
  let myLatLng = {lat: 49.062785, lng: 33.4156805};

        let style = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c8c4da"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#f3f8f7"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b4aecc"
      },
      {
        "weight": 2.5
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c8c4da"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c4c0d5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#c4c0d5"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#a49fae"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e1cd7b"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c0a32c"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#f4d335"
      },
      {
        "lightness": 15
      },
      {
        "weight": 2.5
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#827240"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c4c0d5"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#9eace5"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
        // Create a map object and specify the DOM element
        // for display.
        const map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 15,
          scrollwheel: false,
          styles: style,
        });

const image = 'img/map-marker.png';
        let marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          icon: image,          
        });
  }


$( () => {
 

  $(window).scroll( () => {
    const windowTop = $(window).scrollTop();
    windowTop > 100 ? $('.up').removeClass('d-none') : $('.up').addClass('d-none');
    windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
    windowTop > 100 ? $('ul').css('top','82px') : $('ul').css('top','92px');
  });

  
 $('.logo').on('click', () => {
    $('html,body').animate({
      scrollTop: 0
    },500);
  });


  $('#menu-toggle').on('click', () => {
    $('#menu-toggle').toggleClass('closeMenu');
    $('ul').toggleClass('showMenu');
    
    $('li').on('click', () => {
      $('ul').removeClass('showMenu');
      $('#menu-toggle').removeClass('closeMenu');
    });
  });
  
});

$('.nav-menu__link').on('click', function(e){
      e.preventDefault();
      const top = $($(this).attr('href'))[0].offsetTop;
      window.scrollTo({
        top: top,
        behavior: 'smooth'
      });
    });

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom && (elementTop < (viewportTop + 100)) && !(elementBottom < (viewportTop + 100));
};

$(window).on('resize scroll', function() {
  $('.section').each(function() {
      var activeSection = $(this).attr('id');
    if ($(this).isInViewport()) {
      $('#fixed-' + activeSection).addClass(activeSection + '-active');
    } else {
      $('#fixed-' + activeSection).removeClass(activeSection + '-active');
    }
  });
});

