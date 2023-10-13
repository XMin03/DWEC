//primera vez
click();
//pedir numeros y obtener la cantidad de numeros validas y total.
function click(){
    //crea la fila
    let row=document.createElement("div");
    row.classList.add("row");
    document.querySelector("body").append(row);
    //prepara lo necesario
    //en el enunciado no vi que pide la lista de numeros introducidos, pero un compi me ha dicho que si, entonces lo he puesto.
    let txt="Lista de numeros: ";
    let cont=0;
    let tot=0;
    let num;

    //pide los numeros hasta negativo
    do {
        num=parseInt(prompt("Num(negativo para salir): "));
    if (isNaN(num)){
        alert("Introduce un número.")
    }else if (num>=0) {
        //hace lo que tiene que hacer cuando no es negativo
        txt+=num+" ";
        cont++;
        tot+=num;
    }
    } while (num>=0 || isNaN(num));

    //lista del contenido de las columnas y evitar que aparezca 0/0
    let arr=[txt,"Suma: "+tot,"Media: "+(cont==0?0:tot/cont)]
    //crea las columnas con el contenido del arr
    for (let index = 0; index < arr.length; index++) {
        let col=document.createElement("div");
        col.classList.add("col");
        col.innerHTML=arr[index];
        row.append(col);
    }
}
//boton y su evento
let boton=document.querySelector("button");
boton.addEventListener("click",click);