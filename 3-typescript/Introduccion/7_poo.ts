/* POO */

interface Lang {
    nombre: string;
    // Con el simbolo de pregunta se vuelve 'opcional'.
    anio?: number;
    descripcion: Function;
}

let javascript: Lang = {
    nombre: 'JavaScript',
    anio: 1993,
    descripcion: function () {
        console.log(`${this.nombre} fue creado en ${this.anio}`);
    }
};

javascript.descripcion();