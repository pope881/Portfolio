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
		let offset = sec.offsetTop - 150
		let height = sec.offsetHeight
		let id = sec.getAttribute('id')

		if (top >= offset && top < offset + height) {
			navLinks.forEach(link => {
				link.classList.remove('active')
				const activeLink = document.querySelector(`a[href*=${id}]`)
				activeLink.classList.add('active')
			})
		}
	})

	// ---------------------------------------STICKY NAVBAR---------------------------------------------------------------------------
	let header = document.querySelector('.header')

	header.classList.toggle('sticky', window.scrollY > 500)

	// REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK - SROLL

	menuIcon.classList.remove('bx-x')
	navbar.classList.remove('active')
}

// SCROLL REVEAL

ScrollReveal({
	reset: true,
	distance: '150px',
	duration: 2500,
	delay: 150,
	mobile: false,
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' })
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' })
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' })
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' })

// TYPED JS

const typed = new Typed('.multiple-text', {
	strings: ['I am Frontend Developer', 'YOUR next employee', `You can't miss it! `],
	typeSpeed: 100,
	backSpeed: 50,
	backDelay: 1000,
	loop: true,
})

//GET FULL YEAR
let copyrightText = document.querySelector('.copyright-text')

const newDate = new Date().getFullYear()
copyrightText.textContent = `Copyright © ${newDate} by Bartosz Papierz | All rights Reserved`

//SEND EMAIL
const btn = document.querySelector('#btn')
const form = document.querySelector('#form')

function SendMail() {
	const params = {
		from_name: document.getElementById('fullName').value,
		email_id: document.getElementById('email_id').value,
		message: document.getElementById('message').value,
	}
	if (params.from_name === '' || params.email_id === '' || params.message === '') {
		return
	}
	emailjs.send('service_ap01toq', 'template_m49pomc', params).then(function (res) {
		alert('Success! Your email has been sent.')
	})
	form.reset()
}
btn.addEventListener('click', SendMail)
