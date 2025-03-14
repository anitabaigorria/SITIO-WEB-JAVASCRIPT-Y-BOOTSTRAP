document.getElementById('simulacion').addEventListener('click', iniciar);

function iniciar(event) {
    const PRECIOG = 1250;
    const PRECIOA = 700;
    const PRECIOE = 1500;
    const RECAUDACION = 50000;

    // A0. INICIALIZAR
    let cantG = 45;
    let cantA = 40;
    let cantE = 20;
    let recG = 0;
    let recA = 0;
    let recE = 0;
    let precioProducto = 0;
    let totalRecaudado = 0;
    let vuelto = 0;

    // A2. verificarCompra
    while (totalRecaudado < RECAUDACION) {
        // A1. LEER
        let producto = prompt('SELECCIONE PRODUCTO: --> GASEOSA , --> AGUA MINERAL , --> ENERGIZANTE');
        if (producto === null) {
            break; // Salir del bucle si se cancela el pedido
        }
        producto = producto.toUpperCase();
               
        let billete = prompt('INTRODUZCA DINERO: Valor GASEOSA: $1250, AGUA MINERAL: $700, ENERGIZANTE: $1500');
        if (isNaN(billete) || billete <= 0){
            window.alert('Ingrese un valor válido');
            break;
        }
        billete = parseFloat(billete);

        if (producto === 'GASEOSA') {
            precioProducto = PRECIOG;
            if (cantG > 0 && (totalRecaudado + precioProducto) < RECAUDACION) {
                if (billete >= precioProducto) {
                    vuelto = billete - precioProducto;
                    cantG = cantG - 1;
                    totalRecaudado = totalRecaudado + precioProducto;
                    recG = recG + precioProducto;
                    alert(`Producto entregado: ${producto}`);
                    alert(`Su vuelto es: ${vuelto}`);
                } else {
                    alert('Dinero insuficiente para su compra');
                }
            } else {
                alert(`No hay stock suficiente de ${producto} o la recaudación máxima ha sido alcanzada.`);
            }
        } else if (producto === 'AGUA MINERAL') {
            precioProducto = PRECIOA;
            if (cantA > 0 && (totalRecaudado + precioProducto) < RECAUDACION) {
                if (billete >= precioProducto) {
                    vuelto = billete - precioProducto;
                    cantA = cantA - 1;
                    totalRecaudado = totalRecaudado + precioProducto;
                    recA = recA + precioProducto;
                    alert(`Producto entregado: ${producto}`);
                    alert(`Su vuelto es: ${vuelto}`);
                } else {
                    alert('Dinero insuficiente para su compra');
                }
            } else {
                alert(`No hay stock suficiente de ${producto} o la recaudación máxima ha sido alcanzada.`);
            }
        } else if (producto === 'ENERGIZANTE') {
            precioProducto = PRECIOE;
            if (cantE > 0 && (totalRecaudado + precioProducto) < RECAUDACION) {
                if (billete >= precioProducto) {
                    vuelto = billete - precioProducto;
                    cantE = cantE - 1;
                    totalRecaudado = totalRecaudado + precioProducto;
                    recE = recE + precioProducto;
                    alert(`Producto entregado: ${producto}`);
                    alert(`Su vuelto es: ${vuelto}`);
                } else {
                    alert('Dinero insuficiente para su compra');
                }
            } else {
                alert(`No hay stock suficiente de ${producto} o la recaudación máxima ha sido alcanzada.`);
            }
        } else {
            alert('Producto no válido.');
        }
    }

    // SALIDA
    alert(`Total recaudado: ${totalRecaudado}`);
    alert(`Recaudación por gaseosas: ${recG}`);
    alert(`Recaudación por agua mineral: ${recA}`);
    alert(`Recaudación por energizantes: ${recE}`);
    alert(`Fin del algoritmo`);
}