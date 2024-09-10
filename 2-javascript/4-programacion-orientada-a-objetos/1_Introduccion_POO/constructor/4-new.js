/* 'new' es usado para crear nuevas instancias de funciones o clases. */
/* 'use strict' es una expresión literal que no permite el uso de variables no declaradas. */

// - Ejemplo 1:
function Person() {
  "use strict"; // <- expresión de uso variables estricto
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
  this.displayFullName = function () {
    return this.name + " " + this.surname;
  };
}

// - Sin 'new'
// const person = Person();
// person; // Error

// - Con 'new'
const person = new Person();
person; // Muestra sus atributos y funciones

const mankind = {
  Person: function (name, lastname) {
    "use strict"
    this.name = name;
    this.lastname = lastname;
  },
};

const joe = mankind.Person("Joe", "Smith");
joe // Devuelve 'Undefined'

mankind // Muestra sus atributos y funciones