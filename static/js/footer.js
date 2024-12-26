// Cargar footer cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });
});