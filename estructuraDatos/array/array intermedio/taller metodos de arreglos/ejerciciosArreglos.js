const frutas = ["Manzana", "Banano", "Mango"];
frutas.forEach(function (value, indice) {
  //value es el valor del elemento y indice es la posicion del elemento en el array
  console.log(value, indice); //imprime el valor y la posicion del elemento en el array
});
//EJERCICIO 2
const carrito = [
  { producto: "Pan", cantidad: 2 },
  { producto: "Leche", cantidad: 3 },
  { producto: "Huevos", cantidad: 1 },
];
const suma = carrito.reduce((acumulador, valor) => {
  return acumulador + valor.cantidad;
}, 0);
console.log(suma); //imprime el nuevo valor acumulado

//EJERCICIO 3 MAP Fórmula: F = C * 1.8 + 32
//Este motodo sirve para hacer operaciones sin dañar el valor original
const temperatura = [2, 3, 4];
respuestaMap = temperatura.map((valor, indice) => {
  return valor * 1.8 + 32;
});
console.log(respuestaMap, temperatura);

//Problema 2: Formatear correos
const nombres = ["Adrian", "Duglas", "Clara"];
respuestaCorreos = nombres.map((valor) => {
  return valor + "@gmail.com";
});
console.log(respuestaCorreos);

//Problemas de Reduce 
//problema 1

const ventas = [
  { producto: "Zapatos", precio: 120 },
  { producto: "Camisa", precio: 60 },
];
const sumaConInicial = ventas.reduce(
    (acumulador, valorActual) => {
      return  acumulador + valorActual.precio
    },
    0
)
console.log('El resultado de las ventas es: ',sumaConInicial)

//Ejercicio 2 unir palabras con reduce
const arrayPalabras = ["Hola", "familia", "como van", "bien o que"];
const unirPalabras = arrayPalabras.reduce(
    (acumulador, valorActual) => {
        return acumulador + (acumulador ? " " : "") + valorActual;
    },""
);
console.log("El resultado es:", unirPalabras);

//Ejercicios filter
const anios = [
    {personas: "Daniel", edad: 25},
    {personas: "Brian", edad: 24},
    {personas: "Pepe", edad: 12},
    {personas: "Sergio", edad: 17}
]
const resultado = anios.filter((anio) => {
    return anio.edad >= 18;
});
console.log("Estas personas son mayores de edad: ", resultado);

//Obtener productos con stock
const productos = 
[
    {producto: "Agua", stock: 25},
    {producto: "Gaseosa", stock: 4},
    {producto: "Galletas", stock: 0},
    {producto: "Jugos", stock: 1}
]
const resultadoStock = productos.filter((producto) =>{
    return producto.stock > 0;
})
console.log("Productos disponibles", resultadoStock)

//Ejercicios con Find
 //Problema 1: Buscar libro por título
const libreria = [    
    {autor: "Gabriel Garcia Marques", libro: "100 años de soledad"},
    {autor: "Antoine de Saint-Exupéry", libro: "El principito"},
    {autor: "Mindulive", libro: "GitHub"},
]
const resultadoBusqueda = libreria.find((elemento) => elemento.libro == "El principito")
console.log(resultadoBusqueda)
// Problema 2: Buscar primer número negativo
const numeros = [-2,-1,1,2,3,4]
const resultadoNumeros = numeros.find((elemento) => elemento  < 0);
console.log(resultadoNumeros)
