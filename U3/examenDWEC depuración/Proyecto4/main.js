//Debe mostrar en las casillas: dos, tres, uno.

const lista = ['uno', 'dos', 'tres'];

let indice = 1;
lista.sort();
for(let item of lista){
    document.getElementById('casilla' + indice++).innerText = item;
    //document.getElementById('casilla' + indice).innerText = item;
}