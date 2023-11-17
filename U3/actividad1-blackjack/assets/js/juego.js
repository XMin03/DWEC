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
    alert(puntoPC.innerText>21?"You win.":puntoPC.innerText==puntoUsuario.innerText?"Draw.":"You lose");
    /* Este if, se puede ahorrar. es posible que explote solo una de las dos.
    if (puntoUsuario.innerText>21) {
        alert("You lose.")
    }else if (puntoPC.innerText>21) {
        alert("You win.")
    //si las dos tienen 21 empate.
    }else if (puntoPC.innerText==puntoUsuario.innerText) {
        alert("Draw.")
    }else{
    //Si no el PC seguramente tendrá más puntos sin explotar.
        alert("You lose.")
    }*/
}
//el mazo
var mazo=[];
//botones
let nuevo=document.querySelector("#btnNuevo");
let pedir=document.querySelector("#btnPedir");
let detener=document.querySelector("#btnDetener");

//donde se ponen las cartas
var zonaUsuario=document.querySelector("#jugador-cartas");
var zonaPC=document.querySelector("#computadora-cartas");

//el elemento donde están los puntos
let puntos=document.querySelectorAll("small")
var puntoUsuario=puntos[0];
var puntoPC=puntos[1];
newGame();
//eventListener
nuevo.addEventListener('click',newGame);
pedir.addEventListener('click',sacarUsuario);
detener.addEventListener('click',stop);