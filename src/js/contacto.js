// Seleccionar el botón por su clase y contenido específico
const loginButton = document.querySelector('.dropdown-item[href="#login"]');

// Asegúrate de que el botón fue encontrado antes de asignarle el evento
if (loginButton) {
    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Evita la acción predeterminada
        
        alert('¡Redirigiendo al inicio de sesión!'); // Mensaje para el usuario
        
        // Redirigir al enlace correspondiente
        window.location.href = '#login';
    });
} else {
    console.error('No se encontró el botón Login con la clase .dropdown-item');
}
