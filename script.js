/**/

document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function smoothScroll(event, targetId) {
      event.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    } else {
        console.warn('Elemento con ID "' + targetId + '" no encontrado.');
      }
}

/*  */

const nav = document.querySelector('#nav_uno');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');
const navLinks = document.querySelectorAll('.nav_link');

function abrirMenu() {
    nav.classList.add('visible');
}

function cerrarMenu() {
    nav.classList.remove('visible');
}

abrir.addEventListener('click', abrirMenu);

cerrar.addEventListener('click', cerrarMenu);

navLinks.forEach(link => {
    link.addEventListener('click', cerrarMenu);
});

document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !abrir.contains(event.target)) {
        cerrarMenu();
    }
});
