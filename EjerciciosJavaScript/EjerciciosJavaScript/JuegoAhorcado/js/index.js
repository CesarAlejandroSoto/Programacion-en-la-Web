/* Desarrollar un código en javascript que permita jugar al ahorcado. 
El usuario debe adivinar una palabra de 5 letras.
El usuario tiene 6 oportunidades para adivinar la palabra.
Si el usuario adivina la palabra, se muestra un mensaje de felicitaciones.
Si el usuario se queda sin oportunidades, se muestra un mensaje de derrota.
El usuario puede jugar de nuevo.
*/
let listaPalabras = ["perro", "gato", "raton", "luz", "salto"];
let palabraSecreta;
let intentosRestantes = 6;
let letrasUsadas = [];

document.getElementById("jugar").disabled = false;
document.getElementById("validar").disabled = true;
document.getElementById("reiniciar").disabled = true;

// Función para mostrar la palabra con los aciertos del usuario
function obtenerPalabra() {
    let palabra = "";
    for (let letra of palabraSecreta) {
        if (letrasUsadas.includes(letra)) {
            palabra += letra + " ";
        } else {
            palabra += "_ ";
        }
    }
    return palabra;
}

// Función para iniciar el juego
function jugar() {
    intentosRestantes = 6;
    letrasUsadas = [];
    palabraSecreta = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];

    document.getElementById("intentosRestantes").textContent = intentosRestantes;
    document.getElementById("letrasUsadas").textContent = letrasUsadas.join(", ");
    document.getElementById("palabra").textContent = obtenerPalabra();

    document.getElementById("jugar").disabled = true;
    document.getElementById("validar").disabled = false;
    document.getElementById("reiniciar").disabled = false;
}   

// Función para validar la letra ingresada por el usuario
function validarLetra() {
    let letra = document.getElementById("letra").value.toLowerCase();

    // Verificar si la letra ya fue usada
    if (letrasUsadas.includes(letra)) {
        alert("La letra ya ha sido usada.");
        return;
    }

    // Agregar la letra a la lista de letras usadas
    letrasUsadas.push(letra);

    // Verificar si la letra está en la palabra secreta
    if (palabraSecreta.includes(letra)) {
        document.getElementById("palabra").textContent = obtenerPalabra();
    } else {
        intentosRestantes--;
    }

    // Actualizar la interfaz con los intentos restantes y las letras usadas
    document.getElementById("intentosRestantes").textContent = intentosRestantes;
    document.getElementById("letrasUsadas").textContent = letrasUsadas.join(", ");

    // Verificar si el usuario ha ganado o perdido
    if (!document.getElementById("palabra").textContent.includes("_")) {
        alert("¡Felicidades! Has adivinado la palabra.");
        document.getElementById("validar").disabled = true;
        document.getElementById("jugar").disabled = false;
    } else if (intentosRestantes === 0) {
        alert(`¡Perdiste! La palabra era: ${palabraSecreta}`);
        document.getElementById("validar").disabled = true;
        document.getElementById("jugar").disabled = false;
    }
}

// Función para reiniciar el juego
function reiniciar() {
    document.getElementById("letra").value = "";
    document.getElementById("palabra").textContent = "";
    document.getElementById("intentosRestantes").textContent = "";
    document.getElementById("letrasUsadas").textContent = "";
    document.getElementById("jugar").disabled = false;
    document.getElementById("validar").disabled = true;
    document.getElementById("reiniciar").disabled = true;
}

// Eventos de botones
document.getElementById("jugar").addEventListener("click", jugar);
document.getElementById("validar").addEventListener("click", validarLetra);
document.getElementById("reiniciar").addEventListener("click", reiniciar);
