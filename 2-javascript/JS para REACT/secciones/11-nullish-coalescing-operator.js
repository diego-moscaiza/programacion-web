/* 11. Nullish coalescing operator '??' - (Operador de coalescente nulo) */

// Similar al operador ternario, pero sirve al comprobar un valor y si es null o undefined se le puede asignar un valor por defecto.

// - Ejemplo con el 'operador ternario'.
function suma(a, b ) {
    a = a == null ? 0 : a
    b = b == null ? 0 : b
    return a + b
}

// - Ejemplo con el 'operador de coalescente nulo'.
function suma(a, b ) {
    // Aquí está la diferencia.
    a = a ?? 0
    b = b ?? 0
    return a + b
}

// - Llamamos a suma
suma()

// - Ejemplo con REACT
function Avatar({user}) {
    return <img src={user.imageUrl ?? 'https://placeholder.it/kjlhsadkjhas'}/>
}