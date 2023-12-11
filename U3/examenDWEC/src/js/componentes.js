
let jugador = {
    id: 0,
    nombre: "",
    resultado: [],
};

function jugador_cargar(id, nombre, resultado) {
    jugador.id = id;
    jugador.nombre = nombre;
    jugador.resultado = resultado;
}

let enJuego = {
    // Incluir la información necesaria a guardar para reanudar la partida
    // en caso de interrupción por cierre de la página web.
    sacada:[],
    premiada:[],
    carta:[],
    arr:[]
}

function enJuego_reset() {
    enJuego=JSON.parse(localStorage.getItem("enJuego"));
    localStorage.removeItem("enJuego")
    // Reinicializar las propiedades a valores por defecto.
    for (let index = 0; index < enJuego.carta.length; index++) {
        let square=document.getElementById("square"+index);
        square.innerText=enJuego.carta[index];
    }
    enJuego.premiada.forEach(element => {
        let pos=enJuego.carta.indexOf(element);
        let square=document.getElementById("square"+pos);
        square.classList.add("bg-info","text-white")
    });
}