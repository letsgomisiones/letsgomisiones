document.addEventListener('DOMContentLoaded', function () {
    const splash = document.getElementById('splash');
    const closeBtn = document.getElementById('close-splash');
    const images = document.querySelectorAll('.carousel-img');
    let index = 0;

    function showNextImage() {
        images[index].classList.remove('active');
        index = (index + 1) % images.length;
        images[index].classList.add('active');
    }

    setInterval(showNextImage, 4000); // Cambia imagen cada 3 segundos

    closeBtn.addEventListener('click', function () {
        splash.style.display = 'none';
    });
});
