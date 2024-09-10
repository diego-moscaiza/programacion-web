/* Bucles */

// 1. Bucle for

// - Ejemplo 1:

let animals:string[] = ['perro', 'gato', 'tigre'];

for (let animal of animals) {
    console.log(animal);
};

// - Ejemplo 2:

let entero2: number = 100;

function multiplicar1(primero : number, segundo: number): void {
    console.log(primero * segundo);
}

multiplicar1(entero2, 3)

// - Ejemplo 3:
let numeros1: number[] = [23, 45, 16, 37, 3, 99, 22];

for (let number1 of numeros1) {
    multiplicar1(number1, 2)
}


// 2. Bucle while

// - Ejemplo 1:

let emergencia: number = 911;
while (entero2 <= emergencia) {
    console.log(entero2);
    entero2++;
};