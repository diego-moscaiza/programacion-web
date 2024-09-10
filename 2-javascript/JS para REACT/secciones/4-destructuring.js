/* 4.  Destructuring (Desestructurando) */

// Definimos una constante
const cuadrado = {
    x: 10,
    y: 10,
}

/* // ASÍ NO
    function calcularArea(cuadrado){
        const {x, y} = cuadrado;
        return x * y;
    }
*/

// ASÍ DEBE SER.
// Útil para pasar propiedades a un COMPONENETE en REACT.
function calcularArea({x, y}) {
    return x * y;
}

calcularArea(cuadrado)

// Otro ejemplo
// Así es mas legible el JSX.
function Avatar({ userName, url}){
    return <img src={url} alt={userName}/>
}