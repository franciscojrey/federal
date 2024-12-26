var esDesktop = window.innerWidth >= 769;

function manejarReajustePagina() {
    esDesktop = window.innerWidth >= 769;

    const hamburguesaDesktop = document.querySelector('.hamburguesa-desktop');
    const cruz = document.querySelector('.cruz-desktop');

    if (esDesktop) {
        hamburguesaDesktop.style.display = 'block';
        cruz.style.display = 'none';        
    } else {
        hamburguesaDesktop.style.display = 'none';
        cruz.style.display = 'none';
    }
}

window.addEventListener('resize', manejarReajustePagina);

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');

    if (esDesktop) {
        const header = document.querySelector('header');
        const hamburguesaDesktop = document.querySelector('.hamburguesa-desktop');
        const cruz = document.querySelector('.cruz-desktop');
    
        if (menu.classList.contains('active')) {
            header.style.borderBottomLeftRadius = '0';
            hamburguesaDesktop.style.display = 'none';
            cruz.style.display = 'block';
        } else {
            header.style.borderBottomLeftRadius = '18px';
            hamburguesaDesktop.style.display = 'block';
            cruz.style.display = 'none';
        }
    } else {

    }
}

function toggleDropdown(event) {
    event.stopPropagation();
    const parent = event.currentTarget;
    parent.classList.toggle('open');
}

async function cargarHeader() {
    const headerContainer = document.querySelector('#header-container');
    const response = await fetch('header.html');
    const headerHTML = await response.text();
    headerContainer.innerHTML = headerHTML;
}

// Cargar el header cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    cargarHeader();
});