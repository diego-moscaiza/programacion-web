/* 3. Arrow function (Función de flecha) */

// - Declarando una función normal:
function nameFunction() {
    return "Hola"
}

// - Declarando una funcion flecha '=>':

/* ESTRUCTURA:
- Se crea una constante luego se asigna con un paréntesis '()' para los parametros de la función, después colocamos una flecha '=>' y por último se escribe lo que se desea ejecutar.*/

// - Aquí los corchetes y el 'return' son implicitos.
const newArrowFunction1 = () => "I'm an arrowFunction"

// - Pero si fueran más líneas podemos usar los corchetes y el 'return'.
// - Y si añadimos una variable o mas adicional dentro de la función y queremos un resultado con esa o esas variables adicionales se tiene que retornar la función usando el 'return' con ese valor.
const newArrowFunction2 = () => {
    let message = "Yes, I'm an arrowFunction, again ツ"
    return message
    // return "Yes, I'm an arrowFunction, again ツ" // Devuelve lo mismo
}

newArrowFunction1(); // Ejecutar funcion


// - Ejemplo 1:
const array1 = [1, 2, 3, 4];

const initialValue = 10; // Se posiciona '10' primero que los otros valores.

// - Estrctura usando una "funcion regular"
const sumWithInitial = array1.reduce(
    function (accumulator, currentValue) {
        return accumulator + currentValue
    }, initialValue // <- valor externo
);
// NOTA: Se puede añadir un valor externo de la función interna


// - Estrctura usando una "funcion flecha"
const sumWithInitial1 = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue // <- valor externo
);
// NOTA: Con la función flecha un valor externo puede estar incluido.

console.log(sumWithInitial1); // Retornará 20 en ambas.

// - Funciones con JSX (Usado en React.js)
function ListaDeTareas(){
    return(
        <ul>
            {listado.map(elemento => (<li>{elemento.nombre}</li>))}
        </ul>
    );
}

// - Para más sobre funciones flechas: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions