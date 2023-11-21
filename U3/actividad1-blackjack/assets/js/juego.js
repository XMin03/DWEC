(()=>{
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */
function barajaCompleta(){
    //obtiene el mazo compleato
    mazo=[];
    let numero=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let letra=["C","D","H","S"];
    numero.forEach(n=>letra.forEach(l=>mazo.push(n+l)));
}
function barajar(){
    mazo=_.shuffle(mazo);
}
//resetAll
function newGame() {
    // Verificar si hay victorias almacenadas en localStorage
    if (localStorage.getItem('victoriasJugador')) {
        victoriasJugador = parseInt(localStorage.getItem('victoriasJugador'));
        victoriasComputadora = parseInt(localStorage.getItem('victoriasComputadora'));
    }
    //rellenar el mazo
    barajaCompleta();
    barajar();
    //limpiar las dos zonas
    zonaPC.replaceChildren();
    zonaUsuario.replaceChildren();
    //resetear puntos
    puntoUsuario.innerText=0;
    puntoPC.innerText=0;
    //reabilita los botones
    pedir.disabled=false;
    detener.disabled=false;
    window.addEventListener('beforeunload', cancel);
}
function sacar(zona,punto) {
    //obtener el valor de carta
    let c=mazo.shift();
    //pintar la carta
    pintarCarta(c, zona);
    //actualiza los puntos
    actualizarPunto(c,punto);
}
function pintarCarta(c, zona){
    let carta=document.createElement("img");
    carta.classList.add("carta");
    carta.src="assets/cartas/"+c+".png";
    zona.append(carta);
}
function actualizarPunto(c,punto) {
    //obtiene el numero
    let p=c.slice(0,c.length-1);
    p=p=="A"?11:p>="J"?10:p;
    punto.innerText=parseInt(punto.innerText)+parseInt(p);
}
function sacarUsuario() {
    sacar(zonaUsuario,puntoUsuario);
    //boom
    if (puntoUsuario.innerText>21) {
        stop();
    }
}
function sacarPC() {
    sacar(zonaPC,puntoPC);
    //si el usuario ya ha hecho boom, hace solo una vez
    if (puntoUsuario.innerText>21) {
        return;
    }
    //si no es mayor que el usuario y pc no ha hecho boom sigue.(minimo un parseInt que si no compara como si fueran Strings)
    if (parseInt(puntoPC.innerText)<=parseInt(puntoUsuario.innerText) && puntoPC.innerText<21) {
        //esperar a que se dibuje la carta.
        setTimeout(sacarPC,100);
    }
}
function stop(){
    //desabilitar botones
    pedir.disabled=true;
    detener.disabled=true;
    //turno de pc
    sacarPC();
    //esperar a que se dibujen las cartas, y mostrar el resultado.
    setTimeout(gameOver,500);
}
function gameOver(){
    if (puntoPC.innerText > 21) {
        alert("You win.");
        victoriasJugador++;
    } else if (puntoPC.innerText == puntoUsuario.innerText) {
        alert("Draw.");
    } else {
        alert("You lose.");
        victoriasComputadora++;
    }
    localStorage.setItem('victoriasJugador', victoriasJugador);
    localStorage.setItem('victoriasComputadora', victoriasComputadora);
    window.removeEventListener('beforeunload', cancel);
}
function cancel() {
    victoriasComputadora++;
    localStorage.setItem('victoriasComputadora', victoriasComputadora);
}
//el mazo
var mazo=[];
//botones
const nuevo=document.querySelector("#btnNuevo");
const pedir=document.querySelector("#btnPedir");
const detener=document.querySelector("#btnDetener");

//donde se ponen las cartas
const zonaUsuario=document.querySelector("#jugador-cartas");
const zonaPC=document.querySelector("#computadora-cartas");

//el elemento donde están los puntos
const puntos=document.querySelectorAll("small")
const puntoUsuario=puntos[0];
const puntoPC=puntos[1];
let victoriasJugador = 0;
let victoriasComputadora = 0;

newGame();
//eventListener
nuevo.addEventListener('click',newGame);
pedir.addEventListener('click',sacarUsuario);
detener.addEventListener('click',stop);
})()
