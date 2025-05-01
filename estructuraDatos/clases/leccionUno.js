class Persona {
constructor(nombre, apellido){
    //El metodo get no se tiene que llamar igual a la propiedad por eso se le agrega _
    this._nombre = nombre;
    this._apellido =apellido;
}
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}

//Creando un objeto 
let persona1 = new Persona('Juan', 'Perez');
console.log(persona1)

let persona2 = new Persona('Maria', 'Gonzalez');
console.log(persona2)

//Accediendo a los metodos get set de la clase Persona
console.log(persona1.nombre) //get nombre
//nuevo valor al atributo de la clase
persona1.nombre = 'Juandacho' //set nombre y se le pasa como parrametro (nombre)
console.log(persona1.nombre)

//Hoisting
//El hoisting es un comportamiento de JavaScript en el que las declaraciones de variables y funciones son elevadas a la parte superior de su contexto de ejecución. Esto significa que puedes usar variables y funciones antes de haberlas declarado en el código.
let persona3 = new Persona('Karla', 'Ruiz');
console.log(persona3);


