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
            let indexCartaAnterior=enJuego.cartaGirada[enJuego.cartaGirada.length-2];
            if (enJuego.mazo[indexCartaAnterior]!=enJuego.mazo[index]) {
                let cartaAnterior=document.getElementById("carta"+indexCartaAnterior);
                setTimeout(()=>{
                    reset(carta);
                    reset(cartaAnterior);
                },200);
                enJuego.cartaGirada.pop();
                enJuego.cartaGirada.pop();
                enJuego.intento++;
                intentos.innerHTML=enJuego.intento;
            }
        }
    }
    if (enJuego.cartaGirada.length==12) {
        jugador=JSON.parse(localStorage.getItem("jugador"));
        jugador.resultado.push(enJuego.intento);
        localStorage.setItem("jugador",JSON.stringify(jugador));
        window.removeEventListener("beforeunload",guardar)

    }
}
function reset(c){
    c.src="assets/img/cartas/red_back.png";
    c.classList.remove("girada");
}
function consulta() {
    obtenerJugadores().then(datas=>{
        datas.forEach(data => {
            if (usuario.value==data.nombre && contraseña.value==data.passwd) {
                jugador.id=data.id;
                jugador.nombre=data.nombre;
                jugador.resultado=data.resultado
                localStorage.setItem("jugador",JSON.stringify(jugador));
                login();
                return;
            }
        });
    })
}
function login() {
    for (let index = 0; index < 12; index++) {
        document.getElementById("carta"+index).addEventListener("click",()=>girar(index));   
    }
    jugador=JSON.parse(localStorage.getItem("jugador"));
    document.getElementById("saludo").innerHTML="<h1>"+jugador.nombre+"</h1>"
    cerrar.classList.remove("invisible")
    consultar.classList.add("invisible")
    usuario.classList.add("invisible");
    contraseña.classList.add("invisible")
}
function cerrado() {
    localStorage.removeItem("jugador");
    document.getElementById("saludo").innerHTML=""
    consultar.classList.remove("invisible")
    usuario.classList.remove("invisible")
    contraseña.classList.remove("invisible")
    cerrar.classList.add("invisible")
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