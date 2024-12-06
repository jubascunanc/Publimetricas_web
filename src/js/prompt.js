// Frase que queremos mostrar
const text = "Transformamos ideas en soluciones con el poder de la Inteligencia Artificial.";

// Elemento donde se escribe el texto
const descriptionElement = document.querySelector('.agency-description');

let index = 0;

function typeText() {
  if (index < text.length) {
    // Añade la siguiente letra al contenido del texto
    descriptionElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 50); // Velocidad de escritura (50ms por carácter)
  }
}

// Inicia la animación
typeText();
