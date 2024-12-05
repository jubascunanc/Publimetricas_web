// Seleccionar el botón
const themeToggle = document.getElementById('theme-toggle');

// Verificar si hay un tema guardado
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  

// Cambiar el icono según el tema
themeToggle.querySelector('.icon').textContent =
  currentTheme === 'dark' ? '🌞' : '🌙';

// Alternar temas al hacer clic
themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme');
  const newTheme = theme === 'dark' ? 'light' : 'dark';

  // Cambiar el tema y guardar en localStorage
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  // Cambiar el icono
  themeToggle.querySelector('.icon').textContent =
    newTheme === 'dark' ? '🌞' : '🌙';
});
