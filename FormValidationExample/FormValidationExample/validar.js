const formulario=document.querySelector("form");
const nombre=document.querySelector("#nombre");
const email=document.querySelector("#email");
const edad=document.querySelector("#edad");
const boton=document.querySelector("#submit");

const nombreError=document.querySelector("#nombreError span");
const emailError=document.querySelector("#emailError span");
const edadError=document.querySelector("#edadError span");

// //PASO 1: Personalizar mensaje de validación
// //Indicar mayoría de edad
// function validaEdad() {
//     if (edad.validity.valueMissing){
//         edad.setCustomValidity("La edad es obligatoria");
//     }else if (edad.validity.rangeOverflow) {
//         edad.setCustomValidity("La edad es demasiada cantidad");
//     }else if (edad.validity.rangeUnderflow) {
//         edad.setCustomValidity("Debe ser mayor de edad");
//     }else{
//         edad.setCustomValidity("");
//     }
// }
// edad.addEventListener('input',validaEdad)
// //Paso 2: Configurar mensaje la primera vez
// validaEdad()


// //PASO 3: Segunda validación tras la automática del navegador por HTML5
// // correo electrónico de dominio @gmail.com

function extraeDominio() { //Se usa en paso 3 y paso 5.
    let correo=email.value
    return correo.substring(correo.indexOf("@")+1)
}

// function validaEmail(){
//     if (email.validity.valueMissing){
//         email.setCustomValidity("El email es obligatorio");
//     }else if (extraeDominio()!="gmail.com") {
//         email.setCustomValidity("El dominio debe ser @gmail.com")
//     }else{
//         email.setCustomValidity("")
//     }
// }
// email.addEventListener('blur',validaEmail)
// validaEmail()


//PASO 4: Eliminar validación automática del navegador
formulario.setAttribute('novalidate',true)


//PASO 5: Añadir validación únicamente Javascript (Requisito paso 4)

function validaNombre() {
    let b=false;
    nombreError.classList.add("active")
    if (!nombre.value.length>0){
        nombre.setCustomValidity("El nombre es obligatorio");
    }else{
        nombre.setCustomValidity("");
        nombreError.classList.remove("active")
        b=true;
    }
    nombreError.innerHTML=nombre.validationMessage;
    return b;
}
function validaEmail(){
    let b=false;
    emailError.classList.add("active")
    if (email.validity.valueMissing){
        email.setCustomValidity("El email es obligatorio");
    }else if (extraeDominio()!="gmail.com") {
        email.setCustomValidity("El dominio debe ser @gmail.com")
    }else{
        email.setCustomValidity("")
        b=true;
        emailError.classList.remove("active")
    }
    emailError.innerHTML=email.validationMessage;
    return b;
}

function validaEdadHTML5(){
    let b=false;
    edadError.classList.add("active")
    
    if (edad.validity.valueMissing){
        edad.setCustomValidity("La edad es obligatoria");
    }else if (edad.validity.rangeOverflow) {
        edad.setCustomValidity("La edad es demasiada cantidad");
    }else if (edad.validity.rangeUnderflow) {
        edad.setCustomValidity("Debe ser mayor de edad");
    }else{
        edad.setCustomValidity("");
        b=true;
        edadError.classList.remove("active")
    }
    edadError.innerHTML=edad.validationMessage;
    return b;

}

function validaEdadJS(){
    let b=false;
    edadError.classList.add("active")
    
    if (edad.value.length==0){
        edad.setCustomValidity("La edad es obligatoria");
    }else if (edad.value>120) {
        edad.setCustomValidity("La edad es demasiada cantidad");
    }else if (edad.value<18) {
        edad.setCustomValidity("Debe ser mayor de edad");
    }else{
        edad.setCustomValidity("");
        b=true;
        edadError.classList.remove("active")
    }
    edadError.innerHTML=edad.validationMessage;
    return b;
}

function validaFormulario(event) {
    let b=true;
    b=validaNombre()&&b
    b=validaEmail()&&b
    b=validaEdadJS()&&b
    if (!b) {
        event.preventDefault();    
    }
    return b;
}

formulario.addEventListener('submit',validaFormulario)

