// SELECCIONAR ELEMENTOS DEL DOM

const boton = document.querySelector('button')
const color = document.getElementById('color')

function generarColorHexAleatorio() {
    // Definimos variables para poder procesar un numero hexadecimal
    let digitos = '0123456789abcdef';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
        // 'Math.floor' redondea un valor
        // 'Math.random' otorga un pseudo numero aleatorio entre 0 y 1. Pero en este caso no permite el valor 1 como resultado.
        // Se hace la multiplicacion de 16 por la cantidad de carateres.
        let indiceAleatorio = Math.floor(Math.random() * 16);
        // Se le añade a 'colorHex' con el operador '+=' el resultado de digitos[indiceAleatorio] 
        colorHex += digitos[indiceAleatorio] 
    }

    return colorHex;
}

boton.addEventListener('click', function() {
    let colorAleatorio = generarColorHexAleatorio();
    // Actualizar el texto con el metodo 'textContent'.
    color.textContent = colorAleatorio;
    // Actualizar el color de fondo accediendo al documento y sus partes.
    document.body.style.backgroundColor = colorAleatorio;
});