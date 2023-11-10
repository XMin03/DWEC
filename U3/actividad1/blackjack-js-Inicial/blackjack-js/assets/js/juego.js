/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */
function barajaCompleta(){
    mazo=[];
    const link="assets/cartas/"
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
function newGame() {
    //rellenar el mazo
    barajaCompleta();
    //limpiar las dos zonas
    zone=document.querySelector("#computadora-cartas")
    zone.replaceChildren();
    //dejar el jugador de carta por defecto
    zone=document.querySelector("#jugador-cartas")
    zone.replaceChildren();
    pedir.classList.remove("invalid")
}
function sacar(){
    if (mazo.length!=0) {
        let carta=document.createElement("img");
        carta.classList.add("carta");
        carta.src=mazo.pop();
        zone.append(carta);
    }else{
        alert("Mazo vacío")
    }
}
function stop(){
    pedir.classList.add("invalid")
}
var mazo=[];
let nuevo=document.querySelector("#btnNuevo");
let pedir=document.querySelector("#btnPedir");
let detener=document.querySelector("#btnDetener");

//ese dirá donde se insertan las cartas.
var zone=document.querySelector("#jugador-cartas");
newGame();
nuevo.addEventListener('click',newGame);
pedir.addEventListener('click',sacar);
detener.addEventListener('click',stop);