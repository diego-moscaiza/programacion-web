// - Esta es una representación literal de un objeto.: { }
console.log( { } )

// - Un objeto es un contenedor de valores combinados para formar un único dato estructurado
// Los objetos tienen propiedades y métodos.

// Las propiedades son datos.
const person = {
  name: "John", // Propiedad
  surname: "Carter",
};

// - Los métodos son solo propiedades con función como valor.

const person2 = {
  name: "Ryan",
  lastname: "Ray",
  sayHello: function () {
    return "Hello I'am Ryan"
  }
}

// - Un objeto es una *lista* de pares clave-valor
const user =  {
  username: "fazt", // clave: valor
  email: "fazt@gmail.com",
  password: "somepassword",
  age: 100,
  hobbies: ["read", "programming", "run"]
}

console.log(user)

// Al igual que las listas, los objetos podrían estar vacíos.
const emptyObject = {}
