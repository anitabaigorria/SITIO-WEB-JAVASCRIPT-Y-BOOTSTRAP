// PARTE 1 - TRADUCCIÓN
// creo una función con el nombre de cada idioma, la misma contiene la traducción de cada elemento al idioma seleccionado

function cambiarIdiomaEs() {
    document.getElementById('regis').innerHTML = "Registro:";
    // tomo el elemento html, ya sea el texto del label o el valor del input y le cambio el valor (idioma)
    document.getElementById('idio').innerHTML = "Idioma";
    document.getElementById('usuario').innerHTML = "Usuario:";
    document.getElementById('contraseña').innerHTML = "Contraseña:";
    document.getElementById('rcontraseña').innerHTML = "Repetir Contraseña:";
    document.getElementById('terminos').innerHTML = "Acepto los términos y condiciones";
    document.getElementById('enviar').value = "Enviar";
}

function cambiarIdiomaEn() {
    document.getElementById('regis').innerHTML = "Register:";
    document.getElementById('idio').innerHTML = "Language";
    document.getElementById('usuario').innerHTML = "Username:";
    document.getElementById('contraseña').innerHTML = "Password:";
    document.getElementById('rcontraseña').innerHTML = "Repeat Password:";
    document.getElementById('terminos').innerHTML = "I accept the terms and conditions";
    document.getElementById('enviar').value = "Submit";
}

function cambiarIdiomaIt() {
    document.getElementById('regis').innerHTML = "Registrazione:";
    document.getElementById('idio').innerHTML = "Lingua";
    document.getElementById('usuario').innerHTML = "Nome utente:";
    document.getElementById('contraseña').innerHTML = "Password:";
    document.getElementById('rcontraseña').innerHTML = "Ripeti Password:";
    document.getElementById('terminos').innerHTML = "Accetto i termini e le condizioni";
    document.getElementById('enviar').value = "Invia";
}

// creo función para seleccionar el idioma
function seleccionarIdioma() {
    // valorSelectIdioma = tomo el valor del input idioma (select)
    let valorSelectIdioma = document.getElementById('idioma').value;
    
    // si el idioma seleccionado es igual a cada lang, se transforma a cada función preestablecida
    if (valorSelectIdioma === 'es') {
        cambiarIdiomaEs();
    } else if (valorSelectIdioma === 'en') {
        cambiarIdiomaEn();
    } else if (valorSelectIdioma === 'it') {
        cambiarIdiomaIt();
    }
}

selectIdioma = document.getElementById('idioma');
selectIdioma.addEventListener('change', seleccionarIdioma);

// PARTE 2
function validarFormulario(event) {
    event.preventDefault();
    
    // CREO MIS VARIABLES DENTRO DE UNA MISMA FUNCIÓN (tienen la misma prevención de envío del formulario)
    let contraInput = document.getElementById('contra').value;
    let contraRepetidaInput = document.getElementById('rcontra').value;
    let acepto = document.getElementById('terycond').checked;

    // LLAMO A MIS ELEMENTOS HTML (donde va a aparecer el mensaje de error)
    let mensaje = document.getElementById('mensaje');
    let mensaje2 = document.getElementById('mensaje2');
    
    mensaje.innerHTML = '';
    mensaje2.innerHTML = '';

    if (contraInput !== contraRepetidaInput) {
        event.preventDefault();
        mensaje.innerText = "Las contraseñas no coinciden.";
    }
    
    if (!acepto) {
        event.preventDefault();
        mensaje2.innerText = "Debe aceptar los términos y condiciones.";
    }
}

document.getElementById('ejer6').addEventListener('submit', validarFormulario);