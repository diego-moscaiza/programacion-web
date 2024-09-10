/*  8. Ternary Operator '? - :'(Operador ternario)  */

// El operador ternario es una alternatica a 'If - else'

// - Ejemplo 1:
const coche = {
    marca : "Tesla",
    modelo: "Cybertruck"
};

// - Usando 'If - else'
/*
let modelo
if (coche.modelo) {
    modelo = coche.modelo
} else {
    modelo = "XD"
}
*/

// - Usando el 'operador ternario'
let modelo = coche.modelo ? coche.modelo: "XD"

// - Llamamos al modelo
modelo;


// - Ejemplo 2:

// Este es un renderizado condicional:
function ListaTareas ({tareas}) {
    return (
        <React.Fragment>
            {tareas.length ? (
                <ul>
                    {tareas.map}
                </ul>
            ) : (
                <div>No hay tareas</div>
            )}
        </React.Fragment>
    )
}