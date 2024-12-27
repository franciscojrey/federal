// Visibilidad del dropdown y dirección de la flecha
function arancelesDropdown() {
    const selector = document.getElementById('selector-aranceles');
    const opcionSeleccionadaTexto = document.getElementById('opcion-seleccionada-texto');
    const dropdown = document.getElementById('dropdown-opciones');
    const flecha = document.getElementById('selector-flecha');
    const flechaAbajo = document.getElementById('selector-flecha-abajo');

    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

    if (dropdown.style.display === 'block'){
        selector.style.background = 'var(--clr-rojo-fuerte)';
        opcionSeleccionadaTexto.style.borderBottom = '1px solid var(--clr-blanco)';
        flecha.style.display = 'none';
        flechaAbajo.style.display = 'block';
        flechaAbajo.style.marginRight = '0.1em';
    } else {
        selector.style.background = 'rgb(208,26,28)';
        selector.style.background = 'linear-gradient(180deg, rgba(208,26,28,1) 30%, rgba(233,71,50,1) 100%)';
        opcionSeleccionadaTexto.style.borderBottom = 'none';
        flecha.style.display = 'block';
        flechaAbajo.style.display = 'none';
    }

}

// Seleccionar opción del dropdown
function elegirOpcion(opcion) {
    const opcionSeleccionada = document.getElementById('opcion-seleccionada');

    opcionSeleccionada.querySelector('p').textContent = opcion;

    const dropdown = document.getElementById('dropdown-opciones');
    dropdown.style.display = 'none';

    const flecha = document.getElementById('selector-flecha');
    flecha.textContent = '>';

    const dropdownContent = `
        ${opcion !== 'Renta variable' ? `<div class="selector-opcion" onclick="elegirOpcion('Renta variable')">Renta variable</div>` : ''}
        ${opcion !== 'Renta fija' ? `<div class="selector-opcion" onclick="elegirOpcion('Renta fija')">Renta fija</div>` : ''}
        ${opcion !== 'Gastos administrativos' ? `<div class="selector-opcion" onclick="elegirOpcion('Gastos administrativos')">Gastos administrativos</div>` : ''}
    `;
    dropdown.innerHTML = dropdownContent;

    actualizarVisualizacion(opcion);

    arancelesDropdown()
}

// Actualizar visualización según tamaño de la pantalla y categoría seleccionada
function actualizarVisualizacion(opcion) {
    const cards = document.querySelectorAll('.aranceles-card');
    const tables = document.querySelectorAll('.aranceles-table');
    const tableContainer = document.getElementById('aranceles-table-container');

    const esDesktop = window.innerWidth >= 1200;

    if (esDesktop) {
        tables.forEach(table => {
            const category = table.getAttribute('data-category');
            table.style.display = category === opcion ? 'table' : 'none';
        });
        tableContainer.style.display = 'block';

        cards.forEach(card => {
            card.style.display = 'none';
        });
    } else {
        cards.forEach(card => {
            const category = card.getAttribute('data-category');
            card.style.display = category === opcion ? 'grid' : 'none';
        });

        tables.forEach(table => {
            table.style.display = 'none';
        });

        tableContainer.style.display = 'none';
    }
}

// Iniciar filtro cuando carga la página
function filtrar() {
    const opcionDefault = document.getElementById('opcion-seleccionada').querySelector('p').textContent;
    actualizarVisualizacion(opcionDefault);
}

function manejarReajustePagina() {
    const currentOption = document.getElementById('opcion-seleccionada').querySelector('p').textContent;
    actualizarVisualizacion(currentOption);
}

// Ejecutar filtro cuando el DOM se carga
document.addEventListener('DOMContentLoaded', () => {
    filtrar();
    window.addEventListener('resize', manejarReajustePagina);
});