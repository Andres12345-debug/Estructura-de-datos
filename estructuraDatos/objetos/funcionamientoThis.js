//This hace referencia al objeto que lo contiene, en este caso el objeto usuario
const usuario = {
    id: 5,
    nombre: 'Sofia',
    edad: 38,
    saludo: function(){
        return `Hola, bienvenido ${this.nombre}`
    },
    getEdad: function(edad){
        return edad;
    }
}
console.log(usuario.saludo())
console.log(usuario.getEdad(78))