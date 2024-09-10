/* Funciones */

// - Ejemplo 1:

function sumar(primero: number, segundo: number): number {
    return primero + segundo;
}

sumar(3,4);
console.log(sumar)

// - Ejemplo 2:

let entero2: number = 100;
function multiplicar(primero : number, segundo: number): void {
    console.log(primero * segundo);
}

multiplicar(entero2, 3)

// - Ejemplo 3:

let animals1:string[] = ['perro', 'gato', 'tigre'];

function printFirstElemet(lista: any[]): void {
    console.log(lista[0]);
}

printFirstElemet(animals1)


// - Ejemplo 4: Función quicksort.

function quicksort(lista: number[]): number[] {
    if (lista.length <= 1) {
        return lista;
    };

    let pivote = lista[0];
    let izquierda: number[] = [];
    let derecha: number[] = [];

    let i = 1
    for (i; i < lista.length; i++) {
        lista[i] < pivote
        ? izquierda.push(lista[i])
        : derecha.push(lista[i]);
    };

    return quicksort(izquierda).concat(pivote, quicksort(derecha));
};

let numbers: number[] = [23, 45, 16, 37, 3, 99, 22];
let listOrdenada: number[] = quicksort(numbers);
console.log(listOrdenada);