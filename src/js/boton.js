// Seleccionar los formularios
const formMain = document.getElementById('contactForm'); // Formulario principal
const formFooter = document.getElementById('contactFormFooter'); // Formulario del footer
const successMessages = document.querySelectorAll('#submitSuccessMessage'); // Mensajes de éxito

// Función para limpiar y bloquear campos
function resetForm(form) {
    form.querySelectorAll('input, textarea').forEach(input => {
        input.value = ''; // Limpia el contenido
        input.setAttribute('readonly', true); // Bloquea los campos
    });

    // Ocultar el mensaje de éxito asociado
    const successMessage = form.querySelector('#submitSuccessMessage');
    if (successMessage && !successMessage.classList.contains('d-none')) {
        successMessage.classList.add('d-none');
    }

    console.log(`Formulario ${form.id} limpiado y campos bloqueados`);
}

// Función para habilitar un campo al hacer clic
function enableField(event) {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        event.target.removeAttribute('readonly'); // Habilita el campo
        console.log(`Campo ${event.target.id} habilitado`);
    }
}

// Función para manejar el envío del formulario
function submitForm(event) {
    event.preventDefault(); // Evitar el envío real
    const form = event.target; // Identificar el formulario que se envió
    const successMessage = form.querySelector('#submitSuccessMessage');
    if (successMessage) {
        successMessage.classList.remove('d-none'); // Mostrar mensaje de éxito
    }
    console.log(`Formulario ${form.id} enviado correctamente`);
}

// Inicializar eventos
document.addEventListener('DOMContentLoaded', () => {
    [formMain, formFooter].forEach(form => {
        if (form) {
            // Inicialmente bloquear los campos
            resetForm(form);

            // Evento de clic en el formulario para habilitar campos
            form.addEventListener('click', enableField);

            // Evento de envío del formulario
            form.addEventListener('submit', submitForm);
        }
    });
});
