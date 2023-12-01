const url="http://localhost:3000/"
let director=document.getElementById("director")
let clasificacion=document.getElementById("clasificacion")
let cartel=document.querySelector("#cartel img")
let estrella=document.getElementsByClassName("estrellas")[0];

let listado=document.querySelector("ul");
listado.innerHTML="";
fetch(url+"peliculas").then(resp=>resp.json().then(datas=>{datas.forEach(data=>{
    if (resp.status==200) {
    let li=document.createElement("li")
    let a=document.createElement("a")
    a.innerHTML=data.nombre;
    a.href="#";
    a.setAttribute("id",data.id);
    li.append(a);
    a.addEventListener("click",buscar);//yo pondria todos los datos usando data, asi no hace falta el fetch
    listado.append(li);
    }else{
        console.log(resp.status);
    }
})
})).catch(err=>console.log(err));

function buscar() {
    cartel.src="assets/imgs/loading.gif";
    fetchSlow(url+"pelicula/"+this.id).then(resp=>resp.json().then(data=>{
        if (resp.status==200) {
            director.innerHTML=data.director;
            fetch(url+"clasificaciones/"+data.clasificacion).then(r=>r.json().then(d=>{
                clasificacion.innerHTML=d.nombre
            }));
            estrella.innerHTML="<i class='fa fa-star'></i>".repeat(data.valoracion);
            cartel.src="assets/imgs/"+data.cartel;    
        }else{
            console.log(resp.status);
        }
    })).catch(err=>console.log("error"));
}
let a=3;