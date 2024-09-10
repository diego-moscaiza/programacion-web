/* Condicionales */

// 1. If, else - else if.

let entero1: number = 100;

if (entero1 == 99) {
    console.log('Puede Ingresar');
} else if (entero1 == 100) {
    console.log('No puede ingresar');
} else {
    console.log('No puede ingresar');
}

// 2. Switch.

// - Usamos 'casting' que significa que una variable va a tener solamente un tipo de valor.
type opciones = 'verde' | 'amarillo' | 'rojo';
let color1: string = 'amarillo';

switch (<opciones>color1) {
    case 'verde':
        console.log('Éxito');
        break;
    case 'amarillo':
        console.log('Advertencia');
        break;
    default:
        console.log('Error');
        break;
}