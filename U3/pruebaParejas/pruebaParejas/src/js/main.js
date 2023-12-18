const obtenerJugadores = () => {
    let url="http://localhost:3000/jugador";

    return fetch(url).then(resp => resp.json())

}
let jugador = {
    id: 0,
    nombre: "",
    resultado: [],
};
let enJuego={
    mazo:[],
    cartaGirada:[],
    intento:0
}
baraja();
let intentos=document.getElementById("intentos");

let consultar=document.getElementById("botonConsultar");
let cerrar=document.getElementById("botonCerrarSesion");
let usuario=document.getElementById("usuario");
let contraseña=document.getElementById("passwd");

consultar.addEventListener("click",consulta)
cerrar.addEventListener("click",cerrado)

if (localStorage.getItem("jugador")!=null) {
    login();
}else{
    cerrado();
}

window.addEventListener("beforeunload",guardar)
if (localStorage.getItem("enJuego")) {
    cargar();
}