document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('cookie-banner');
    const btn = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        banner.style.display = 'flex';
    }

    btn.addEventListener('click', function () {
        localStorage.setItem('cookiesAccepted', 'true');
        banner.style.display = 'none';
    });
});