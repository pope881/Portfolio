// --------------------------------TOGGLE ICON NAVBAR----------------------------------------------------------
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

const menuIconHandler = () => {
	menuIcon.classList.toggle('bx-x')
	navbar.classList.toggle('active')
}
menuIcon.addEventListener('click', menuIconHandler)

// menuIcon.onclick = () => {
// 	menuIcon.classList.toggle('bx-x')
// 	navbar.classList.toggle('active')
// }

// ---------------------SCROLL SECTIONS ACTIVE LINK----------------------------------------------------------------------------------

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY
		// console.log(top);
		let offset = sec.offsetTop - 150
		// console.log(offset);
		let height = sec.offsetHeight
		// console.log(height);
		let id = sec.getAttribute('id')
		// console.log(id);

		if (top >= offset && top < offset + height) {
			navLinks.forEach(link => {
				link.classList.remove('active')
				// const activeLink = document.querySelector('header nav a[href*=' + id + ']')
				const activeLink = document.querySelector(`a[href*=${id}]`)
				activeLink.classList.add('active')
			})
		}
	})

	// ---------------------------------------STICKY NAVBAR---------------------------------------------------------------------------
	let header = document.querySelector('.header')

	header.classList.toggle('sticky', window.scrollY > 100)

	// REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK - SROLL

	menuIcon.classList.remove('bx-x')
	navbar.classList.remove('active')
}

// SCROLL REVEAL

ScrollReveal({
	reset: true,
	distance: '100px',
	duration: 2500,
	delay: 200,
	mobile: false
})

// SPRAWDZIC MOBILE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! KURS MAJKA GDZIES MIAL ODNOSNIE MOBILE:FALSE 
// SPRAWDZIC MOBILE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! KURS MAJKA GDZIES MIAL ODNOSNIE MOBILE:FALSE 
// SPRAWDZIC MOBILE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! KURS MAJKA GDZIES MIAL ODNOSNIE MOBILE:FALSE 

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' })
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' })
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' })
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' })


// TYPED JS 

const typed = new Typed('.multiple-text', {
	strings: ['I am Frontend Developer', 'YOUR next employee', `You can't miss it ! `],
	typeSpeed: 100,
	backSpeed: 50,
	backDelay: 1000,
	loop: true
})