//pedir numeros y obtener la cantidad de numeros validas y total.
function click(){
    let cont=0;
    let tot=0;
    let num;
    do {
        num=parseInt(prompt("Num(negativo para salir): "));
    if (isNaN(num)){
        alert("Introduce un número.")
    }else if (num>=0) {
        cont++;
        tot+=num;
    }
    } while (num>=0 || isNaN(num));
    //lista del contenido de las columnas y evitar que aparezca 0/0
    let arr=["Suma: ",tot,"Media: ",cont==0?0:tot/cont]
    let row=document.createElement("div");
    row.classList.add("row");
    for (let index = 0; index < 4; index++) {
        let col=document.createElement("div");
        col.classList.add("col");
        col.innerHTML=arr[index];
        row.append(col);
    }
    document.querySelector("body").append(row);
}
//boton y su evento
let boton=document.querySelector("button");
boton.addEventListener("click",click);