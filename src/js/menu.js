// Resaltar la sección activa
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Scroll suave para enlaces internos
const internalLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

internalLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});
