var esMobile = window.innerWidth < 769;

function manejarReajustePagina() {
    esMobile = window.innerWidth < 769;
}

window.addEventListener('resize', manejarReajustePagina);

let cardSeleccionadaIndex = 1;
const totalCards = 3;

// Funcion para mostrar la card seleccionada
function mostrarCard(cardIndex) {
    if (esMobile) {
        cardSeleccionadaIndex = cardIndex; // Update current card index

        const cards = document.querySelectorAll('.abrir-cuenta-card');
        const puntos = document.querySelectorAll('.abrir-cuenta-punto');
    
        // Hide all cards and remove 'activo' class from puntos
        cards.forEach(card => card.classList.remove('activo'));
        puntos.forEach(punto => punto.classList.remove('activo'));
    
        // Show the selected card and highlight the punto
        document.getElementById(`abrir-cuenta-card-${cardIndex}`).classList.add('activo');
        puntos[cardIndex - 1].classList.add('activo');
    }
}

// Swipe derecha izq funcionalidad 
let swipeInicio = 0;
let swipeFin = 0;

const cardContainer = document.getElementById('abrir-cuenta-container');

cardContainer.addEventListener('touchstart', (e) => {
    swipeInicio = e.touches[0].clientX; // Guardo la posición de inicio del swipe
});

cardContainer.addEventListener('touchend', (e) => {
    swipeFin = e.changedTouches[0].clientX; // Guardo la posición de fin del swipe
    swipe();
});

function swipe() {
    if (esMobile) {
        const swipeMínimo = 50; // Distancia mínima a recorrer para ejecutar el swipe
        if (swipeFin < swipeInicio - swipeMínimo) {
            // Swipe hacia la izquierda
            cardSeleccionadaIndex = cardSeleccionadaIndex < totalCards ? cardSeleccionadaIndex + 1 : 1;
        } else if (swipeFin > swipeInicio + swipeMínimo) {
            // Swipe hacia la derecha
            cardSeleccionadaIndex = cardSeleccionadaIndex > 1 ? cardSeleccionadaIndex - 1 : totalCards;
        }
        mostrarCard(cardSeleccionadaIndex);
    }
}

// Mostrar Card al cargar el contenido por primera vez
document.addEventListener('DOMContentLoaded', () => mostrarCard(cardSeleccionadaIndex));
