// - La herencia permite que nuevos objetos adquieran propiedades de objetos existentes

// - Esto nos permite evitar la repetición de código, por ejemplo si tenemos una 'clase programador' y una 'clase persona'

// - Podríamos evitar repetir el nombre y el apellido

/*
function Person () {
  this.name = ""
  this.surname = ""
}

function Programmer() {
  this.language = ""
}

inherit properties from Person like name an surname
Programmer.prototype = new Person()

// create a new programmer
const programmer = new Programmer()

programmer.name = "Ryan"
programmer.surname = "Ray"
programmer.language = "Python"
programmer
*/

// - Y con clases sería:

class Person {
  constructor(name, surname) {
    this.name = name
    this.surname = surname;
  }
}

const person = new Person("Ryan", "Ray");

class Programmer extends Person {
  constructor(language) {
    super()
    this.language = language;
  }
}

const programmer = new Programmer()
programmer.name = "Ryan"
programmer.surname = "Ray"
programmer.language = "Python"
programmer

// https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Inheritance