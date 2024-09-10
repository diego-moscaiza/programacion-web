// - La agregación es una forma especial de relación de asociación donde un objeto tiene un papel más importante que otro.

// - El rol principal determina la propiedad de un objeto en relación con el otro.
// - El objeto propietario se llama agregado y el objeto de propiedad se llama componente pero cada objeto es independiente.

// - Este es el dueño
const company = {
  name: "Fazt Tech",
  employees: [],
};

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

// - Estos son objetos independientes
const johnSmith = new Person("John", "Smith");
const ryanRay = new Person("Ryan", "Ray");

company.employees.push(johnSmith);
company.employees.push(ryanRay);

// La agregación es un mecanismo que nos permite crear un objeto formado por varios objetos