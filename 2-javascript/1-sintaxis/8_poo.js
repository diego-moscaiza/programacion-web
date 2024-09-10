// PROGRAMACIÓN ORIENTADA A OBJETOS
// - Todo en Javascript es un objeto.

let lenguajes = {
    nombre: 'Javascript',
    año: 1995,
    descripcion: function () {
        // Aqui estamos usando el 'string literal'.
        console.log(`${this.nombre} fue creado en ${this.año}`)
    }
}

lenguajes.descripcion() // imprimirá el valor asignado
