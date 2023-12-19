// etiquetas
let mensaje=document.getElementById('divMensaje')
let etqZonaJuego=document.getElementById("zonaJuego")

let usuario=document.getElementById("login");
let password=document.getElementById("password");
let botonConsultar=document.getElementById("botonConsultar")
let botonCerrarSesion=document.getElementById("botonCerrarSesion")
let nuevoJuego=document.getElementById("nuevoJuego")

let intento=document.getElementById("intentos");
let siguiente=document.getElementById("siguiente");

let ordenValores = ['A','2','3','4','5','6','7','8','9','J','Q','K'];
//preparaciones iniciales
generarCartas();
etqZonaJuego.hidden=true;
mensaje.hidden=true;

//Cargar datos desde localStorage (Parte 2 y parate 3)
if (localStorage.getItem("player")) {
    login();
}
if (localStorage.getItem("enJuego")) {
    cargar();
}

//Asignar event listener de cartas
for (let index = 0; index < 12; index++) {
    document.getElementById("carta"+index).addEventListener("click",()=>girar(index));   
}


//Event listener de botones
botonConsultar.addEventListener("click",consultar);
botonCerrarSesion.addEventListener("click",cerrar);
nuevoJuego.addEventListener("click",resetJuego)