/* - Ejemplo 1*/

//las comillas dobles son opcionales en las claves
const john = {
  name: "John",
  surname: "Smith",
};

// pero si el nombre no es un nombre de variable válido, debes usar comillas dobles.
const joe = {
  "first-name": "joe", // double quotes are needed in "first-name"
  "second-name": "Carter",
};


// objeto anidado, puede asignar un objeto a otro objeto
let ryan = {
  name: "Ryan",
  surname: "Ray",
  address: {
    // un objeto anidado
    street: "13 duncannon Street",
    city: "London",
    country: "United Kingdom",
  },
};


// para acceder a los valores almacenados en propiedades que puede utilizar "notación de puntos".
let name = john.name;

// o cadena entre corchetes
// esto es obligatorio si el nombre no es un nombre de variable válido
let firstname = joe["first-name"];

// si accedemos a una propiedad inexistente, queda como 'Undefined'
let age = joe.age; // Undefined

// si asignamos un valor a una propiedad aún no definida, en realidad estamos creamos esta propiedad
joe.age = 28;


/* - Ejemplo 2 */

// Podemos comenzar con una definición básica y agregar gradualmente más propiedades.
let newUser = {};

newUser.name = "Greg";
newUser.surname = "House";
newUser.address = {
  street: "123 dunncannon street",
  city: "London",
  country: "United Kingdom",
};
newUser.age = 28;

// besides being able to create properties dinamically, we can destroy it
delete newUser.age;
