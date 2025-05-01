import { Persona } from "./persona.js";

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido); //llama al constructor de la clase padre
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }
  //Sobrecritura de un metodo
  nombreCompleto() {
    return super.nombreCompleto() + " " + this._departamento;
  }

}
//objetos de la clase persona
let persona1 = new Persona("Juan", "Pérez");
console.log(persona1);

//modificar el nombre y apellido y agrega el departamento
let empleado1 = new Empleado("Pedro", "Gómez", "Sistemas");
console.log(empleado1);

//El nombre y apellido se encuentran en la clase padre entonces se estan heredando
console.log(empleado1.nombre); //Pedro

//Traemos metodo de la clase padre
console.log(empleado1.nombreCompleto());

//To string
console.log( empleado1.toString())