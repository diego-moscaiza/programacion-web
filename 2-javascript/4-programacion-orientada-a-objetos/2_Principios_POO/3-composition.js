// - La composición es un tipo fuerte de agregación.
// - Cada componente no tiene vida independiente sin su dueño.

const person = {
  name: "Ryan",
  surname: "Ray",
  address: { // - Este objeto depende de su dueño, si la persona es eliminada también este objeto.
    street: "123 Baker Street",
    city: "London",
    country: "United Kingdom",
  },
};
