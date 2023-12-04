const url="http://localhost:3000/"
let director=document.getElementById("director")
let clasificacion=document.getElementById("clasificacion")
let cartel=document.querySelector("#cartel img")
let estrella=document.getElementsByClassName("estrellas")[0];

let listado=document.querySelector("ul");

fetch(url+"peliculas").then(resp=>{
    //si hay respuestas
    if(resp.status==200){
        //vaciar
        listado.innerHTML="";
        //obtener la lista
        resp.json().then(datas=>{datas.forEach(data=>{
            //crear los elementos
            let li=document.createElement("li")
            let a=document.createElement("a")
            //datos
            a.innerHTML=data.nombre;
            //enlaces
            a.href="#";
            //almacenar la id
            a.setAttribute("id",data.id);
            //evento
            a.addEventListener("click",buscar);
            //appends
            li.append(a);
            listado.append(li);
        })})
    }else{
        //si no no hace nada
        console.log(resp.status);
    }
    //caso de error
}).catch(err=>console.log(err));

function buscar() {
    //cargando
    cartel.src="assets/imgs/loading.gif";
    //fetch
    fetchSlow(url+"pelicula/"+this.id).then(resp=>{
        //si hay respuestar
        if (resp.status==200) {
            //obtener
            resp.json().then(data=>{
                //reemplazar los datos
                director.innerHTML=data.director;
                estrella.innerHTML="<i class='fa fa-star'></i>".repeat(data.valoracion);
                cartel.src="assets/imgs/"+data.cartel;
                //calificacion
                fetch(url+"clasificaciones/"+data.clasificacion).then(r=>{
                    //si hay respuesta muestra el nombre si no el codigo
                    r.status==200?r.json().then(d=>clasificacion.innerHTML=d.nombre):clasificacion.innerHTML=data.clasificacion;
                }).catch(err=>{
                    //en caso de error undefined
                    console.log(err);
                    clasificacion.innerHTML="undefined";
                });
            })
        }else{
            //imagen de error
            cartel.src="assets/imgs/El_sexto_sentido.jpeg";
            console.log(resp.status);
        }
    }).catch(err=>{
        console.log(err);
        //imagen de error
        cartel.src="assets/imgs/El_sexto_sentido.jpeg";
    });
}
