const responses = {
    "que es tdah": "El TDAH (Trastorno por Déficit de Atención con Hiperactividad) es una condición neurológica que afecta la atención, la impulsividad y la actividad motora.",
    "cual es mi derecho como estudiante": "Según las leyes nacionales e internacionales, tienes derecho a una educación inclusiva y accesible. Consulta la sección de Recursos para más información.",
    "como puedo obtener ayuda": "Puedes comunicarte con nosotros a través del formulario de contacto o explorar los recursos disponibles en esta plataforma.",
    "donde encuentro recursos": "En la sección de Recursos, encontrarás información sobre leyes, herramientas educativas y apoyo para estudiantes con TDAH.",
    "como contactarlos": "Visita la sección de Contacto para enviarnos un mensaje. Estaremos encantados de ayudarte.",
    "que es la dislexia": "La dislexia es un trastorno del aprendizaje que afecta la capacidad de leer, escribir y, en algunos casos, comprender textos.",
    "como mejorar la concentracion": "Puedes mejorar tu concentración estableciendo un ambiente libre de distracciones, usando técnicas de pomodoro y descansando adecuadamente.",
    "que es el autismo": "El autismo es un trastorno del desarrollo que afecta la comunicación y la interacción social. Se presenta en diferentes grados de severidad.",
    "que es la ansiedad": "La ansiedad es una respuesta natural del cuerpo ante el estrés, pero en niveles altos puede afectar la vida diaria y requerir apoyo profesional.",
    "como manejar el estres": "Para manejar el estrés, intenta técnicas de respiración, meditación, ejercicio físico y descanso adecuado.",
    "como mejorar la memoria": "Puedes mejorar tu memoria con técnicas de repetición, asociaciones mentales y una alimentación saludable rica en omega-3.",
    "que es el mindfulness": "El mindfulness es una práctica de atención plena que ayuda a reducir el estrés y mejorar la concentración y el bienestar emocional.",
    "como mejorar la autoestima": "Trabaja en la autoaceptación, rodéate de personas positivas y establece metas alcanzables para fortalecer tu autoestima.",
    "como hacer amigos": "Sé abierto, escucha activamente y participa en actividades grupales para conocer personas con intereses similares.",
    "como mejorar mi comunicacion": "Practica la escucha activa, usa un lenguaje claro y no temas expresar tus ideas con respeto y seguridad.",
    "que es la inteligencia emocional": "La inteligencia emocional es la capacidad de reconocer, comprender y gestionar tus emociones y las de los demás.",
    "como motivarme a estudiar": "Establece metas claras, usa técnicas de estudio activas y recompénsate por los logros alcanzados.",
    "como evitar la procrastinacion": "Usa la técnica Pomodoro, divide tareas grandes en pequeñas, y establece fechas límite realistas.",
    "que es la resiliencia": "La resiliencia es la capacidad de adaptarse y recuperarse ante situaciones difíciles o adversas.",
    "como mejorar mis habitos de estudio": "Crea un horario de estudio, elimina distracciones y toma descansos regulares para mejorar tu retención de información.",
    "como superar el miedo al fracaso": "Cambia tu perspectiva sobre el fracaso, aprende de los errores y enfócate en el crecimiento personal.",
    "que hacer si me siento triste": "Habla con alguien de confianza, realiza actividades que disfrutes y, si es necesario, busca apoyo profesional.",
    "como mejorar mi organizacion": "Usa listas de tareas, calendarios y establece prioridades para mejorar tu organización.",
    "que es la dislalia": "La dislalia es un trastorno del habla que afecta la pronunciación correcta de ciertos sonidos.",
    "como mejorar mi salud mental": "Cuida tu alimentación, duerme bien, haz ejercicio y mantén una red de apoyo emocional.",
    "como mejorar mi productividad": "Planifica tu día, usa técnicas como la matriz Eisenhower y evita distracciones.",
    "que es la empatía": "La empatía es la capacidad de ponerse en el lugar de los demás y comprender sus emociones y perspectivas.",
    "como aprender mas rapido": "Utiliza técnicas de aprendizaje activo, resúmenes visuales y práctica espaciada.",
    "que hacer si me siento ansioso": "Practica la respiración profunda, la meditación y realiza actividades relajantes como escuchar música o caminar.",
    "como desarrollar buenos habitos": "Empieza con pequeños cambios, sé constante y establece recordatorios para reforzar los hábitos positivos.",
    "como puedo ser mas creativo": "Explora nuevas experiencias, mantén la mente abierta y practica el pensamiento lateral.",
    "como puedo mejorar mi disciplina": "Establece rutinas, evita distracciones y mantén un compromiso contigo mismo para cumplir objetivos.",
    "como manejar el fracaso": "Ve el fracaso como una oportunidad de aprendizaje y enfócate en mejorar en lugar de rendirte.",
    "que es la neurodiversidad": "La neurodiversidad es el concepto de que las diferencias cerebrales, como el autismo y el TDAH, son variaciones naturales del funcionamiento humano.",
    "como ayudar a alguien con ansiedad": "Escucha sin juzgar, ofrece apoyo emocional y anímalo a buscar ayuda profesional si es necesario.",
    "que es el bullying": "El bullying es el acoso intencionado y repetido que puede ser físico, verbal o psicológico.",
    "como prevenir el bullying": "Fomentando el respeto, la empatía y promoviendo ambientes seguros y libres de violencia.",
    "como ser mas resiliente": "Acepta los cambios, cultiva una actitud positiva y desarrolla habilidades de afrontamiento emocional.",
    "como mejorar mi bienestar emocional": "Realiza actividades que te gusten, rodéate de personas positivas y practica el autocuidado.",
    "como manejar la frustracion": "Acepta la situación, identifica soluciones y practica técnicas de relajación para gestionar la frustración.",
    "que es la autoestima": "La autoestima es la valoración y percepción que tienes de ti mismo, basada en tus pensamientos y experiencias.",
    "como mejorar mi relacion con los demas": "Practica la empatía, la comunicación efectiva y muestra interés genuino en los demás.",
    "como evitar el estres academico": "Planifica tu tiempo, mantén un equilibrio entre estudio y descanso, y evita la procrastinación.",
    "que es la gratitud": "La gratitud es el hábito de reconocer y valorar las cosas positivas en la vida, lo que mejora el bienestar emocional.",
    "default": "Lo siento, no entiendo tu pregunta. Intenta reformularla o visita la sección de Recursos."
};



