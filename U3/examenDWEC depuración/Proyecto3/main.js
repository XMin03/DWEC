//En las casillas deben ponerse con el texto: "Valor asignado"
let num = 1;
while(num <= 3)
{
    const casilla = document.getElementById("casilla" + num++);
    casilla.innerText="Valor asignado";
}
/*let num = 0;
while(num <= 3)
{
    const casilla = document.getElementById("casilla" + num++);
    casilla.innerText("Valor asignado");
}*/