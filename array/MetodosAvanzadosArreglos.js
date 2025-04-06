const calificaciones = [20, 30, 40, 50] //Array de calificaciones numeros
const mensajes = ["Hola", "Gente", "Como", "Estan"]    //Array de mensajes string


/////////Metodo Foreach//////////

//Recorre el array y ejecuta una funcion para cada elemento del array
calificaciones.forEach(function(value, indice){ //value es el valor del elemento y indice es la posicion del elemento en el array
   console.log(value,indice); //imprime el valor y la posicion del elemento en el array
});

//Metodo ForEach con una funcion externa
function recorrido(value, indice){ //funcion que recorre el array y ejecuta una funcion para cada elemento del array
    console.log(value,indice); //imprime el valor y la posicion del elemento en el array
}
calificaciones.forEach(recorrido); //ejecuta la funcion recorrido para cada elemento del array calificaciones

calificaciones.forEach((value) => { //recorre el array y ejecuta una funcion para cada elemento del array
    console.log(value); //imprime el valor y la posicion del elemento en el array
});

///////Metodo Map////////

//Recorre el array y devuelve un nuevo array con los valores modificados
const respuestaMap = calificaciones.map((valor, indice) => {
   return valor * 10; //multiplica cada elemento del array por 10 y devuelve un nuevo array con los valores modificados
})
console.log(respuestaMap, calificaciones); //imprime el nuevo array con los valores modificados

const respuestMapMensajes = mensajes.map(valor => valor + '**'); //agrega el valor ** a cada elemento del array 
console.log(respuestMapMensajes); //imprime el nuevo array con los valores modificados

//Meoto reduce
//Recorre el array y devuelve un nuevo valor acumulado
const suma = calificaciones.reduce( (acumulador, valor, indice) =>{
   return acumulador + valor;
}, 0);
console.log(suma); //imprime el nuevo valor acumulado

const mensajeFinal = mensajes.reduce((acumulador, valor) => acumulador += valor + ' ', ' '); //agrega el valor de cada elemento del array al acumulador y devuelve un nuevo string con los valores concatenados
console.log(mensajeFinal); //imprime el nuevo string con los valores concatenados

//Filtrar y encontrar elementos en un array
//Recorre el array y devuelve un nuevo array con los valores que cumplan con la condicion