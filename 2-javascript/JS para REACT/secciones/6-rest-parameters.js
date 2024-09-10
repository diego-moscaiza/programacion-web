/* 6. Rest Parameters and spread operator (Parámetros de descanso y el operador de extensión) */

const array = [1, 2 ,3, 4, 5]
const otroArray = [6, 7, 8, 9, 10]

// - Usando la funcion "concat()"
// const newArray = array.concat(otroArray)

// - Usando Spread Operator
const nuevoArray = [...array, ...otroArray]
console.log(nuevoArray)

// - Es útil al momento de agrupar objetos en un arreglo ya que se necesita de menos código.
// - Todo se une en un arreglo sin necesidad de concatenar unos con otros

// - Ejemplo:

const objeto1 = {
    a: "a",
    b: "b",
    c: "c"
}

const objeto2 = {
    d: "d",
    e: "e",
}

// - Usando la función 'assign()'
// const nuevoObjeto = Object.assign({}. objeto1, objeto2)
// console.log(nuevoObjeto)

// - Usando 'spred operator'
const newObjeto = [... objeto1, ... objeto2]
console.log(newObjeto)

// - Otro ejemplo con 'react.js'

// Puede funcionar con normalidad
function Componente({id, name, username, profile}) {
    return <NuevoComponente key={id} name={name} username={username} profile={profile}/>
}

// Una forma mas abreviada en las propiedades
function Componente({id, ...props}) {
    return <NuevoComponente key={id} {...props}/>
}