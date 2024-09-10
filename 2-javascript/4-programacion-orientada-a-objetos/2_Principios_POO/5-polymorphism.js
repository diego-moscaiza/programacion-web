// - Polimorfismo es la capacidad de manejar múltiples tipos de datos de manera uniforme y nos permite crear código más compacto.

// - Formas comunes de admitir polimorfismo en lenguajes:
// 1. Métodos que toman parámetros de diferentes tipos (sobrecarga)
// 2. Gestión de tipo genérico, desconocido de antemano (polimorfismo paramétrico)
// 3. Expresiones cuyo tipo puede ser representado por una clase y clases derivadas de ella (polimorfismo de subtipo y polimorfismo de inclusión)

// - Ejemplo 1:
// 'x' podría ser una cadena o un valor numérico
function countItems(x) {
  return x.toString().length;
}

countItems(3);
countItems("hello world");

// - Ejemplo 2:
function sum(x, y, z) {
  x = x ? x : 0;
  y = y ? y : 0;
  z = z ? z : 0;
  return x + y + z;
}

sum(1, 3, 6);
sum(10, 20);
sum(3);

// - Ejemplo 3:
function sum2(x = 0, y = 0, z = 0) {
  return x + y + z;
}

const sum3 = (x = 0, y = 0, z = 0) => x + y + z;

// Javascript admite polimorfismo de una manera más directa que los lenguajes de tipos fuertes

// Polimorfismo paramétrico
// - El polimorfismo paramétrico nos permite trabajar con parámetros de cualquier tipo.

function Person(name, surname) {
  this.name = name
  this.surname = surname
}

function Programmer(language) {
  this.language = language
}

Programmer.prototype = new Person()

function writeFullName(p) {
  return p.name + " " + p.surname
}

const john = new Person("John", "Cartar")

const ryan = new Programmer("Python")
ryan.name ="Ryan"
ryan.surname="Ray"


writeFullName(john) //?
writeFullName(ryan) //?