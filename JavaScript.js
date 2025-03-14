// script.js

// Lógica para el menú hamburguesa
const mobileMenu = document.getElementById('mobile-menu');
const menu = document.getElementById('menu');

mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});
