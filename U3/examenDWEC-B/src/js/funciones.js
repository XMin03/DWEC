function generarCartas(){
    let palo = ['H', 'C', 'D', 'S'];
    let cartasOrdenadas = []; //poner las cartas con el palo en orden.
    palo=_.shuffle(palo);
    ordenValores.forEach(c => {
        cartasOrdenadas.push(c+palo[0])
    });
    enJuego.cartas = _.shuffle(cartasOrdenadas); //aquí desordenar cuando ya funcione.
}
function resetCarta() {
    for (let index = 0; index < 12; index++) {
        document.getElementById("carta"+index).src="assets/img/cartas/red_back.png"
    }
}
function girar(index) {
    let carta=document.getElementById("carta"+index);
    if (!carta.src.includes("red")) {
        return;
    }
    carta.src="assets/img/cartas/"+enJuego.cartas[index]+".png";
    if (enJuego.cartas[index].charAt(0)==enJuego.siguiente) {
        enJuego.siguiente=enJuego.siguiente=='K'?'A':ordenValores[ordenValores.indexOf(enJuego.siguiente)+1];
        enJuego.acertadas++;
        conprobarFinJuego();
        siguiente.innerHTML=enJuego.siguiente;
    }else{
        setTimeout(()=>{
            alert("Failed, try again.")
            fallo();
        },100)
        enJuego.intentos++;
        intento.innerHTML=enJuego.intentos;
    }
}
function conprobarFinJuego() {
    if (enJuego.acertadas==12) {
        player.resultado.push(enJuego.intentos);
        localStorage.setItem("player",JSON.stringify(player));
        setTimeout(()=>{
            alert("You win.")
            resetJuego();
            intento.innerHTML=enJuego.intentos;
        },200)
    }
}
function resetJuego() {
    enJuego_reset();
    resetCarta();
    showMessage();
}
function showMessage() {
    intento.innerHTML=enJuego.intentos;
    siguiente.innerHTML=enJuego.siguiente;
}
function fallo() {
    resetCarta();
    enJuego.siguiente= 'A';
    siguiente.innerHTML=enJuego.siguiente;
    enJuego.acertadas= 0;
}
function consultar() {
    fetch("http://localhost:3000/players").then(resp=>{
        if (resp.status==200) {
            resp.json().then(players=>players.forEach(p=>{
                if (usuario.value==p.nombre && password.value==p.passwd) {
                    cargar_player(p.id,p.nombre,p.resultado);
                    localStorage.setItem("player",JSON.stringify(player));
                    login();
                    return;
                }
            }))
        }
    })
}
function login() {
    window.addEventListener("beforeunload",guardar)
    player=JSON.parse(localStorage.getItem("player"))
    document.getElementById("nombre_usuario").innerHTML=player.nombre;
    toggle();
    etqZonaJuego.hidden=false;
}
function cerrar() {
    window.removeEventListener("beforeunload",guardar)
    localStorage.removeItem("enJuego");
    resetJuego();
    localStorage.removeItem("player")
    document.getElementById("nombre_usuario").innerHTML="";
    toggle();
    etqZonaJuego.hidden=true;
}
function toggle() {
    usuario.classList.toggle("invisible");
    password.classList.toggle("invisible");
    botonConsultar.classList.toggle("invisible");
    botonCerrarSesion.classList.toggle("invisible");
}
function guardar() {
    localStorage.setItem("enJuego",JSON.stringify(enJuego));
}
function cargar() {
    enJuego=JSON.parse(localStorage.getItem("enJuego"));
    let hasta=ordenValores.indexOf(enJuego.siguiente);
    for (const index in enJuego.cartas) {
        let val=enJuego.cartas[index]
        let pos=ordenValores.indexOf(val.charAt(0))
        if (pos<hasta) {
            document.getElementById("carta"+index).src="assets/img/cartas/"+val+".png";
        }
    }
    showMessage();
}