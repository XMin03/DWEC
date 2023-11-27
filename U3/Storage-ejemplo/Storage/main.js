const botonGuardar = document.getElementById('btnGuardar');
const botonRecuperar = document.getElementById('btnRecuperar');
const valorLocal = document.getElementById('local');
const valorSession = document.getElementById('session');


function guardar() {
    localStorage.setItem('datoL', valorLocal.value);
    sessionStorage.setItem('datoS', valorSession.value);
}

function recuperar() {
    valorLocal.value= !!localStorage.getItem('datoL') ? localStorage.getItem('datoL') : valorLocal.value;
    valorSession.value= !!sessionStorage.getItem('datoS') ? sessionStorage.getItem('datoS') : valorSession.value;
}

botonGuardar.addEventListener('click', guardar);
botonRecuperar.addEventListener('click', recuperar);