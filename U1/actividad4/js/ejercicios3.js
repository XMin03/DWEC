function mover_ultimo() {
    //obtener el primer DIV.COL que está dentro de DIV#lista,
    let col = document.querySelector("div#lista div.col")
    //añadiéndole la clase“bg-primary”.
    col.classList.add("bg-primary");
    //mover el al final del mismo DIV#lista,
    document.querySelector("div#lista").append(col);
}

function copiar() {
    //obtener fila destino
    let copia = document.querySelector("div#copia");
    //copiar(clonar) todo lo que hay dentro de #original en copia
    document.querySelectorAll("div#original div.col").forEach(element => {
        element = element.cloneNode(true);
        copia.append(element);
    });
}

function ordenar() {
    //obtener la fila
    let ordenar = document.querySelector("div#ordenar");
    //ordenar los hijos de esa fila
    Array.from(ordenar.children)
        .sort((x, y) => {
            return x.innerText.localeCompare(y.innerText)
        })
        .forEach(element => {
            //reemplazar
            ordenar.append(element)
        });
}

function duplicar_y_ordenar() {
    //obtener la fila destino
    let ordenado = document.querySelector("div#ordenado");
    //ordenar la lista
    Array.from(document.querySelectorAll("div#desordenado div.col"))
        .sort((x, y) => {
            return x.innerText.localeCompare(y.innerText)
        })
        .forEach(element => {
            //duplicar
            element = element.cloneNode(true);
            ordenado.append(element)
        });
}

//llamadas
mover_ultimo();
copiar();
ordenar();
duplicar_y_ordenar();