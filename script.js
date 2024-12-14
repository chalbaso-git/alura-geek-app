import { displayProducts } from './js/gerencia-productos.js';

const loginBtn = document.querySelector('.header__login'); // botón para acceder a la página de inicio de sesión
const bannerBtn = document.querySelector('.banner__button'); // botón disponible en el banner

// redirigir a la página de inicio de sesión
loginBtn.addEventListener('click', () => {
    window.location = 'login.html';
});

// redirigir a los productos en oferta
bannerBtn.addEventListener('click', () => {
    window.location = 'categoria.html?cat=2';
});

// mostrar productos cuando se carga la página de inicio
displayProducts('split');
