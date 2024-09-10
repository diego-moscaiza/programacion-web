// -  La API Fetch otorga una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas
// NOTA: Fetch en sí es una promesa.

// - Declaramos constantes.
const ul = document.createElement('ul');
const li = document.createElement('li');

// - Consumimos una API:
let data = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        // - Obtenemos la respuesta de la función despues de que se haya completado:
        // console.log(response)

        // - Obtenemos los datos en formato json.
        return response.json()
    }).then(function(data) {
        // - Mostramos los datos json en consola:
        console.log(data)
        data.forEach(function (post) {
            const li = document.createElement('li');
            li.innerText = post.title
            ul.appendChild(li)
        })
        document.body.appendChild(ul);
    })
