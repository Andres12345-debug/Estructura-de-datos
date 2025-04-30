//Metodo dentro de una funcion
const usuario = {
    id: '5',
    nombre: 'Sofia',
    edad: 30,
    //propiedad que funciona como metodo
    saludo: function(){
        return 'Hola! bienvenido al curso de estructura de datos';
    }
}
console.log(usuario.saludo())

const viaje = {
    tiempo: function(distancia, velocidad){
        return distancia/velocidad;
    }
}
console.log(viaje.tiempo(40,60))

const viaje02 = {
    distancia: 40,
    velocidad: 60,
    tiempo: function(){
        return this.distancia/this.velocidad;
    }
}
console.log(viaje02.tiempo())