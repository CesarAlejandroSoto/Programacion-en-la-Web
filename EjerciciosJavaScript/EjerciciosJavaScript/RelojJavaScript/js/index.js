/* Ejercicio una función que permite mostrar el reloj
en el elemento HTML con id="reloj" al presionar el botón con id="mostrar" */
function reloj() {
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    if (horas < 10) {
        horas = "0" + horas;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    document.getElementById("reloj").innerText = horas + ":" + minutos + ":" + segundos;
    setTimeout("reloj()", 1000);

}

document.getElementById("mostrar").addEventListener("click", reloj);

