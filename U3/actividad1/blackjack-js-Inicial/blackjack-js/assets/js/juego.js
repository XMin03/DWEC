/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */
function barajaCompleta(){
    const link="assets/cartas/"
    //obtiene el mazo compleato
    mazo=[];
    let numero=["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    let letra=["C","D","H","S"]
    for (let i = 0; i < numero.length; i++) {
        for (let j = 0; j < letra.length; j++) {
            mazo.push(link+numero[i]+letra[j]+".png")
        }
    }
    barajar();
}
function barajar(){
    mazo=_.shuffle(mazo);
}
//resetAll
function newGame() {
    //rellenar el mazo
    barajaCompleta();
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
function sacar(){
    //aunque nunca va a pasar
    if (mazo.length!=0) {
        //obtiene la carta
        let carta=document.createElement("img");
        carta.classList.add("carta");
        carta.src=mazo.shift();
        zonaUsuario.append(carta);
        //actualiza los puntos
        let p=obtenerPunto(carta);
        puntoUsuario.innerText=parseInt(puntoUsuario.innerText)+parseInt(p);
        //boom
        if (puntoUsuario.innerText>21) {
            stop();
        }
    }else{
        alert("Mazo vacío")
    }
}
function obtenerPunto(carta) {
    let c=carta.src
    if (c.length>0) {
        //obtiene el numero
        let p=c.slice(c.lastIndexOf("/")+1,c.lastIndexOf(".")-1);
        if (p<=10) {
            p=p;
        }else if(p=="A"){
            p=11;
        }else{
            p=10;
        }
        return p;
    }else{
        alert("Error obtenerPunto")
        return 0;
    }
}
function stop(){
    //desabilitar
    pedir.disabled=true;
    detener.disabled=true;
    //turno de pc
    sacarPC();
    //esperar a que se dibujen las cartas.
    setTimeout(gameOver,100);
}
function sacarPC() {
    //aunque nunca va a pasar
    if (mazo.length!=0) {
        //obtener la carta
        let carta=document.createElement("img");
        carta.classList.add("carta");
        carta.src=mazo.shift();
        zonaPC.append(carta);
        //calcular los puntos
        let p=obtenerPunto(carta);
        puntoPC.innerText=parseInt(puntoPC.innerText)+parseInt(p);
        //si el usuario ya ha hecho boom, hace solo una vez
        if (puntoUsuario.innerText>21) {
            return;
        }
        //si no es mayor que el usuario y pc sigue.(sin parseInt alguna vez da fallo, que no sigue)
        if (parseInt(puntoPC.innerText)<=parseInt(puntoUsuario.innerText) && puntoPC.innerText<21) {
            sacarPC();
        }
    }else{
        alert("Mazo vacío")
    }
}
function gameOver(){
    //solo va a explotar una de las dos.
    if (puntoUsuario.innerText>21) {
        alert("You lose.")
    }else if (puntoPC.innerText>21) {
        alert("You win.")
    }else if (puntoPC.innerText==puntoUsuario.innerText) {
        //si las dos tienen 21 empate.
        alert("Draw.")
    }else{
        //Si no el PC seguramente tendrá más puntos y hemos perdido.
        alert("You lose.")
    }
}
//direccion de donde estan las imagenes
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
pedir.addEventListener('click',sacar);
detener.addEventListener('click',stop);