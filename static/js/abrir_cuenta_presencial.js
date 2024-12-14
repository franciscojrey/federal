function elegirOpcion(opcion) {

    const juridica = document.getElementById('documentacion-juridica');
    const fisica = document.getElementById('documentacion-fisica');

    const esDesktop = window.innerWidth >= 769;

    if(esDesktop){
        fisica.style.display = 'block';
        juridica.style.display = 'block';
    } else {
        if (opcion === "fisica") {
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