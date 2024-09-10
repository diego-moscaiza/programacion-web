// - La clase es una colección de métodos agrupados por un nombre
// - Uno de los métodos de una clase es el constructor.

class myClass {
  // No puedes tener más de un constructor
  constructor(value1, value2) {
    this.property1 = value1;
    this.property2 = value2;
    this.property3 = "";
  }

  method1() {}
  method2() {}
}

myClass.prototype //?