/* 2. Shorthand property names (Nombres de propiedad abreviados) */

// - Primer ejemplo:

const Nombre = "Carlos";
const edad = 36;
const Youtube = "https://youtube.com";

const persona = {
    Nombre, // Se puede declarar la variable con el mismo nombre sin asignarlo y JS lo entiende.
    edad: edad, // No es necesario asignar la variable con el mismo nombre.
    Youtube // 👍
}

console.log(persona);

// - Segundo ejemplo:

// - Componente que recibe props o parametros. Dentro se declaran estados y luego se inicializa con los mismos parametros sin hacer "clave : valor".

function Component({initialState, totalCount}) {
    const [state, setState] = useState({initialState, totalCount});
}