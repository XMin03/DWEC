function validaNombre() {
    if (nombre.value.length==0){
        nombre.setCustomValidity("Campo requerido");
    }else if(nombre.value.length>20){
        nombre.setCustomValidity("Nombre demasiado largo");
    }else if(nombre.validity.patternMismatch){  
        nombre.setCustomValidity("Nombre invalido");
    }else{
        nombre.setCustomValidity("");
    }
}
function validaEmail() {
    if (email.value.indexOf("@")==0) {
        email.setCustomValidity("Ese no es un email");
    }else{
        let dominio=email.value.substring(email.value.indexOf("@")+1)
        if (email.value.length==0){
            email.setCustomValidity("Campo requerido");
        }else if (email.validity.patternMismatch){
            if (dominio!="vegasoft.com") {
                email.setCustomValidity("Ese no es un email del dominio vegasoft.com");
            }else{
                email.setCustomValidity("No se aceptan caracteres especiales");
            }
        }else{
            email.setCustomValidity("");
        }
    }
}
function validaTel() {
    if (tel.validity.patternMismatch){
        tel.setCustomValidity("telefono invalido");
    }else{
        tel.setCustomValidity("");
    }
}
let patternComm=/^.{0,200}$/
function validaComm() {
    if (patternComm.test(comm.value)){
        comm.setCustomValidity("");
    }else{
        comm.setCustomValidity("Maximo 200 caracteres");
    }
}
const nombre=document.querySelector("#uname");
const email=document.querySelector("#email");
const tel=document.querySelector("#phone");
const comm=document.querySelector("#comment");
nombre.addEventListener('input',validaNombre);
email.addEventListener('input',validaEmail);
tel.addEventListener('input',validaTel)
comm.addEventListener('input',validaComm)
validaNombre()
validaEmail()