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
    enJuego.arr=generar();
    document.getElementById("resultado").innerHTML="";
    document.getElementById("jugando").innerHTML="";
    enJuego.carta=generar().slice(0,24).sort(comparar);
    for (const index in enJuego.carta) {
        let square=document.getElementById("square"+index);
        square.innerText=enJuego.carta[index];
        square.classList.remove("bg-info","text-white")
    }
}
function sacar() {
    pedir.disabled=true;
    empezar.disabled=true;
    let interval;
    let jugando=document.getElementById("jugando");
    window.addEventListener('beforeunload', guardar);
    interval = setInterval(() => {
        let bola=enJuego.arr.shift();
        console.log(enJuego.arr)
        jugando.innerHTML=bola;
        enJuego.sacada.push(bola);
        let pos=enJuego.carta.indexOf(bola);
        if (pos!=-1) {
            enJuego.premiada.push(bola)
            document.getElementById("square"+pos).classList.add("bg-info","text-white");
            
            if (enJuego.premiada.length==5) {
                clearInterval(interval);
                let jugador=JSON.parse(localStorage.getItem("jugador"));
                jugador.resultado.push(enJuego.sacada.length);
                localStorage.setItem("jugador",JSON.stringify(jugador));

                let res="Se han sacado "+enJuego.sacada.length+" bolas, y las bolas premiadas son "+enJuego.premiada.toString();
                document.getElementById("resultado").innerHTML=res;
                
                window.removeEventListener('beforeunload', guardar);
                empezar.disabled=false;
                pedir.disabled=false;
            }
        }
    }, 1000);
}
function consulta() {
    obtenerJugadores().then(datas=>{
        datas.forEach(data => {
            if (usuario.value==data.nombre && contraseña.value==data.passwd) {
                localStorage.setItem("jugador",JSON.stringify(data));
                login();
                return;
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
function guardar() {localStorage.setItem("enJuego",JSON.stringify(enJuego))}