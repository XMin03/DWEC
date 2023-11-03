function pedirNumero(mensaje,desde, hasta) {
    let num=parseInt(prompt(mensaje+"("+desde+"~"+hasta+")"));
    if (isNaN(num))
        alert("Introduce un número.")
    else if(desde > num|| hasta < num)
        alert("Fuera de rango.")
    else
        return num;
    return pedirNumero(mensaje,desde, hasta)
}

//Ejercicio1
let actividad1=[1,2,3];
//Ejercicio2
actividad1.push(4);
//Ejercicio3
let longitud = actividad1.unshift(5);
//Ejercicio4
alert("4) "+actividad1+" longitud:"+longitud);
//Ejercicio5
//los arrays se cuentan desde 1 en los alert, los prompt, y se arregla después.
let pos=pedirNumero("Desde donde se quiere eliminar: ",1,actividad1.length)-1;
let num=pedirNumero("Cuantas se quiere eliminar: ",0,actividad1.length-pos);
actividad1.splice(pos,num);;
alert("5)"+actividad1);
//Ejercicio6
//si está vacío salta esa parte
if (actividad1.length==0) {
    alert("Arreglo vacío.")
}else{
    //preguntar hasta que es un número
    do {
        num=parseInt(prompt("6) Índice: "));
    } while (isNaN(num));
    //buscar
    pos=actividad1.indexOf(num);
    //si no encuentra da un mensaje si no lo dice.
    alert(pos==-1?"Not Found.":"Se ha encontrado en la posición "+(pos+1))
}
//Ejercicio7
alert("7) "+actividad1+" longitud:"+actividad1.length);
//Ejercicio8
actividad1.reverse();
alert("8) Reverse: "+actividad1);
actividad1.pop();
alert("8) pop: "+actividad1);
//Ejercicio9
alert("9) "+actividad1.sort());
//Ejercicio10
//sort no hace falta ya que se ha ordenado ya
alert("10) "+actividad1.sort().reverse());
//Ejercicio11
let copia=_.shuffle(actividad1);
alert("11) Ordered: "+actividad1.sort()+" Shuffle: "+copia);