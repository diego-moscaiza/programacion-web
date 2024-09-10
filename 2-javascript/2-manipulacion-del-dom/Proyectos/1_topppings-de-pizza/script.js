// CON 'getElementeById' se obtienen datos por el ID que tiene la etiqueta
// El ID es único, si hubiese mas de una etiqueta con el mismo ID, solo tomará el primero.
const contenedor = document.getElementById('contenedor');
const titulo = document.getElementById('titulo');


// 'innerHTML' muestra la sintaxis HTML dentro del valor declarado, o sea los descendientes.
//console.log(contenedor.innerHTML)

// 'typeof' muestra el tipo de dato del valor, que puede ser Object.
// console.log(typeof contenedor)

// Pero con el 'innerHTMl' muestra como STRING
// console.log(typeof contenedor.innerHTML)

// 'innerText' devolverá todo el texto de ese HTML con el marcado quitado
// Si colocamos 'typeof' lo mostrará como STRING
// console.log(contenedor.innerText)

// 'tagName' muestra el nombre de la etiqueta, por ejemplo H1, div, etc.
//console.log(titulo.tagName)


// CON 'getElemetByClassName' podemos obtener varios elementos con la misma clase.

const toppings = document.getElementsByClassName('topping');

// Imprimimos los datos en consola
// console.log(toppings)

// Imprimimos la cantidad de datos en consola
//console.log(toppings.length) 

// Podemos acceder a los indices
//console.log(toppings[0]) 

// Se puede acceder a cualquier tipo de dato siempre que se especifique, por ejm el ID.
// console.log(toppings[0].id) 



// CON 'getElemetByTagName()' podemos acceder a los elementos HTML. 

const misToppings = document.getElementsByTagName('li');

// Devuelve lo que hay en al etiqueta 'li'
//console.log(misToppings)

const toppingsFondoMarron = document.getElementsByTagName('fondo-marron')

// Devuelve lo que hay en la clase 'fondo-marron'
//console.log(toppingsFondoMarron)


// ----- SELECCIONAR ELEMENTOS CON ETIQUETAS CSS ---------

// Son utiles cuando es necesario un proceso de selección más especifico, como  conbinar id, clases, distintos estados como activo o enfocado.

// ---->'querySelector()' permite seleccionar el primero elemento que cumpla con el criterio señalado


const aceitunas = document.querySelector('#aceitunas')

// Devuelve la etiqueta completa donde se encuenta el id 'aceitunas'
// console.log(aceitunas);

// Se muestra como Object con 'typeof'.
// console.log(typeof aceitunas);

const primerToppigNaranja = document.querySelector('.topping.fondo-naranja')

// Mostrará la etiqueta completa qeu tenga las clases '.topping' y '.fondo-naranja'
//console.log(primerToppigNaranja)

const otroToppigNaranja = document.querySelector('ul li.fondo-naranja')

// En el parametro se puede escoger el elemento que se va a mostrar definiendo bien los selectores CSS'.
//console.log(otroToppigNaranja)

// Aqui usamos una caracteristica CSS en el parametro para no llamar al primero elemento que no sea marron.
const primerToppigNoMarron = document.querySelector('ul li:not(.fondo-marron)')
//console.log(primerToppigNoMarron)


// ---->'querySelectorAll()' permite seleccionar todos los elementos que cumplan con el criterio señalado

const toppingsFondoNaranja = document.querySelectorAll('.topping.fondo-naranja')

//Al imprimir la información muestra un 'NodeList' que muestra todos los nodos que tengan el selector declarado en el parametro
//console.log(toppingsFondoNaranja)

//Se puede acceder a los indices del NodeList y mostrar nodo por nodo
//console.log(toppingsFondoNaranja[0])
//console.log(toppingsFondoNaranja[1])

// ------- ASIGNAR ESTILO CON JS ------------- //

// Se peude modificar los estilos de una etiqueta HTML llamando a la función 'querySelector' y en el parametro la clase o id que se desee.

const primerTopping = document.querySelector('.topping')

//Despues de declarar la constante, se coloca la función style y luego el atributo y luego asignar lo que se desee estilar.

//primerTopping.style.backgroundColor = 'blue'
//primerTopping.style.color = '#6dff00'
//primerTopping.style.textTransform = 'uppercase'


// ---------- TEXTO EN EL DOM ----------- //

// ----> Acceder al texto <---- //
// Se puede usar innerHTML, innerText, textContent, pero cada uno tendra diferente representación.


const listaDeToppings = document.getElementById('lista-toppings')

/*console.log('> innerHTML')
console.log(listaDeToppings.innerHTML)*/

/*console.log('> innerText')
console.log(listaDeToppings.innerText)*/

/*console.log('> textContent')
console.log(listaDeToppings.textContent)*/


// ----> Modificar al texto <---- //

const tituloMod = document.getElementById('titulo')

// Este es un ejemplo de como modificar el texto HTML con JS
//titulo.innerText = 'Mis Toppings Favoritos'


// ----> Modificar atributos de un elemento <---- //

const enlace = document.getElementsByTagName('a')

//Accedemos al indice del HTML Collection y luego usamos la funcion getAttribute() y en el parametro declaramos al 'href' de la constante 'enlace'.
//console.log(enlace[0].getAttribute('href'))

