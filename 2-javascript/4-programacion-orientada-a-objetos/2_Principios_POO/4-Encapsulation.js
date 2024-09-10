// - La encapsulación consiste en ocultar la complejidad y agrupar la funcionalidad y propiedades
const company = {
  name: "Fazt Tech",
  employees: [],
  sortEmployees: function () {},
};

// - Cuando el comportamiento interno depende de propiedades públicas, frustramos el esfuerzo por ocultar detalles internos
company.employees = "some random string";
// company.sortEmployees() // error


// - Podríamos impedir el acceso directo a propiedades relevantes, reemplazándolas con métodos
function Company() {
  let employees = [];

  this.name = name;

  this.getEmployees = function () {
    return employees;
  };

  this.addEmployee = function (employee) {
    employees.push(employee);
  };

  this.sortEmployees = function () {};
}

class Company2 {
  constructor(name) {
    this.name = name;
    this.employees= []
  }

  getEmployees() {
    return this.employees;
  }

  addemployee(employee) {
    this.employees.push(employee);
  }

  sortEmployees() {}
}

// - Con este enfoque necesitamos usar métodos para obtener y agregar empleados a la lista.
const person = {
  name: "ryan",
  surname: "Ray",
  location: "London"
}

const company2 = new Company2("Fazt Web")
company2.addemployee(person)
company2.getEmployees() //?
company2
