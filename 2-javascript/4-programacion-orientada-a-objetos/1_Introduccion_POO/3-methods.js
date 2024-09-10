// - Mientras que las propiedades representan datos, los métodos representan acciones
function showFullName() {
  return "John Smith";
}

const john = {};
john.showFullName = showFullName;

// - Podemos asignar un método dentro de su representación literal
const joe = {
  name: "Joe",
  surname: "Carter",
  showFullName: function () {
    return "Joe Carter";
  },
};

// - En ECMASCRIPT 2015, también podemos asignar un método de esta manera
const ryan = {
  name: "Ryan",
  surname: "Ray",
  showFullName() {
    return "Ryan Ray";
  },
};

// - El último método siempre muestra el mismo nombre, para evitarlo, podemos usar esta palabra clave.
ryan.name = "Braian"
ryan.showFullName = function () {
  return this.name + " " + this.surname;
};