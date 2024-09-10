// Asociamos constantes a los inputs
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

// Asociamos constantes a los p
const textoRojo = document.getElementById('texto-rojo')
const textoVerde = document.getElementById('texto-verde')
const textoAzul = document.getElementById('texto-azul')

// Definimos las variables para los numeros de cada color
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Actualizar el texto de los parrafos
textoRojo.innerHTML = rojo;
textoVerde.innerHTML = verde;
textoAzul.innerHTML = rojo;

function actualizarColor(rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
}

// Usamos EventListener para escuchar y usamos change para los cambios

// Para actualizar Rojo (Red)
inputRojo.addEventListener('change', (ev) => {
    rojo = ev.target.value; // Aqui captura el numero del color
    textoRojo.textContent = rojo; // Aqui actualiza el numero del color
    actualizarColor(rojo, verde, azul) // Se llama la funcion para actualizar color
})

// Para actualizar Verde (Green)
inputVerde.addEventListener('change', (ev) => {
    verde = ev.target.value; 
    textoVerde.textContent = verde;
    actualizarColor(rojo, verde, azul)
})

// Para actualizar Azul (Blue)
inputAzul.addEventListener('change', (ev) => {
    azul = ev.target.value; 
    textoAzul.textContent = azul;
    actualizarColor(rojo, verde, azul)
})

// NOTA: en la funcion flecha (=>) en el argumento (ev) o (e) el valor que captura es el valor del atributo, en este caso, los valores para actualizar inputRojo y los demas, y usamos el 'ev.target.value' que 'target' retorna el objeto y 'value' muestra su valor .


