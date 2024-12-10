function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function toggleDropdown(event) {
    event.stopPropagation();
    const parent = event.currentTarget;
    parent.classList.toggle('open');
}