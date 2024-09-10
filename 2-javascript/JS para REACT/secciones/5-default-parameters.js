/* 5. Default parameters (Parámetros predeterminados) */


/* // ASÍ NO
function suma (a, b) {
    if (a === undefined || b === undefined){
        console.log("Debes introducir 2 valores");
        return;
    }
    return a + b;
}
*/

// ASÍ SÍ
// Para que no salga un error agregamos 0
function suma (a = 0, b = 0) {
    return a + b;
}

suma () // No devolvera nada pero no aparecerá error si no se pasa ningun valor en los parametros de la funcion