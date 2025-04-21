// Problema 1: Verificar si una palabra está en una frase
//     Dada una frase y una palabra, determina si la palabra existe en la frase.
//     const frase = "El gato está en el tejado";
//     const palabra = "gato";
const frase = "El gato está en el tejado";
const palabra = "gato";
if (frase.indexOf(palabra) !== -1) {
  console.log(`La palabra "${palabra}" está en la frase.`);
} else {
  console.log(`La palabra "${palabra}" no está en la frase.`);
}

frase = "curso de javascript para principiantes";
console.log(frase[frase.indexOf("javascript")]);

// Problema 2: Encontrar la posición de una letra
//     Dado un string, encuentra la posición de la primera aparición de la letra "e".
fraseBuscar = "Hola como esta gente";
console.log(fraseBuscar.indexOf("e"));

// slice
//     Problema 1: Obtener los primeros 5 caracteres
let obtenerParametro = "Hola como esta gente";
console.log(obtenerParametro.slice(0, 5));

// Problema 2: Obtener el dominio de un correo
//     Dado un correo electrónico, usa slice para obtener solo el dominio (ej: "gmail.com" de "usuario@gmail.com").
let correos = "duglas@gmail.com";
console.log(correos.slice(6));

// replace
//     Problema 1: Reemplazar palabras malas
//     Dada una frase, reemplaza la palabra "tonto" por "inteligente".
let palabrotas = "Hola se que eres un muy tonto para esta tarea, suerte";
console.log(palabrotas.replace("tonto", "inteligente"));

// Problema 2: Corregir errores de escritura
// Corrige la palabra mal escrita "Javascript" (debería ser "JavaScript").
let corregir = "Me gusta mucho aprender Javascript";
console.log(corregir.replace("Javascript", "JavaScript"));

// toUpperCase
//      Problema 1: Convertir un mensaje a mayúsculas
//     Dado un mensaje de usuario, conviértelo completamente a mayúsculas.
let mensaje = "Hola familia como estan";
console.log(mensaje.toUpperCase());

// Problema 2: Crear un grito
// Dado un texto, conviértelo a mayúsculas y agrega "!!!" al final para simular un grito.
let mensajeGrito = "Hola familia como estan";
console.log(mensajeGrito.toUpperCase() + " !!!");

// toLowerCase
//     Problema 1: Comparar correos sin importar mayúsculas
//     Compara dos correos electrónicos para verificar si son iguales sin importar mayúsculas.
let correosUno = "julian@gmail.com";
let correosDos = "JULIAN@gmail.com";
if (correosUno.toLocaleLowerCase() == correosDos.toLocaleLowerCase()) {
  console.log("Los correos son iguales");
} else {
  console.log("Los correos son diferentes");
}

// Problema 2: Normalizar texto para búsqueda
// Dado un texto y una búsqueda del usuario, convierte ambos a minúsculas antes de usar indexOf.

let textoUsuario = "Aprender a cocinar";
let busqueda = "cocinar";
const textoNormalizado = textoUsuario.toLocaleLowerCase();
const busquedaNormalizada = busqueda.toLocaleLowerCase();
if (textoNormalizado.indexOf(busquedaNormalizada) !== -1) {
  console.log("La palabra fue encontrada en el texto.");
} else {
  console.log("La palabra no está en el texto.");
}

//concat
// Problema 1: Crear nombre completo
// Dadas dos variables nombre = "Julian" y apellido = "Montañez", únelas con un espacio en medio.
const nombre = "Julian";
const apellido = "Montañez";
const respuesta = nombre.concat(" ", apellido);
console.log(respuesta);

// Problema 2: Armar un mensaje personalizado
//     Concatena varias partes como:
//     js
//     const saludo = "Hola, ";
//     const nombre = "Luis";
//     const mensaje = " bienvenido a nuestra plataforma.";

const saludoPersona = "Hola, ";
const nombrePersona = "Luis";
const mensajePersona = " bienvenido a nuestra plataforma.";
const respuestaPersona = saludoPersona.concat(nombrePersona, mensajePersona);
console.log(respuestaPersona);

// trim
// Problema 1: Limpiar entrada de usuario
// Dado un string con espacios al inicio y al final, elimínalos.
let mensajeError = ' Hola, hubo un error 404 '
console.log(mensajeError.trim())
// Problema 2: Validar campo de texto
//     Verifica si un input que parece vacío en realidad tiene solo espacios. Usa trim() para validar si está vacío.
function validarTexto(input) {
  if (input.trim() === "") {
      return "El campo está vacío o contiene solo espacios.";
  } else {
      return "El campo tiene texto válido.";
  }
}
// Ejemplo de uso
const resultado = validarTexto("   "); // Este es solo un ejemplo, puedes probar diferentes entradas
console.log(resultado); // Salida: "El campo está vacío o contiene solo espacios."

// split
//     Problema 1: Separar palabras
//     Dado un string: "Hola cómo estás", conviértelo en un array de palabras.
const mensajeSplit = 'Hola cómo estás'
console.log(mensajeSplit.split(' '));
// Problema 2: Obtener día, mes y año
// Dada una fecha como "2025-04-17", usa split para obtener los valores por separado.  
const fecha = '2025-04-17'
console.log(fecha.split('-'))
