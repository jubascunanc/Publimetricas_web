// Seleccionar el botón
const backToTopButton = document.getElementById('backToTop');

// Mostrar el botón al hacer scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Aparece después de 300px
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll suave al inicio
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
