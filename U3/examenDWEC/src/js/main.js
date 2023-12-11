
//Código que se pude utilizar en la función de empezar a jugar (llevarla a funciones.js)

//Variables globales (etiquetas y demás)
enJuego.arr=generar();
enJuego.carta=[];
//Inicialización de bototes
let pedir=document.getElementById("botonPedirCarta");
let empezar=document.getElementById("start");
let consultar=document.getElementById("botonConsultar");
let cerrar=document.getElementById("botonCerrarSesion");
let saludo=document.getElementById("saludo");
let usuario=document.getElementById("usuario");
let contraseña=document.getElementById("passwd");

//Configuración de eventos (eventListeners)
pedir.addEventListener("click",nuevaCarta)
empezar.addEventListener("click",sacar)
consultar.addEventListener("click",consulta)
cerrar.addEventListener("click",cerrado)


//Comprobación localStorage
//  1. Información de jugador (parte 2)
if (localStorage.getItem("jugador")!=null) {
    login();
}else{
    cerrado();
}
//  2. Información de partida en juego (parte 3)
if (localStorage.getItem("enJuego")!=null) {
    enJuego_reset();
}