function detectarMayuscula(texto) {
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].charCodeAt(0) >= 65 && texto[i].charCodeAt(0) <= 90) {
            console.log(texto[i] + " es mayúscula.");
        }
    }
}

function contarMayusculas(texto) {
    let contador = 0; 
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].charCodeAt(0) >= 65 && texto[i].charCodeAt(0) <= 90) {
            contador++;
        }
    }
    return contador;
}


detectarMayuscula("HolA Mundo");
let cantidadMayusculas = contarMayusculas("HolA Mundo");
console.log("Cantidad de mayúsculas: " + cantidadMayusculas);