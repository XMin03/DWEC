function baraja() {
    let numero=["2","3","4","5","6","7","8","9","10","J","Q","K"];
    let letra=["C","D","H","S"];
    numero.forEach(n => {
        letra.forEach(l => {
            enJuego.mazo.push(n+l);
        });
    });
    enJuego.mazo=_.shuffle(enJuego.mazo);
    enJuego.mazo=enJuego.mazo.slice(0,6);
    enJuego.mazo.forEach(c=>enJuego.mazo.push(c));
    enJuego.mazo=_.shuffle(enJuego.mazo);
}
function girar(index) {
    let carta=document.getElementById("carta"+index);
    if (!carta.classList.contains("girada")) {
        carta.src="assets/img/cartas/"+enJuego.mazo[index]+".png";
        carta.classList.add("girada");
        enJuego.cartaGirada.push(index);
        if (enJuego.cartaGirada.length%2==0) {
            setTimeout(()=>{
                let indexCartaAnterior=enJuego.cartaGirada[enJuego.cartaGirada.length-2];
                if (enJuego.mazo[indexCartaAnterior]!=enJuego.mazo[index]) {
                    let cartaAnterior=document.getElementById("carta"+indexCartaAnterior);
                    carta.src="assets/img/cartas/red_back.png"
                    cartaAnterior.src="assets/img/cartas/red_back.png"
                    carta.classList.remove("girada");
                    cartaAnterior.classList.remove("girada");
                    enJuego.cartaGirada.pop();
                    enJuego.cartaGirada.pop();
                    enJuego.intento++;
                    intentos.innerHTML=enJuego.intento;
                }
            },200);
        }
    }
    if (enJuego.cartaGirada.length==12) {
        window.removeEventListener("beforeunload",guardar)
    }
}
function guardar() {
    localStorage.setItem("enJuego",JSON.stringify(enJuego))
}
function cargar() {
    enJuego=JSON.parse(localStorage.getItem("enJuego"));
    localStorage.removeItem("enJuego")
    intentos.innerHTML=enJuego.intento;
    enJuego.cartaGirada.forEach(i=>{
        let carta=document.getElementById("carta"+i);
        carta.classList.add("girada");
        carta.src="assets/img/cartas/"+enJuego.mazo[i]+".png";
    })
}