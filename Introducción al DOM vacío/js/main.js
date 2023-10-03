
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
fila2.forEach(c => {
    c.innerHTML=`<h2>${c.innerHTML}</h2>`;
});


////Cambiar texto de la última celda (id: f2c3), texto pedido al usuario.
let txt=prompt("txt: ");
celda=document.getElementById("f2c3");
celda.innerText=`${txt}`;

////Función para la pulsación del botón
const button=document.getElementById("boton");
const title=document.querySelector("h1");
//boton_click: añadir * en título
function boton_click() {
    title.innerText=title.innerHTML+"*";
}
//boton_click2: añadir - en título
function boton_click2() {
    
    title.innerText=title.innerHTML+"-";
}
//Asignación de función a la pulsación del botón (click, mousedown, mouseup)
button.click=boton_click();
button.onmousedown=boton_click2();
//Restauración del título al hacer clic en el mismo.


////Añadir nuevos elementos HTML al final de un elemento existente (id: ultimaFila)
//Crear una nueva fila div-row, con un elemento columna div-col (con bg-danger).

//Añadir al final del contenedor (container || container-fluid)


////Añadir nuevo elemento HTML junto a un elemento existente (antes de ultimaFila)
////element.insertAdjacentElement(position, element); //beforbegin, afterbegin, beforeend, afterend
//Crear una nueva fila div-row, con un elemento columna div-col (con bg-warning).

//Añadir antes del div con id ultimaFila
