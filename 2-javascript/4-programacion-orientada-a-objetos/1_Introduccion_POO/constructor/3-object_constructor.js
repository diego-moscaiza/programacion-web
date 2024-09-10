// - Podemos usar el constructor de objetos para crear objetos genéricos

let personA = new Object();
personA.name = "Ryan";
personA.surname = "Ray";

// - Es lo mismo que crear con objeto literal.
// - Cada objeto que usa notación literal tiene un constructor de objeto.
const person = {};
console.log(person.constructor == Object); // true

// - El constructor de objetos puede generar objetos a partir de cualquier expresión de JavaScript.
let number = new Object(12);
let anotherNumber = new Object(3 * 2);
let string = new Object("test");
let jhon = new Object({ name: "John", surname: "Smith" });

console.log(number);