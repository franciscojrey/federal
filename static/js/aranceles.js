function arancelesDropdown() {
    const dropdown = document.getElementById('dropdown-options');
    const arrow = document.getElementById('selector-arrow');

    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

    arrow.textContent = dropdown.style.display === 'block' ? 'v' : '>';
}

function elegirOpcion(option) {
    const selected = document.getElementById('selected-option');

    selected.querySelector('p').textContent = option;

    const dropdown = document.getElementById('dropdown-options');
    dropdown.style.display === 'none';

    const arrow = document.getElementById('selector-arrow');
    arrow.textContent = '>';

    const dropdownContent = `
        ${option !== 'Renta variable' ? `<div class="selector-option" onclick="elegirOpcion('Renta variable')">Renta variable</div>` : ''}
        ${option !== 'Renta fija' ? `<div class="selector-option" onclick="elegirOpcion('Renta fija')">Renta fija</div>` : ''}
        ${option !== 'Gastos administrativos' ? `<div class="selector-option" onclick="elegirOpcion('Gastos administrativos')">Gastos administrativos</div>` : ''}
    `;
    dropdown.innerHTML = dropdownContent;

   // Show/Hide cards based on the selected option
   const cards = document.querySelectorAll('.aranceles-card');
   cards.forEach(card => {
       const category = card.getAttribute('data-category');
       if (category === option) {
           card.style.display = 'grid';
       } else {
           card.style.display = 'none';
       }
   });
}

// Function to filter cards based on the selected category
function filterCards(option) {
    const cards = document.querySelectorAll('.aranceles-card');
    cards.forEach(card => {
        const category = card.getAttribute('data-category');
        card.style.display = category === option ? 'grid' : 'none';
    });
}


// Function to initialize the filtering when the page loads
function initializeFilter() {
    const defaultOption = document.getElementById('selected-option').querySelector('p').textContent;
    filterCards(defaultOption);
}

// Run initializeFilter on page load
document.addEventListener('DOMContentLoaded', initializeFilter);