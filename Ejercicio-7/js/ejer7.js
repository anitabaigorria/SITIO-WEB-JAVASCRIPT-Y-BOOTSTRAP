function cambiarImagen(){
   
    let imagen = document.getElementById('imagen-sabana');
    let cambios = document.getElementsByClassName('cambiar');

    if(color.value=='plata'){
        imagen.src = 'img/plata.jpg';
        cambios[0].style.backgroundColor = '#726e6e';
        cambios[0].style.color = '#FFFFFF';
        cambios[1].style.backgroundColor = '#726e6e';
    }
    if(color.value=='azul'){
        imagen.src = 'img/azul.jpg';
        cambios[0].style.backgroundColor = '#0a0892';
        cambios[0].style.color = '#FFFFFF';
        cambios[1].style.backgroundColor = '#0a0892';
    }
    if(color.value=='bordo'){
        imagen.src = 'img/bordo.jpg';
        cambios[0].style.backgroundColor = '#791010';
        cambios[0].style.color = '#FFFFFF';
        cambios[1].style.backgroundColor = '#791010';
    }
    if(color.value=='gris'){
        imagen.src = 'img/gris.jpg';
        cambios[0].style.backgroundColor = '#4e4e4e';
        cambios[0].style.color = '#FFFFFF';
        cambios[1].style.backgroundColor = '#4e4e4e';
    }
    if(color.value=='verde'){
        imagen.src = 'img/verde.jpg';
        cambios[0].style.backgroundColor = '#017e44';
        cambios[0].style.color = '#FFFFFF';
        cambios[1].style.backgroundColor = '#017e44';
    }
}

let color = document.getElementById('color');
color.addEventListener('change', cambiarImagen);





