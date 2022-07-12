const navBtn = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

// click on button
navBtn.addEventListener('click', function(event) {
	event.stopPropagation();
	toggleMobileNav();
})

// check click to close the nav
window.addEventListener('click', function() {
	console.log('click on window');

	if (body.classList.contains('no-scroll'))
		toggleMobileNav();
})
// stop propagation 
mobileNav.addEventListener('click', function(event) {
	event.stopPropagation();
})

function toggleMobileNav() {
	mobileNav.classList.toggle('mobile-nav-active');
	navBtn.classList.toggle('burger-close');
	body.classList.toggle('no-scroll');
}