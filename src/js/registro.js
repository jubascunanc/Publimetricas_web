// Objeto temporal para almacenar datos de ambos formularios
const tempClientData = [];

// Seleccionar ambos formularios
const formMain = document.getElementById('contactForm');
const formFooter = document.getElementById('contactFormFooter');

// Función para manejar el envío de un formulario
const handleFormSubmit = (form, event) => {
    event.preventDefault(); // Evitar el envío real

    // Captura los valores de los campos
    const nameField = form.querySelector('input[type="text"]') || { value: 'Sin Nombre' };
    const emailField = form.querySelector('input[type="email"]');

    const name = nameField.value.trim() || 'Sin Nombre';
    const email = emailField.value.trim();

    if (email) {
        // Almacena los datos temporalmente
        const clientData = {
            formId: form.id, // Identifica de qué formulario provienen los datos
            name,
            email,
        };

        tempClientData.push(clientData); // Guarda en el array temporal

        // Muestra los datos en la consola
        console.log(`Datos guardados del formulario ${form.id}:`);
        console.table(clientData);

        // Limpia el formulario
        form.reset();
    } else {
        alert('Por favor, ingresa un correo válido.');
    }
};

// Asignar eventos a ambos formularios si existen
if (formMain) {
    formMain.addEventListener('submit', (event) => handleFormSubmit(formMain, event));
}

if (formFooter) {
    formFooter.addEventListener('submit', (event) => handleFormSubmit(formFooter, event));
}
