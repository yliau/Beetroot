// ;(($) => {
// 	$(document).ready(() => {

// $('.mobile-menu').on('click', () => {
// $(this).addClass('opened');

// });

// 	});
// })(jQuery);


const form = $('#contactForm');
form.on('submit', (e) => {
	e.preventDefault();
});

const navbar = document.getElementsByClassName('navigation')[0];
document.addEventListener('scroll', () => {
	setMenuFixed()
});


const setMenuFixed = () => {
if(window.pageYOffset >= 100){
		navbar.classList.add('fixed-top');
	} else {
		navbar.classList.remove('fixed-top');
	}
};