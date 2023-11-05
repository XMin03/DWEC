function validaNombre() {
    if (nombre.validity.valueMissing ||nombre.validity.tooShort || nombre.validity.tooLong){
        nombre.setCustomValidity("Longitud requerida de entre 5 y 20 caracteres");
    }else{  
        nombre.setCustomValidity("");
    }
}
function validaEmail() {
    let n=email.value.indexOf('@')
    if (n>0&&n<email.value.length-1){
        email.setCustomValidity("");
    }else{
        email.setCustomValidity("Ese no es un email");
    }
}
function validaTel() {
    if (tel.validity.valueMissing){
        tel.setCustomValidity("Introduce un telefono");
    }
    else if (tel.validity.rangeOverflow){
        tel.setCustomValidity("Maximo 15numeros");
    }else{
        tel.setCustomValidity("");
    }
}
function validaComm() {
    if (comm.value.tooLong){
        comm.setCustomValidity("Maximo 200 caracteres");
    }else{
        comm.setCustomValidity("");
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
validaTel()
validaComm()