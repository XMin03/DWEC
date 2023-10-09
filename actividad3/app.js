//ej1
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
    let num1=pedirNumero();
    let num2=pedirNumero();
    let img=document.querySelector("img");
    document.querySelector("div div:nth-child(1)").innerHTML=num1;
    document.querySelector("div div:nth-child(2)").innerHTML=num2;
    document.querySelector("div div:nth-child(3)").innerHTML=num1+" es mayor que "+num2;
    img.src=(icons[(num1==num2?2:(num1>num2?0:1))]);
    img.height=50;
}
const icons=[
    "https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png",
"https://image.similarpng.com/very-thumbnail/2020/11/Red-incorrect-icon-design-on-transparent-background-PNG.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Equal_icon.svg/48px-Equal_icon.svg.png?20190916112734"];

let boton=document.querySelector("#ej1");
boton.addEventListener("click",click);

//ej2
let boton2=document.querySelector("#ej2");
boton2.addEventListener("click",click);