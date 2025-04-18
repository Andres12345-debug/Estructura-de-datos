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
console.log(mensaje[mensaje.indexOf('javascript')])

//LastIndexOf ayudan a obtener indices con base a un texto
console.log(mensaje.indexOf('a'))

//Slice indicie inicial y finalal
let res = mensaje.slice(3, 10);
console.log(res)

//Sustr indice y el numero de caracteres
res = mensaje.substring(3,10)
console.log(res)

//Replace permite reemplazar texto
res = mensaje.replace('javascript', 'Php')
console.log(res, mensaje)

//toUpperCase para las mayusculas
res = mensaje.toUpperCase();
console.log(res);
//LowerCase Minusculas
res = mensaje.toLocaleLowerCase();
console.log(res);

//Concat para concatenar
let primerNombre = 'Juan '
let segundoNombre = 'David '
let apellido = 'Montañez '
res = primerNombre.concat(segundoNombre , apellido , ' Abogado');
console.log(res)

//Trim borrar espacios vacios de mas antes de inciar y despues de terminar
let mensajeHTTP = '    Transaccion exitosa '
console.log(mensajeHTTP.trim())

//Split covertir cadena de texto en arreglo
const mensajeError = 'Busqueda no devolvio resultados'
console.log(mensajeError.split(' '));
