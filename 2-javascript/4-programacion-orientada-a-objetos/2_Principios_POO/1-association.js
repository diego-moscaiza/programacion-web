// - La asociación es la relación entre dos objetos
// - Cada objeto es independiente el uno del otro
// - Un objeto 'hijo' es un objeto puede existir sin el otro.

class Person {
  constructor (name, surname) {
    this.name = name;
    this.surname = surname;
    this.parent = null;
  }
}

const johnSmith = new Person('John', 'Smith') //?
const fredSmith = new Person('Fred', 'Smith') //?
fredSmith.parent = johnSmith