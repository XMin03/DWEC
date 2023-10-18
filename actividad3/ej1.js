//pide un numero mayor igual de 1.
function pedirNumero(){
    let num=parseInt(prompt("Num(1..*): "));
    if (isNaN(num))
        alert("Introduce un número.")
    else if(num<1)
        alert("Fuera de rango.")
    else
        return num;
    return pedirNumero()
}
function click(){
    //pide dos numero
    let num1=pedirNumero();
    let num2=pedirNumero();
    //obtiene la img
    let img=document.querySelector("img");

    //inner html
    document.querySelector(".col:nth-child(1)").innerHTML=num1;
    document.querySelector(".col:nth-child(2)").innerHTML=num2;
    document.querySelector(".col:nth-child(3)").innerHTML=num1+" es mayor que "+num2;
    img.src=(icons[(num1==num2?2:(num1>num2?0:1))]);
    //redimensionar la img
    img.height=50;
}

//lista de los iconos
const icons=[
    "https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png",
"https://image.similarpng.com/very-thumbnail/2020/11/Red-incorrect-icon-design-on-transparent-background-PNG.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Equal_icon.svg/48px-Equal_icon.svg.png?20190916112734"];
//boton y su evento
let boton=document.querySelector("button");
boton.addEventListener("click",click);