// Base de datos de respuestas locales


// Función para normalizar la entrada del usuario
function normalizeInput(input) {
    return input.toLowerCase().replace(/[^\w\s]/g, "").trim();
}

// Función para buscar coincidencias parciales
function getSuggestions(input) {
    const normalizedInput = normalizeInput(input);
    const suggestions = [];

    for (let key in responses) {
        if (normalizeInput(key).includes(normalizedInput)) {
            suggestions.push(key);
        }
    }

    return suggestions;
}

// Función para mostrar sugerencias
function showSuggestions(input) {
    const suggestionsDiv = document.getElementById("suggestions");
    const suggestions = getSuggestions(input);

    if (suggestions.length > 0) {
        suggestionsDiv.innerHTML = "";
        suggestions.forEach(suggestion => {
            const div = document.createElement("div");
            div.textContent = suggestion;
            div.style.cursor = "pointer";
            div.onclick = () => {
                document.getElementById("user-input").value = suggestion;
                suggestionsDiv.style.display = "none";
            };
            suggestionsDiv.appendChild(div);
        });
        suggestionsDiv.style.display = "block";
    } else {
        suggestionsDiv.style.display = "none";
    }
}

// Función para manejar la entrada del usuario
function handleUserInput() {
    const userInput = document.getElementById("user-input").value;
    const responseDiv = document.getElementById("chatbot-response");

    // Obtener la respuesta del chatbot
    const response = getBestMatch(userInput);

    // Mostrar la conversación en la interfaz
    responseDiv.innerHTML += `<p><strong>Tú:</strong> ${userInput}</p>`;
    responseDiv.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;

    // Limpiar el campo de entrada
    document.getElementById("user-input").value = "";
    document.getElementById("suggestions").style.display = "none";
}

// Función para buscar la mejor coincidencia en la base de datos local
function getBestMatch(input) {
    const normalizedInput = normalizeInput(input);
    let bestMatch = null;
    let highestScore = 0;

    for (let key in responses) {
        const normalizedKey = normalizeInput(key);
        const score = calculateMatchScore(normalizedInput, normalizedKey);

        if (score > highestScore) {
            highestScore = score;
            bestMatch = key;
        }
    }

    return bestMatch ? responses[bestMatch] : responses["default"];
}

// Función para calcular la puntuación de coincidencia
function calculateMatchScore(input, key) {
    const inputWords = input.split(" ");
    const keyWords = key.split(" ");
    let score = 0;

    inputWords.forEach(word => {
        if (keyWords.includes(word)) {
            score += 1;
        }
    });

    return score;
}

// Evento de entrada del usuario
document.getElementById("user-input").addEventListener("input", (event) => {
    const input = event.target.value;
    if (input.trim() === "") {
        document.getElementById("suggestions").style.display = "none";
    } else {
        showSuggestions(input);
    }
});