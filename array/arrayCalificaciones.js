const calificaciones = [20, 30, 40, 50]
console.log(calificaciones)

calificaciones[3] = 100 //agregamos el valor 100 en la posicion 20 del array, el array se expande automaticamente
console.log(calificaciones[20]); //trae el valor 10 
console.log(calificaciones); //trae el array completo con el valor 10 en la posicion de julian
console.log(calificaciones.length); //trae la longitud del array, en este caso 4

for(let i = 0; i < calificaciones.length; i++){
    console.log(calificaciones[i]); //imprime cada uno de los elementos del array
}
for(calificaciones of calificaciones){
    console.log(calificaciones); //imprime cada uno de los elementos del array
}

//push agrega más elementos al final del array
let coordenadas = [10, 20, 30]
coordenadas.push(40) //agregamos el valor 40 al final del array
console.log('push', coordenadas) //imprime el array completo con el valor 40 al final
const posicion = coordenadas.indexOf(20) //buscamos la posicion del valor 20 en el array
console.log(posicion) //imprime la posicion del valor 20 en el array



if(posicion < 0){
    console.error("No existe el valor 20 en el array") //si no existe el valor 20 en el array imprime este mensaje
}else{
    console.log("El valor existe en el array ${posicion}") //si existe el valor 20 en el array imprime este mensaje
}

//Unshift
coordenadas.unshift(17.27) //agregamos los valores 17 y 27 al inicio del array
console.log(coordenadas) //imprime el array completo con los valores 17 y 27 al inicio

//Join
