/* 12. Optional chaining '?.' (Encadenamiento opcional) */

/* Esto permite acceder de forma segura a variables anidadas dentro de una estructura dentro de un objeto antes para comprobar el un segundo o tercer nivel si esa propidad en el objeto existia se tenia que realizar varias comprobaciones.*/

// - Ejemplo 1:
const user = {
    nombre,
    edad,
    location: {
        x,
        y,
        city: {/**/}
    }
}

// - Usando doble ampersand '&&'.
/* const zipcode = user && user.location && user.location.city && user.location.city.zipcode */

// - Usando el operador del 'encadenamiento opcional' = '?.'
// - Esto comprueba si existe cada uno dentro de la variable anterior
const zipcode1 = user?.location?.city?.zipcode

// Ejemplo con una función en react.js
function User () {
    return (<div>ZIP CODE: {user?.location?.city?.zipcode}</div>)
}