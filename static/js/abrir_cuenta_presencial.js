function elegirOpcion(option) {

    const juridica = document.getElementById('documentacion-juridica');
    const fisica = document.getElementById('documentacion-fisica');

    const isDesktop = window.innerWidth >= 769;

    if(isDesktop){
        fisica.style.display = 'block';
        juridica.style.display = 'block';
    } else {
        if (option === "fisica") {
            fisica.style.display = 'none';
            juridica.style.display = 'block';
        } else {
            fisica.style.display = 'block';
            juridica.style.display = 'none';
        }
    }
}

function filtrar() {
    elegirOpcion("juridica");
}

document.addEventListener('DOMContentLoaded', () => {
    filtrar();
    window.addEventListener('resize', filtrar);
});