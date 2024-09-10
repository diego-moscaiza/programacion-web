// 1. OPERADORES ARITMÉTICOS //

let sumar = 1 + 1
let restar = 9 - 3
let dividir = 20 + 4
let multiplicar = 2 * 5

console.log(sumar) // Con esto se imprime lo asginado a la variable 'sumar'

// 2. OPERADORES COMPARATIVOS //

console.log(4 == 4)    // Devolvertá TRUE
console.log(0 == '0')  // Devolverá TRUE porque compara solo el valor y no el tipo de dato
console.log(0 === '0') // Devolverá FALSE ya que se compara con 'triple =' el valor y tipo de dato

console.log(4 != 5) // VERDADERO
console.log(4 < 5) // VERDADERO
console.log(4 >= 5) // FALSO


// 3. OPERADORES LÓGICOS //

// - Se usa el operador 'and' colocando 'doble &'

console.log(true && true)  // VERDADERO
console.log(true && false) // FALSO
console.log(false && true) // FALSO
console.log(false && false) // FALSO

// - Se usa el operador 'and' colocando 'doble ||'

console.log(true || true)  // VERDADERO
console.log(true || false) // VERDADERO
console.log(false || true) // VERDADERO
console.log(false || false) // FALSO