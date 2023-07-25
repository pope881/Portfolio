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

	// STICKY NAVBAR
	let header = document.querySelector('.header')

	header.classList.toggle('sticky', window.scrollY > 100)
}
