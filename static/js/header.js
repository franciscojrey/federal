function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function toggleDropdown(event) {
    event.stopPropagation();
    const parent = event.currentTarget;
    parent.classList.toggle('open');
}

function toggleFlecha() {
    
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