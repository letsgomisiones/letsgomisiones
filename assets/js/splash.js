document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById('splash');
    const contenido = document.getElementById('contenido-principal');
    const imagenes = document.querySelectorAll('.carousel-img');

    let index = 0;
    const duracion = 2000;

    function mostrarCarrusel() {
        imagenes.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        index = (index + 1) % imagenes.length;
    }

    let interval = setInterval(mostrarCarrusel, duracion);
    setTimeout(() => {
        clearInterval(interval);
        splash.style.display = 'close-splash';
        contenido.style.display = 'block';
    }, imagenes.length * duracion);
});