// Podemos borrar el atributo asi:
//console.log(enlace[0].removeAttribute('href'))

// Podemos cambiar el atributo asi:
//console.log(enlace[0].setAttribute('href', 'https://www.freecodecamp.org'))

// --------- Clases de CSS en JS ----------- //


const miPrimerTopping = document.querySelector('.topping')

// El resultado es un DOMTokenList
//console.log(miPrimerTopping.classList)


// -----> Agregar Clases  <------ //

//miPrimerTopping.classList.add('texto-verde')

//console.log(miPrimerTopping.classList)


// -----> Verificar existencia de Clases  <------ //

//const verificarAtributo = miPrimerTopping.classList.contains('fondo-marron')

//console.log(verificarAtributo)

// Otra forma:
//console.log(miPrimerTopping.classList.contains('fondo-marron'))


// -----> Eliminar Clases  <------ //

//const removerAtributo = miPrimerTopping.classList.remove('topping')

//console.log(removerAtributo)

// Otra forma:
//console.log(miPrimerTopping.classList.remove('topping'))

// --------> Creación de Elementos <--------- //

// Se puede crear elementos HTML con JS

// Este elemento ya existe en HTML, y es donde se agregará el nuevo elemento
const listaToppings = document.getElementById('lista-toppings')

// Este es el nuevo elemento
//const toppingNuevo = document.createElement('li');


// --- Agregar Elementos --- //

// Con el metodo 'append()' y también se puede usar 'appendChild()''

//listaToppings.append(toppingNuevo)

// Ahora agregamos estilos y texto al nuevo elemento

//toppingNuevo.classList.add('topping', 'fondo-marron')
//toppingNuevo.innerText= "Queso Extra"


// --- Remover Elementos --- //

// Con el metodo 'remove()'

//toppingNuevo.remove()
//listaToppings.remove()


// --------> Recorrer DOM <--------- //

const listaToppin = document.getElementById('lista-toppings')

// Muestra todo el HTMLCollection
// console.log(listaToppin.children)

// Muestra el texto de los elementos hijos
//console.log(listaToppin.firstChild)
//console.log(listaToppin.lastChild)

// Muestra el elemento como etiqueta HTML
//console.log(listaToppin.children[0])
//console.log(listaToppin.firstElementChild)
//console.log(listaToppin.firstElementChild.firstElementChild)


// Se puede acceder a los elementos hermanos.

// Con este metodo se muestra los elementos anteriores al declarado.
//console.log(listaToppin.previousElementSibling)

// Con este metodo se muestra los elementos posteriores al declarado.
//console.log(listaToppin.nextElementSibling)

// Para acceder a los Nodos se colocaria así:

//console.log(listaToppin.previousSibling) //o tambien .nextSibling

// parentElement es el padre del elemento actual
//console.log(listaToppin.parentElement)

// parentNode es el padre del nodo actual
//console.log(listaToppin.parentNode)

/* La única diferencia es que la propiedad `parentElement` puede ser `null` si el nodo padre no es un nodo de elemento: */


// --------> EVENTOS DEL DOM <--------- //

// Un suceso que ocurre en el sitio web como resultado de interacción con el usuario o por otra causa como cambios en el estado del dispositivo o de la ventana.

// Eventos comunes: curso y teclado.

/*Conceptos importantes: 
Elemento target(blanco o lugar a donde se dirige), 
Trigger (Desencadenante),
Event Handler (Funcion que se ejecuta cuando ocurre un evento),
Event Listener (Funcion que escucha a un evento cuando este ocurra).*/


// --------> EVENTOS DEL HTML <--------- //

// Atributos HTML: 'onclick' 

// Funcion en JS:

/*function mostrarClick(topping) {
    console.log(topping)
}*/

// ----- AddEventListener ----- //

// ---> EJEMPLO 1:

// Definimos la constante para obtener un elemento HTML pr su ID
//const albaca = document.getElementById('albaca')

// Declaramos la funcion 'mostrarClic()'
/*function mostrarClick(e) { // usamos topping, e como parametros
    console.log(e.target.innerText) // se imprimime usando los parametros
}*/

// Con el parametro 'topping' en la funcion: 'mostrarClick', muestra un Pointer Elemenet.
// Con 'e.target' se muestra la etiqueta HTML.
// Con 'e.target.innerText' muestra solo el texto de la etiqueta.

//albaca.addEventListener('click', mostrarClick)


// ---> EJEMPLO 2:

const topping = document.getElementsByClassName('topping')

function mostrarClickTopping(e) { 
    console.log(e.target.innerText)
}

for (const topping of toppings) {
    // Muestra todas las etiquetas HTML que tienen la clase topping
    //console.log(topping)

    //Ahora muestra el texto del cada uno de los elementos de la lista de toppings
    topping.addEventListener('click', mostrarClickTopping)
}

// ALTERNATIVA EN FUNCIONC FLECHA :

// Pasando como segundo parametro la primera funcion desde el argumento o parametro.
/*
for (const topping of toppings) {
    topping.addEventListener('click', (e) => { 
        console.log(e.target.innerText)
    })
} */











































