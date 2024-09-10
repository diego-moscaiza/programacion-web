/* 10. Async/Await (Metodos asíncronos) */

/* La finalidad de las funciones async/await es simplificar el comportamiento del uso síncrono de promesas y realizar algún comportamiento específico en un grupo de Promises. Del mismo modo que las Promises son semejantes a las devoluciones de llamadas estructuradas, async/await se asemejan a una combinación de generadores y promesas. */

// NOTA: Anteriormente se creó un método llamado '.then()' que también retorna una promesa.

const ul = document.createElement('ul');
const li = document.createElement('li');

// - Consumimos una API:

async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json()
    // console.log(data)
    data.forEach(function (post) {
        const li = document.createElement('li');
        li.innerText = post.title
        ul.appendChild(li)
    });
    document.body.appendChild(ul);
}

loadData()
console.log("linea 2")