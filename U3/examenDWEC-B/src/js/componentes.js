
let player = {
    id: 0,
    nombre: "",
    resultado: [],
};

function cargar_player(id, nombre, resultado) {
    player.id = id;
    player.nombre = nombre;
    player.resultado = resultado;
}

let enJuego = {
    cartas: [],
    intentos: 1,
    siguiente: 'A',
    acertadas: 0
}

function enJuego_reset() {
    // Reinicializar las propiedades a valores por defecto.
    generarCartas();
    enJuego.intentos= 1;
    enJuego.siguiente= 'A';
    enJuego.acertadas= 0;
}