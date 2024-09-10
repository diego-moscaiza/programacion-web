// Enfoque basado en convenciones

// - Todas las propiedades y métodos son accesibles al público, por lo que existen algunas formas de intentar resolver este problema

// - Podemos usar el símbolo de subrayado para los miembros internos, esto es solo una convección, técnicamente podemos acceder a las propiedades de todos modos.

function TheatreSeats() {
  this._seats = [];
}

TheatreSeats.prototype.placePerson = function (person) {
  this._seats.push(person);
};

const theatreSeats = new TheatreSeats();
theatreSeats.placePerson({ name: "Ryan", surname: "Ray" });

theatreSeats;