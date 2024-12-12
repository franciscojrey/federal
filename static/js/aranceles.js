// Visibilidad del dropdown y dirección de la flecha
function arancelesDropdown() {
    const dropdown = document.getElementById('dropdown-options');
    const arrow = document.getElementById('selector-arrow');

    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

    arrow.textContent = dropdown.style.display === 'block' ? 'v' : '>';
}

// Seleccionar opción del dropdown
function elegirOpcion(option) {
    const selected = document.getElementById('selected-option'); // Get the selected option container

    // Update the displayed selected option text
    selected.querySelector('p').textContent = option;

    const dropdown = document.getElementById('dropdown-options'); // Get the dropdown menu element
    dropdown.style.display = 'none'; // Close the dropdown menu

    const arrow = document.getElementById('selector-arrow'); // Get the arrow element
    arrow.textContent = '>'; // Reset the arrow to the closed state

    // Dynamically rebuild the dropdown options, excluding the selected one
    const dropdownContent = `
        ${option !== 'Renta variable' ? `<div class="selector-option" onclick="elegirOpcion('Renta variable')">Renta variable</div>` : ''}
        ${option !== 'Renta fija' ? `<div class="selector-option" onclick="elegirOpcion('Renta fija')">Renta fija</div>` : ''}
        ${option !== 'Gastos administrativos' ? `<div class="selector-option" onclick="elegirOpcion('Gastos administrativos')">Gastos administrativos</div>` : ''}
    `;
    dropdown.innerHTML = dropdownContent; // Update the dropdown menu with the new options

    // Update the displayed content (cards or tables) based on the selected option
    updateDisplay(option);

    arancelesDropdown()
}

// Actualizar visualización según tamaño de la pantalla y categoría seleccionada
function updateDisplay(option) {
    const cards = document.querySelectorAll('.aranceles-card');
    const tables = document.querySelectorAll('.aranceles-table');
    const tableContainer = document.getElementById('aranceles-table-container');

    const isDesktop = window.innerWidth >= 769;

    if (isDesktop) {
        tables.forEach(table => {
            const category = table.getAttribute('data-category');
            table.style.display = category === option ? 'table' : 'none';
        });
        tableContainer.style.display = 'block';

        cards.forEach(card => {
            card.style.display = 'none';
        });
    } else {
        cards.forEach(card => {
            const category = card.getAttribute('data-category');
            card.style.display = category === option ? 'grid' : 'none';
        });

        tables.forEach(table => {
            table.style.display = 'none';
        });

        tableContainer.style.display = 'none';
    }
}

// Iniciar filtro cuando carga la página
function initializeFilter() {
    const defaultOption = document.getElementById('selected-option').querySelector('p').textContent; // Get the default selected option
    updateDisplay(defaultOption); // Update the display based on the default option
}

// Manejar reajuste del tamaño de la página
function handleResize() {
    const currentOption = document.getElementById('selected-option').querySelector('p').textContent; // Get the currently selected option
    updateDisplay(currentOption); // Reapply the display logic based on screen size
}

// Ejecutar initializeFilter cuando el DOM se carga
document.addEventListener('DOMContentLoaded', () => {
    initializeFilter();
    window.addEventListener('resize', handleResize); // Add a resize event listener
});