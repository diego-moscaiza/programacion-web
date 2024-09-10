/* 9.  Arrays Methods (Métodos con arreglos) */

// - Cuando creamos arreglos y queremos recorrelos podemos hacer el uso de diferentes formas, normalmente se ha realizado por bucles.

/* NOTA: Es recomendable declarar el nombre del arreglo en 'plural' para que podamos definir otra variable en 'singular' que equivaldrá a cada uno de los valores del arreglo. */

// - Creamos arreglos.
const names = ['ryan', 'joe', 'maria']
const otherNames = ['marcos', 'mario', 'john']
const numbers = [12, 23, 1, 54, 6, 87]

// - Prueba con un bucle 'for'
for (let i = 0; i < names.length; i++) {
    const element = names[i]
    console.log(element)
}


// - En JavaScript, los métodos utilizados con arreglos  son: forEach, map, find, filter, concat, sort, some, every, includes, reduce, etc.

// 1. Usando 'forEach()', y este metodo espera una funcion como parametro y el resultado es cada uno de los valores del arreglo.
names.forEach(function (name) {
    console.log(name)
})

// 2. Con el método 'map()' recorre el arreglo y lo puede devolver pero también puede devolver el resultado como un arreglo que se puede modificar si lo definimos en una constante.
const newNames = names.map(function (name) {
    //console.log(name)
    // return name;
    return `Hola ${name}`
})

console.log(newNames)

// 3. Con el método 'find()' podemos encontrar un valor y devolverlo.
const nameFound = names.find(function (name) {
    if (name === 'joe') {
        return name
    }
})

console.log(nameFound)

// 4. Con el método 'filter()' podemos quitar un valor del arreglo.
const namesFilter = names.filter(function (name) {
    // Comparamos si el nombre es 'joe' y retornará solo él.
    // if (name === 'joe') {
    //     return name
    // }

    // Comparamos si el nombre NO es 'joe' y NO retornará él.
    if (name !== 'joe') {
        return name
    }
})

console.log(namesFilter)

// 5. Con el método 'concat()' podemos juntar arreglos
console.log(names.concat(otherNames))

// 6. Con el método 'sort()' realizamos el ordenamiento dependiendo de la posición del valor del string de acuerdo a su valor.
const namesSorted = names.sort()
console.log(namesSorted)

// 7. Con el método 'some()' se comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

// Comprueba si un elemento es par
const modulo = (element) => element % 2 === 0;

console.log(numbers.some(modulo));
// Salida esperada: verdadero

// 8. Con el método 'every()' determina si todos los elementos en el array satisfacen una condición.

// Esta función es determina si los valores analizados están debajo del numero 40.
const isBelowThreshold = (currentValue) => currentValue < 40;

console.log(numbers.every(isBelowThreshold));
// Expected output: false


// 9. Con el método 'includes()' determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

console.log(numbers.includes(2));
// Expected output: false

console.log(names.includes('ryan'));
// Expected output: true


// 10. Con el método 'reduce()' ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 10;

const sumWithInitial1 = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(sumWithInitial1);
// Expected output: 20