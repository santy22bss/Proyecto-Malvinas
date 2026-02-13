document.addEventListener('DOMContentLoaded', () => {
    // Menu Hamburguesa
    const ham = document.querySelector('.ham');
    const enlaces = document.querySelector('.enlaces-menu');
    const barras = document.querySelectorAll('.ham span');

    if (ham) {
        ham.addEventListener('click', () => {
            enlaces.classList.toggle('activado');
            barras.forEach(child => { child.classList.toggle('animado') });
        });
    }

    // Botón Scroll Top
    const scrollBtn = document.getElementById('scroll');

    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollBtn.style.display = 'flex'; // Changed to flex for centering arrow
            } else {
                scrollBtn.style.display = 'none';
            }
        });

        scrollBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
