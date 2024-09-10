/* TypeScript, un lenguaje de programación tipado, super set de javascript, multi paradigma, funcional, genérico, imperativo y orientado a objetos. */

// - En TypeScript se le asigna el tipo de dato a cada variable pero también tiene la capacidad de inferir el tipo.

// 1. Variables:
let mensaje: string = "Hola mundo";
console.log(mensaje)

let libro: string = "Clean Code";

let entero: number = 100;

let decimal: number = 1.9345345;

let autorizado: boolean = true;
let seleccionado: boolean = false;

let telf: string = '345-654-654';
let color: string = "azul";

// 2. Constantes:
const pi: number = 3.141592;

// 3. Arreglos:
let numeros: number[] = [23, 45, 16, 37, 3, 99, 22];

let animales: string[] = ['perro', 'gato', 'tortuga'];

type mixto = string | number | boolean | string[];
let datosMixtos: mixto[] = ['texto', 69, true, ['324']]

// 4. Diccionario:
let jugadores: { [key: number]: string } = {
    10: 'Messi',
    7: 'Cristiano Ronaldo'
};

// - Podemos usar 'Record' para diccionarios.
let paises: Record<string, string> = {
    PE: 'Peru',
    EC: 'Ecuador',
    MX: 'Mexico'
};

let emails: Record<string, string[]> = {
    'Diego': ['diego@emails.com'],
    'Ricardo': ['ricardo@emails.com', 'ricardo@outlook.com']
}