const url="http://localhost:3000/peliculas/"
let director=document.getElementById("director")
let clasificacion=document.getElementById("clasificacion")
let cartel=document.querySelector("#cartel img")
let estrella=document.getElementsByClassName("estrellas")[0];

let listado=document.querySelector("ul");
listado.innerHTML="";
fetch(url).then((resp)=>resp.json().then(datas=>{datas.forEach(data=>{
    let li=document.createElement("li")
    let a=document.createElement("a")
    a.innerHTML=data.nombre;
    a.href="#";
    a.setAttribute("id",data.id);
    li.append(a);
    a.addEventListener("click",buscar);
    listado.append(li);
})
})).catch(err=>console.log(err));

function buscar() {
    cartel.src="assets/imgs/loading.gif";
    fetchSlow(url+this.id).then(resp=>resp.json()).then(data=>{
        director.innerHTML=data.director;
        clasificacion.innerHTML=data.clasificacion;
        estrella.innerHTML="";
        for (let index = 0; index < data.valoracion; index++) {
            estrella.innerHTML+="<i class='fa fa-star'></i>";
        }
        cartel.src="assets/imgs/"+data.cartel;
    })
}