// declaro constantes
const capacidadTanque = 50000;
const limiteReserva = 5000;

// ENTRADA
document.getElementById('boton').addEventListener('click', uber);

function uber() {
    // A0. inicializar
    let combustibleActual = capacidadTanque;
    let cantidadViajes = 0;
    while (combustibleActual > limiteReserva) {
        // A1. LEER (viajeRealizado)
        let viajeRealizado = parseInt(prompt('Ingrese la cantidad de cm3 ocupados en el último viaje'));

        // Validación del input
        if (isNaN(viajeRealizado) || viajeRealizado <= 0 || viajeRealizado > capacidadTanque) {
            alert("Por favor, ingrese un valor válido (hasta 50000 cm3).");
            break;
        }

        // A2. calcularViaje
        combustibleActual -= viajeRealizado;
        cantidadViajes++;

        if (combustibleActual <= limiteReserva) {
            alert("Tanque en reserva. Por favor, vaya a una estación de servicio.");
            break;
        } else {
            alert(`Viaje aceptado. Cantidad restante: ${combustibleActual} cm³`);
        }
    }

    // SALIDA
    alert(`Cantidad de viajes realizados: ${cantidadViajes}`);
    alert(`Fin del algoritmo`);
}
