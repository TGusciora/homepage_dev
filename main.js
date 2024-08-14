console.log('alert main');
console.log('ok');

const age = 4;
const firstName = 'Tomasz';

console.log(age);
console.log(firstName);
console.log(`Nazywam się ${firstName} i mam ${age} lat`);

const button = document.querySelector('.page-header__button--js')

const clickFunction = (e) => {
	console.log(e);
    console.log('klik, klik');
    const header = document.querySelector('.page-header')
    header.innerHTML = 'klik, klik';

}

/* dodanie klasy */
console.log(button.classList)
button.classList.add('testowa')
console.log(button.classList)

button.addEventListener('click', clickFunction)
