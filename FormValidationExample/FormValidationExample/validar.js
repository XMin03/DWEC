const formulario=document.querySelector("form");
const nombre=document.querySelector("#nombre");
const email=document.querySelector("#email");
const edad=document.querySelector("#edad");
const boton=document.querySelector("#submit");


//PASO 1: Personalizar mensaje de validación
//Indicar mayoría de edad
function validaEdad() {
    if (edad.validity.valueMissing){
        edad.setCustomValidity("La edad es obligatoria");
    }else if (edad.validity.rangeOverflow) {
        edad.setCustomValidity("La edad es demasiada cantidad");
    }else if (edad.validity.rangeUnderflow) {
        edad.setCustomValidity("Debe ser mayor de edad");
    }else{
        edad.setCustomValidity("");
    }
}
edad.addEventListener('input',validaEdad)
//Paso 2: Configurar mensaje la primera vez
validaEdad()


//PASO 3: Segunda validación tras la automática del navegador por HTML5
// correo electrónico de dominio @gmail.com

function extraeDominio() { //Se usa en paso 3 y paso 5.
    let correo=email.value
    return correo.substring(correo.indexOf("@")+1)
}

function validaEmail(){
    if (email.validity.valueMissing){
        email.setCustomValidity("El email es obligatorio");
    }else if (extraeDominio()!="gmail.com") {
        email.setCustomValidity("El dominio debe ser @gmail.com")
    }else{
        email.setCustomValidity("")
    }
}
email.addEventListener('blur',validaEmail)
validaEmail()
function validaFormulario(event) {
    validaEdad();
    validaEmail();
}
boton.addEventListener('click',validaFormulario)


//PASO 4: Eliminar validación automática del navegador
formulario.setAttribute('novalidate',true)


//PASO 5: Añadir validación únicamente Javascript (Requisito paso 4)

// function validaNombre() {

// }
// function validaEmail(){

// }

// function validaEdadHTML5(){

// }

// function validaEdadJS(){

// }

// function validaFormulario(event) {

// }



