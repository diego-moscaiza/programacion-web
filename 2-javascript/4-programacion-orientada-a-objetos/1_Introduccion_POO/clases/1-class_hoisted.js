// A diferencia de la clase de función no están "elevadas" ("hoisted"), es decir, que no podemos usarlas antes de su declaración

const car = new Car(); // error

class Car {
  constructor() {}
}