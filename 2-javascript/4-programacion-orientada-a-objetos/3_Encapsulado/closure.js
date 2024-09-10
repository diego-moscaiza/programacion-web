// - El enfoque basado en convenciones permite acceder a la propiedad de todos modos, por lo que para solucionar este enfoque no se utilizan propiedades para los miembros internos sino variables en el constructor.

function TheatreSeats() {
  const seats = [];

  this.placePerson = function (person) {
    seats.push(person);
  };
}

// Alcance y cierre
// const greeting = "Hello world";

// function greets(person) {
//   const fullName = person.name + " " + person.surname;

//   function displayGreeting() {
//     console.log(greeting + " " + fullName);
//   }

//   displayGreeting();
// }

// greets({ name: "Ryan", surname: "Ray" });


/* En javascript podemos acceder al alcance externo incluso cuando la función que creó ha terminado */
const greeting = "Good Morning";
let displayGreeting;

function greets(person) {
  const fullName = person.name + " " + person.surname;

  return function () {
    console.log(greeting + " " + fullName);
  };
}

displayGreeting = greets({ name: "Ryan", surname: "Ray" });
displayGreeting();
