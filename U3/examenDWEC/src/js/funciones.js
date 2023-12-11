function comparar(a, b) { return a - b; }
function generar() {
    let arr=[];
    for (let index = 1; index <= 90; index++) {
        arr.push(index);
    }
    arr=_.shuffle(arr)
    return arr;
}
function nuevaCarta() {
    enJuego.sacada=[];
    enJuego.premiada=[];
    document.getElementById("resultado").innerHTML="";
    document.getElementById("jugando").innerHTML="";
    let copia=generar();
    enJuego.carta=[];
    for (let index = 0; index < 24; index++) {
        enJuego.carta.push(copia.shift());
    }
    enJuego.carta=enJuego.carta.sort(comparar);
    for (let index = 0; index < 24; index++) {
        let square=document.getElementById("square"+index);
        square.innerText=enJuego.carta[index];
        square.classList.remove("bg-info","text-white")
    }
    localStorage.setItem("enJuego.carta",JSON.stringify(enJuego.carta));
}
function sacar() {
    //let indice = 1;
    let interval;
    let jugando=document.getElementById("jugando");
    window.addEventListener('beforeunload', guardar);
    interval = setInterval(() => {
        
        //aqui irían todas mis instrucciones
        //en este caso puse un console.log
        let bola=enJuego.arr.shift();
        jugando.innerHTML=bola;
        enJuego.sacada.push(bola);
        let pos=enJuego.carta.indexOf(bola);
        if (pos!=-1) {
            enJuego.premiada.push(bola)
            let square=document.getElementById("square"+pos);
            square.classList.add("bg-info","text-white")
            if (enJuego.premiada.length==5) {
                clearInterval(interval);
                let jugador=JSON.parse(localStorage.getItem("jugador"));
                jugador.resultado.push(enJuego.sacada.length);
                localStorage.setItem("jugador",JSON.stringify(jugador));
                let resultado=document.getElementById("resultado");
                resultado.innerHTML="Se han sacado "+enJuego.sacada.length+" bolas, y las bolas premiadas son "+enJuego.premiada.toString();
                window.removeEventListener('beforeunload', guardar);
            }
        }
        /* nunca va a llegar
        //sumo una ejecución al indice y verifico
        //si ya no hay que seguir repitiendo la ejecución
        indice += 1;
        if (indice >= 90) {
            clearInterval(interval);
        }*/
    }, 1000);
}
function consulta() {
    let jugadores=obtenerJugadores();
    jugadores.then(datas=>{
        datas.forEach(data => {
            if (usuario.value==data.nombre && contraseña.value==data.passwd) {
                localStorage.setItem("jugador",JSON.stringify(data));
                login();
            }
        });
    })
}
function login() {
    let jugador=JSON.parse(localStorage.getItem("jugador"));
    document.getElementById("saludo").innerHTML="<h1>"+jugador.nombre+"</h1>"
    cerrar.classList.remove("invisible")
    consultar.classList.add("invisible")
    usuario.classList.add("invisible");
    contraseña.classList.add("invisible")
    pedir.disabled=false;
    empezar.disabled=false;

}
function cerrado() {
    localStorage.removeItem("jugador");
    document.getElementById("saludo").innerHTML=""
    consultar.classList.remove("invisible")
    usuario.classList.remove("invisible")
    contraseña.classList.remove("invisible")
    cerrar.classList.add("invisible")
    pedir.disabled=true;
    empezar.disabled=true;
}
function guardar() {
    localStorage.setItem("enJuego",JSON.stringify(enJuego))
}