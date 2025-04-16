let mensaje = "Hubo un error al preocesar la solicitud"
console.log(mensaje)

console.log(mensaje)
//Para traer solo una letra
console.log(mensaje[3])
//Acceder a la cantidad de caracteres del string
console.log('longitud', mensaje.length)
//Imprime letra por letra
for(let i = 0; i<mensaje.length; i++){
    console.log(mensaje[i])
}
//Template de string
const valor = 15;
let texto = `Bienvenidos al curso ${valor == 15? 'cierto': 'falso'} ${2 * 3}` ;
console.log(texto);
//Como funcionan los caracteres
console.log('oscar' == 'oscar')
// Para que muestre los tipos de datos con typeof
console.log(typeof'0', typeof 0)


//indeof
mensaje = "curso de javascript para principiantes"
console.log(mensaje.indexOf())

