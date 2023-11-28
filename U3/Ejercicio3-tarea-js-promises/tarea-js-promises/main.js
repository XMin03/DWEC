const url="http://localhost:3000/peliculas/"
let enlaces=document.querySelectorAll("a");
enlaces.forEach(a=>a.addEventListener("click",buscar));
function buscar() {
    console.log(this.innerText)
}
let listado=document.querySelector("ul");
listado.innerHTML="";
fetch(url).then((resp)=>resp.json().then(datas=>{datas.forEach(data=>{
    let li=document.createElement("li")
    let a=document.createElement("a")
    a.innerHTML=data.nombre;
    a.href="#";
    li.append(a);
    listado.append(li);
})
})).catch(err=>console.log(err));