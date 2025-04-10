const calificaciones = [20, 30, 40, 50] //Array de calificaciones numeros
const mensajes = ["Holas", "Gentesa", "Zom", "Est"]    //Array de mensajes string


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

//////////Meoto reduce////////////////
//Recorre el array y devuelve un nuevo valor acumulado
const suma = calificaciones.reduce( (acumulador, valor, indice) =>{
   return acumulador + valor;
}, 0);
console.log('SUMA',suma); //imprime el nuevo valor acumulado

const mensajeFinal = mensajes.reduce((acumulador, valor) => acumulador += valor + ' ', ' '); //agrega el valor de cada elemento del array al acumulador y devuelve un nuevo string con los valores concatenados
console.log(mensajeFinal); //imprime el nuevo string con los valores concatenados

//Filtrar y encontrar elementos en un array
//Recorre el array y devuelve un nuevo array con los valores que cumplan con la condicion
const resFilterCalificaciones = calificaciones.filter((valor, indice) => {
      return valor >= 30; //devuelve un nuevo array con los valores que cumplan con la condicion   
})
console.log('filter', resFilterCalificaciones); //imprime el nuevo array con los valores que cumplan con la condicion

//Find 
const arregloFindCalificaciones = calificaciones.find((valor, indice) => {
return valor >= 30; //devuelve el primer valor que cumpla con la condicion
})
console.log('find', arregloFindCalificaciones); //imprime el primer valor que cumpla con la condicion


//Some
const resFilterMensajes = mensajes.some(mensajes => {
   return mensaje = 'Hola'; //devuelve true si al menos un elemento cumple con la condicion
})
console.log(resFilterCalificaciones); //imprime true si al menos un elemento cumple con la condicion

//////////Flat///////////
const parciales = [[10, 8,], [7,5]]; //Array de parciales bidimensional
const ouput = parciales.flat();
console.log('flat', ouput); //imprime el nuevo array con los valores aplanados

/////Sort/////////
const arregloSort = calificaciones.sort();
console.log('sort',arregloSort); //imprime el nuevo array con los valores ordenados de menor a mayor

//Comparar ordenar valores numericos
const arregloSotComparar = calificaciones.sort((a, b) => {
if(a > b) return 1; //si a es mayor que b devuelve 1
if(a < b) return -1; //si a es menor que b devuelve -1
 return 0; //si a es igual a b devuelve 0
})
console.log('sort comparar', arregloSotComparar); //imprime el nuevo array con los valores ordenados de menor a mayor

//ordenar los textos
const arreglarSortTextos = mensajes.sort((a, b) => {

   if(a > b) return 1; //si a es mayor que b devuelve 1
   if(a < b) return -1; //si a es menor que b devuelve -1
   return 0; //si a es igual a b devuelve 0
})
console.log('sort textos', arreglarSortTextos); //imprime el nuevo array con los valores ordenados de menor a mayor

//Mas textos
const arregloSortTextos = mensajes.sort((a, b) => {
if(a[1] < b[1]) return -1; //si a es mayor que b devuelve 1
if(a[1] > b[1]) return 1; //si a es menor que b devuelve -1   
return 0; //si a es igual a b devuelve 0
})
console.log('sort textos', arregloSortTextos); //imprime el nuevo array con los valores ordenados de menor a mayor
