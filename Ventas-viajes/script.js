import { barcelona, roma, paris, londres } from "./ciudades.js";

// Obtener los elementos del DOM

let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");

// Agregar un event listener al botón para el cálculo
document.getElementById("calcularBtn").addEventListener('click', function () {

    // Obtener la ciudad seleccionada
    let selectedCity = document.querySelector("a.active").textContent;

    // Obtener el número de personas desde la caja de entrada
    let numeroPersonas = parseInt(document.getElementById("numeroPersonas").value);

    // Obtener el objeto de la ciudad correspondiente
    let contenido = obtenerContenido(selectedCity);

    // Realizar el cálculo (ejemplo: multiplicar el número de personas por una propiedad del objeto de la ciudad)
    let resultado = numeroPersonas * contenido.costo;

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = `Costo total para ${numeroPersonas} personas: $${resultado}`;
});

/// Agregar un evento click a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        //REMOVER EL ACTIVO
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        // AGREGAR ACTIVE AL QUE CORRESPONDA
        this.classList.add('active');

        /// TRAER INFORMACIÓN DEL OBJETO CORRESPONDIENTE A LA ELECCIÓN
        let contenido = obtenerContenido(this.textContent);

        /// MOSTRAR EL CONTENIDO EN EL DOM
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    });

});

/// FUNCION PARA TRAER INFORMACIÓN CORRECTA DESDE CIUDADES.JS

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
};
