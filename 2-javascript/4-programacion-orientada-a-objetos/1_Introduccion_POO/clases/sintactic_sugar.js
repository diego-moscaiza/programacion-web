// - Las clases son solo azúcar sintáctico de las funciones con variables de uso estricto. Por debajo se ejecuta otras funciones que ya no es necesario escribirlas.

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

const ryanRay = new Person("Ryan", "Ray");

// - No podemos invocar con una clase como una función.
// const person = Person('personName', 'personSurname'); // error

// - Esto es equivalente a crear lo siguiente:
// function Person() {
//   "use strict";
//   this.name = name;
//   this.surname = surname;
// }

// - Para comprobar que es solo azúcar sintáctico
typeof Person; // function

let PersonTwo = class {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
};

let john = new PersonTwo("John", "Carter");