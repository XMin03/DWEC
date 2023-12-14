//Al pulsar el botón, la casilla3 cambia el texto de "Sin pulsar" a "Botón pulsado"
const boton = document.getElementById('pulsame');

function mostrarAviso(texto) {
    casilla3.innerText = texto;
}
boton.addEventListener('click', ()=>mostrarAviso('Botón pulsado'));
//boton.addEventListener('click', mostrarAviso('Botón pulsado'));
