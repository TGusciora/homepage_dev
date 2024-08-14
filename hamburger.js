

const hamburger = document.querySelector('.hamburger--js');

/* dodanie zdarzenia */
hamburger.addEventListener('click', () => {
	console.log('hamburger')
	const navigation = document.querySelector('.navigation--js');
	navigation.classList.toggle('navigation--open')
}
						  )
