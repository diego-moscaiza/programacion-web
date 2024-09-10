// - Podemos cambiar la estructura después de la creación de un objeto
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

const john = new Person("John", "Smith");
const mario = new Person("Mario", "Rossi");

john.greets = function () {
  return `Hello ${this.name} ${this.surname}!`;
};

// - Pero, para cambiar la estructura de todos los Objetos
// - Creado por un constructor

Person.prototype.greets = function () {
  return `Hello I'am ${this.name} ${this.surname}!`;
};

mario.greets()

// - El prototipo es una referencia a otro Objeto.
// - Si un objeto no tiene un método, lo encontrará en el constructor y si no, lo encontrará en los métodos básicos del Objeto.