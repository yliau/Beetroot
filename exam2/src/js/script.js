;(($) => {
	'use strict';
	$(function(){
		$('.team__slider').slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 3, 
		});
	})
})(jQuery);

const form = $('#contactForm');
form.on('submit', (e) => {
	e.preventDefault();
});

function initMap() {
	let myLatLng = {lat: 49.062785, lng: 33.4156805};

        // Create a map object and specify the DOM element
        // for display.
        const map = new google.maps.Map(document.getElementById('map'), {
        	center: myLatLng,
        	zoom: 7
        });

       
        let marker = new google.maps.Marker({
        	map: map,
        	position: myLatLng,
        	title: 'Hello World!'
        });
    }



$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
	});
	
	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		},500);
		e.preventDefault();
	});
	
	//Toggle Menu
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('ul').toggleClass('showMenu');
		
		$('li').on('click', () => {
			$('ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});
	
});
