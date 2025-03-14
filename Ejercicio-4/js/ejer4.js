let fondos = document.getElementsByClassName('fondos'); // GUARDO EN UN ARREGLO ELEMENTOS ESPECIFICOS DEL DOCUMENTOS RELACIONADOS POR UNA CLASE

// DEFINO LAS FUNCIONES QUE COLOCAN LOS CAMBIOS EN CSS, ES DECIR, QUE CREAN LOS MODOS
function modoOscuro (){
    document.body.style.backgroundColor = '#000000'; // CAMBIA EL COLOR DEL BODY A NEGRO
    document.body.style.color = '#FFFFFF'; // CAMBIA EL COLOR DEL TEXTO A BLANCO
    fondos[0].style.backgroundColor = '#535353';
    fondos[1].style.color ='#FFFFFF';
    fondos[1].style.backgroundColor ='#535353';
    fondos[2].style.color ='#FFFFFF';
    fondos[3].style.backgroundColor ='#535353';
}
function modoClaro (){
    document.body.style.backgroundColor = '#FFFFFF'; // CAMBIA EL COLOR DEL BODY A BLANCO
    document.body.style.color = '#000000'; // CAMBIA EL COLOR DEL TEXTO A NEGRO
    fondos[0].style.backgroundColor ='#bbbbbb';
    fondos[1].style.color ='#000000';
    fondos[1].style.backgroundColor ='#bbbbbb';
    fondos[2].style.color ='#000000';
    fondos[3].style.backgroundColor ='#bbbbbb';
}

// AGARRO EL ELEMENTO DEL HTML
let checkbox = document.getElementById('oscuro');
function CambioModoOscuro() { // CREO UNA FUNCION QUE VA A SER LLAMADA AL INICIARSE EL EVENTO, DONDE MEDIANTE UN CONDICIONAL DEFINE EN QUE MODO ESTÁ SEGÚN EL ESTADO DEL CHECKBOX Y REALIZA EL CAMBIO
    if (checkbox.checked) {
        modoOscuro();
    } else {
        modoClaro();
    }
}

// AGREGO EL EVENTO (LA MODIFICACION APLICADA AL ELEMENTO HMTL)
checkbox.addEventListener('change', CambioModoOscuro);