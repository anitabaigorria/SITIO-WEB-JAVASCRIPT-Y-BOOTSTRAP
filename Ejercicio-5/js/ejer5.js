// GUARDO EN VARIABLES ELEMENTOS DEL DOCUMENTO
let InputContra = document.getElementById('contra');
let mostrar = document.getElementById('imagen-mostrar');
let ocultar = mostrar;

// CREO LA SERIE DE PASOS O MODIFICACIONES A APLICAR (FUNCIONES)
function mostrarContra(){
    InputContra.type = 'text';
    ocultar.src = 'img/closeeye.png';
}
function ocultarContra(){
    InputContra.type = 'password';
    mostrar.src = 'img/openeye.png';
}

// ASIGNO LOS EVENTOS DE CAMBIO A LAS IMAGENES (APLICACIÓN DE FUNCIÓN)
function asignarEventos() {
    let mostrar = document.getElementById('imagen-mostrar');
    
    mostrar.addEventListener('mousedown', mostrarContra);
    mostrar.addEventListener('mouseup', ocultarContra);

    // Soporte para dispositivos táctiles
    mostrar.addEventListener('touchstart', mostrarContra);
    mostrar.addEventListener('touchend', ocultarContra);
}

// INICIALIZAR EL EVENTO
document.addEventListener('DOMContentLoaded', asignarEventos);

