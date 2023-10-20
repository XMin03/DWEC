function click1() {
    //title
    let titulo=document.createElement("h2");
    titulo.innerHTML="Días de la semana";
    replace(dias,titulo)
}
function click2() {
    //title
    let titulo=document.createElement("h2");
    titulo.innerHTML="Meses del año";
    replace(meses,titulo)
}
function replace(arr,title) {
    let lista=document.querySelector("#lista");
    let desplegable=document.querySelector("#desplegable");
    //clean
    lista.replaceChildren()
    desplegable.replaceChildren()
    //title
    lista.append(title)
    //names
    arr.forEach(d => {
        let e=document.createElement("div");
        e.classList.add("col-12")
        e.innerHTML=`${d}`;
        lista.append(e)
        e=document.createElement("option");
        e.innerHTML=`${d}`;
        desplegable.append(e)
    });
}
let dias=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
let meses=["Enero","Febrero","Marzo","Mayo","Abril","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let dia=document.querySelector("#dias");
let mes=document.querySelector("#meses");
dia.addEventListener("click",click1);
mes.addEventListener("click",click2);
