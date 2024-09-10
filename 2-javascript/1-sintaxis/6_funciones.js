// FUNCIONES
function suma(a, b) { return a + b } // esta es una funcion de suma
suma(1, 3)

// - Ejemplo: Función quicksort
// - El algoritmo de ordenamiento rapido consiste en acomodar un elemento llamado 'pivote' en su posición definitiva, luego ordenar los elementos menores al Pivot y a continuación ordenar los elementos mayores al 'pivote'.

function quicksort(lista) {
    if (lista.length <= 1) {
        return lista
    }

    let pivote = lista[0]
    let izquierda = []
    let derecha = []

    for (let i = 1; i < lista.length; i++) {
        lista[i] < pivote ? izquierda.push(lista[i]) : derecha.push
            (lista[i])
    }

    return quicksort(izquierda).concat(pivote, quicksort(derecha))
}

let numeros = [23, 45, 67, 12, 4, 17, 11]
let listaOrdenada = quicksort(numeros)
console.log(listaOrdenada)


// - Ejemplo: Función mergesort

// - Primero creamos una función que divida el arreglo.
function merge(left, right) {
    let arr = []
    //Salimos del bucle si alguno de los elementos de la matriz queda vacío
    while (left.length && right.length) {
    //Elija el elemento más pequeño entre los más pequeños de las submatrices izquierda y derecha.
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    // Concatenando los elementos sobrantes
    // (en caso de que no hayamos revisado todo el array izquierdo o derecho)
    return [...arr, ...left, ...right]
}

// - Luego creamos una función que ordene el arreglo dividido.
function mergesort(array) {
    let half = array.length / 2;
    let left = array.slice(0, half);
    let rigth = array.slice(half);

    if (array.length <= 1) {
        return array
    }

    return merge(mergesort(left), mergesort(rigth))
}

let numeros1 = [23, 45, 67, 12, 4, 17, 11]
let listaOrdenada1 = mergesort(numeros1)
console.log(listaOrdenada1)