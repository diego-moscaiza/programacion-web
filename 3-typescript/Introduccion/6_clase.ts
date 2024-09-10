/* Clases */

interface Lang {
    nombre: string;
    // Con el simbolo de pregunta se vuelve 'opcional'.
    anio?: number;
    descripcion: Function;
}

class Lenguaje implements Lang {
    nombre: string;
    anio?: number;

    constructor(nombre: string, anio: number) {
        this.nombre = nombre;
        this.anio = anio;
    }
    descripcion() {
        console.log(`${this.nombre} fue creado en ${this.anio}`);
    };
}

let html = new Lenguaje('HTML', 1993);
let css = new Lenguaje('CSS', 1996);
let js = new Lenguaje('JS', 1995);

html.descripcion();
css.descripcion();
css.descripcion();