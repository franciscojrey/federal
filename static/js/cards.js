let currentCardIndex = 1; // Start at Card 1
const totalCards = 3; // Total number of cards

// Function to show the specified card
function showCard(cardIndex) {
    currentCardIndex = cardIndex; // Update current card index

    const cards = document.querySelectorAll('.card');
    const dots = document.querySelectorAll('.dot');

    // Hide all cards and remove 'active' class from dots
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Show the selected card and highlight the dot
    document.getElementById(`card-${cardIndex}`).classList.add('active');
    dots[cardIndex - 1].classList.add('active');
}

// Swipe gesture functionality
let touchStartX = 0;
let touchEndX = 0;

const cardContainer = document.getElementById('card-container');

cardContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX; // Record the starting X position
});

cardContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX; // Record the ending X position
    handleSwipe(); // Check the swipe direction
});

function handleSwipe() {
    const swipeThreshold = 50; // Minimum swipe distance to trigger an action
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipe Left: Show next card
        currentCardIndex = currentCardIndex < totalCards ? currentCardIndex + 1 : 1;
    } else if (touchEndX > touchStartX + swipeThreshold) {
        // Swipe Right: Show previous card
        currentCardIndex = currentCardIndex > 1 ? currentCardIndex - 1 : totalCards;
    }
    showCard(currentCardIndex);
}

// Initialize the first card on page load
document.addEventListener('DOMContentLoaded', () => showCard(currentCardIndex));