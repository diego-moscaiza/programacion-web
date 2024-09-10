/* 1. Template literals (Plantillas de cadenas) */

// Decalracion de variables
const nombre = "Joel";
const apellido = "Garrido";


// - Con concatenacion
console.log(nombre + "" + apellido)

// - Con interporlacion (template literals)
console.log(`${nombre} ${apellido}`);


//Funcion que retornará un texto con una clase CSS

function Component({background}) {
    return (<div className={`bg-color-${backgroundColor}`}>Hola</div>);
}