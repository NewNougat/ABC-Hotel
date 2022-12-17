const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});