
////Modificar DIV primera celda (id: f1c1)
let celda = document.getElementById("f1c1");
celda.innerText="Primera celda";

// asignar innerText que incluya etiquetas HTML
celda.innerText="<b>Primera celda</b>";

////Modifivar DIV segunda celda (id: f1c2)
celda = document.getElementById("f1c2");
celda.innerText="Segunda celda";
// asignar innerHTML que incluya etiquetas HTML
celda.innerHTML="<b>Segunda celda</b>";
////Modificar DIV tercera celda (id: f1c3) asignando estilo CSS (color y fontsize)
celda = document.querySelector("#f1c3");
celda.style.color="red";
celda.style.fontSize="2em";
////Modificar imagen (https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text.png)
const img=document.querySelector("img");
img.src="https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text.png";
img.width="200";
img.alt="Logo de JavaScript"
////Aumentar texto de la fila 2 (todos los div dentro de fila2) usando $
const fila2=document.querySelectorAll("div#fila2>div.col");
fila2.forEach(c => c.innerHTML=`<h2>${c.innerHTML}</h2>`);
            //opcion 2 using fila1
const fila1=document.querySelector("#fila1");
for (const celda of fila1.children) {
    celda.innerHTML=`<h3>${celda.innerHTML}</h3>`;
}
////Cambiar texto de la última celda (id: f2c3), texto pedido al usuario.
let txt=prompt("txt: ");
celda=document.getElementById("f2c3");
celda.innerText=`${txt}`;


////Función para la pulsación del botón
const button=document.getElementById("boton");
const title=document.querySelector("h1");
//boton_click: añadir * en título
function boton_click() {
    title.innerHTML="*"+title.innerHTML+"*";
}
//boton_click2: añadir - en título
function boton_click2() {
    title.innerHTML="-"+title.innerHTML+"-";
}
//Asignación de función a la pulsación del botón (click, mousedown, mouseup)
button.addEventListener('mousedown',boton_click);
button.addEventListener('mouseup',boton_click2);
//Restauración del título al hacer clic en el mismo.
title.addEventListener('click',()=>title.innerHTML='Manejo del <span style="color:red">DOM</span>');
////Añadir nuevos elementos HTML al final de un elemento existente (id: ultimaFila)
let nuevoElemento=document.createElement('div');
nuevoElemento.innerHTML="Ultimo"
document.querySelector("body").append(nuevoElemento);
//Crear una nueva fila div-row, con un elemento columna div-col (con bg-danger).
const nuevaFila=document.createElement('div');
nuevaFila.id="ultimaFila";
nuevaFila.className="row";
const nuevaColumna=document.createElement('div');
nuevaColumna.className="col bg-danger";
nuevaColumna.innerHTML="ultima fila";
nuevaFila.append(nuevaColumna);
//Añadir al final del contenedor (container || container-fluid)
document.querySelector(".container-fluid").append(nuevaFila);
////Añadir nuevo elemento HTML junto a un elemento existente (antes de ultimaFila)
nuevoElemento=document.createElement('div');
nuevoElemento.innerHTML="penultimo"
nuevaFila.insertAdjacentElement("beforebegin",nuevoElemento)
////element.insertAdjacentElement(position, element); //beforbegin, afterbegin, beforeend, afterend
//Crear una nueva fila div-row, con un elemento columna div-col (con bg-warning).
const nuevaFila=document.createElement('div');
nuevaFila.id="ultimaFila";
nuevaFila.className="row";
const nuevaColumna=document.createElement('div');
nuevaColumna.className="col bg-warning";
nuevaColumna.innerHTML="ultima fila";
nuevaFila.append(nuevaColumna);
//Añadir antes del div con id ultimaFila
nuevaFila.insertAdjacentElement("beforebegin",nuevaColumna)