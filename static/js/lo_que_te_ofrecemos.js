var esMobile = window.innerWidth < 1200;

let intervaloSwipeAutomatico;

function iniciarSwipeAutomatico (){
    intervaloSwipeAutomatico = setInterval(() => {
        cambiarSector('derecha');
    }, 3000);
}

function manejarReajustePagina() {
    esMobile = window.innerWidth < 1200;
}

window.addEventListener('resize', manejarReajustePagina);

let cardSeleccionadaIndex = 1;
const totalCards = 6;

// Funcion para mostrar la card seleccionada
function mostrarCard(cardIndex) {
    if (esMobile) {
        cardSeleccionadaIndex = cardIndex; // Update current card index

        const cards = document.querySelectorAll('.servicios-inversion-card');
        const puntos = document.querySelectorAll('.servicios-inversion-punto');
    
        // Hide all cards and remove 'activo' class from puntos
        cards.forEach(card => card.classList.remove('activo'));
        puntos.forEach(punto => punto.classList.remove('activo'));
    
        // Show the selected card and highlight the punto
        document.getElementById(`servicios-inversion-card-${cardIndex}`).classList.add('activo');
        puntos[cardIndex - 1].classList.add('activo');
    }
}

// Swipe derecha izq funcionalidad 
let swipeInicio = 0;
let swipeFin = 0;

const cardContainer = document.getElementById('servicios-inversion-container');

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

function cambiarSector(direccion) {
    const sectores = document.querySelectorAll('.operar-sectores-sector');
    const sectoresArray = Array.from(sectores);
    const activoIndex = sectoresArray.findIndex(sector => sector.classList.contains('sector-activo'));

    sectoresArray[activoIndex].classList.remove('sector-activo');

    const totalSectores = sectoresArray.length;
    let nuevoIndex;
    if (direccion === 'derecha') {
        nuevoIndex = (activoIndex + 1) % totalSectores;
    } else {
        nuevoIndex = (activoIndex - 1 + totalSectores) % totalSectores;
    }

    sectoresArray[nuevoIndex].classList.add('sector-activo');
}


document.addEventListener('DOMContentLoaded', () => {   
    iniciarSwipeAutomatico();
});