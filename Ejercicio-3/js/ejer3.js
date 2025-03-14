// A0. inicializar
document.getElementById('inicio').addEventListener('click', contarVocales);

function contarVocales(event) {
    event.preventDefault();
    // ENTRADA (contenido del elemento textarea)
    let texto = document.getElementById('contV').value.toUpperCase();
    const resultado = {
        A: 0,
        E: 0,
        I: 0,
        O: 0,
        U: 0
    };
   
    // A2.RecorrerCadena
    for (let cantidad of texto) {
        switch (cantidad) {
            case 'A':
                resultado.A++;
                break;
            case 'E':
                resultado.E++;
                break;
            case 'I':
                resultado.I++;
                break;
            case 'O':
                resultado.O++;
                break;
            case 'U':
                resultado.U++;
                break;
        }
    }

    mostrarResultado(resultado);
}

// A3.ESCRIBIR(cantA,cantE,cantI,cantO,cantU)
function mostrarResultado(resultado) {
    document.getElementById('resultA').textContent = `${resultado.A}`;
    document.getElementById('resultE').textContent = `${resultado.E}`;
    document.getElementById('resultI').textContent = `${resultado.I}`;
    document.getElementById('resultO').textContent = `${resultado.O}`;
    document.getElementById('resultU').textContent = `${resultado.U}`;
}

