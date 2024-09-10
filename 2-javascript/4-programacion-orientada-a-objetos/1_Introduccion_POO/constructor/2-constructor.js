// Los objetos en notación literal no son reutilizables, tenemos que repetir objetos.

const johnSmith = {
  name: "John",
  surname: "Smith",
  address: {
    street: "13 Duncannon Street",
    city: "London",
    country: "United Kingdom",
  },
  displayFullName: function () {
    return this.name + " " + this.surname;
  },
};

const marioRossi = {
  name: "Mario",
  surname: "Rossi",
  address: {
    street: "Piazza Colonna 370",
    city: "Roma",
    country: "Italy",
  },
  displayFullName: function () {
    return this.name + " " + this.surname;
  },
};

// - Podemos crear objetos con un constructor
function Person() {
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
  this.displayFullName = function () {
    return this.name + " " + this.surname;
  };
}

// Para crear un objeto con un constructor. Y tenemos que utilizar nueva palabra clave

let ryanRay = new Person();
ryanRay.name = "Ryan";
ryanRay.surname = "Ray";
ryanRay.displayFullName();

let johnCarter = new Person();
johnCarter.name = "John";
johnCarter.surname = "Carter";
johnCarter.displayFullName();
