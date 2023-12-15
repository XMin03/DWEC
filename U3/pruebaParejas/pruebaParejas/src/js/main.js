let enJuego={
    mazo:[],
    cartaGirada:[],
    intento:0
}
baraja();
let intentos=document.getElementById("intentos");
for (let index = 0; index < 12; index++) {
    document.getElementById("carta"+index).addEventListener("click",()=>girar(index));   
}
window.addEventListener("beforeunload",guardar)
if (!!localStorage.getItem("enJuego")) {
    cargar();
}