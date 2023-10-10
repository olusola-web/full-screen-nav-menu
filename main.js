document.querySelector('.hamburger').addEventListener('click', () => {
    console.log('first')
    document.querySelector('header').classList.add('open');
    document.querySelector('.menu').classList.add('open');
})

// close menu

document.querySelector('.closeIcon').addEventListener('click', () => {
    document.querySelector('header').classList.remove('open');
    document.querySelector('.menu').classList.remove('open');
})