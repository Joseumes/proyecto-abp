const responses = {
    "que es tdah": "El TDAH (Trastorno por Déficit de Atención con Hiperactividad) es una condición neurológica que afecta la atención, la impulsividad y la actividad motora.",
    "cual es mi derecho como estudiante": "Según las leyes nacionales e internacionales, tienes derecho a una educación inclusiva y accesible. Consulta la sección de Recursos para más información.",
    "como puedo obtener ayuda": "Puedes comunicarte con nosotros a través del formulario de contacto o explorar los recursos disponibles en esta plataforma.",
    "donde encuentro recursos": "En la sección de Recursos, encontrarás información sobre leyes, herramientas educativas y apoyo para estudiantes con TDAH.",
    "como contactarlos": "Visita la sección de Contacto para enviarnos un mensaje. Estaremos encantados de ayudarte.",
    "default": "Lo siento, no entiendo tu pregunta. Intenta reformularla o visita la sección de Recursos."
};

function normalizeInput(input) {
    return input.toLowerCase().replace(/[^\w\s]/g, "").trim();
}

function handleUserInput() {
    const userInput = document.getElementById("user-input").value;
    const normalizedInput = normalizeInput(userInput);
    const responseDiv = document.getElementById("chatbot-response");

    const response = responses[normalizedInput] || responses["default"];
    responseDiv.innerHTML += `<p><strong>Tú:</strong> ${userInput}</p>`;
    responseDiv.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;

    // Limpiar el campo de entrada
    document.getElementById("user-input").value = "";
}