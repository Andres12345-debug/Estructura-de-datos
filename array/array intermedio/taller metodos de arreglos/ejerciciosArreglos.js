const frutas = ["Manzana", "Banano", "Mango"]
 frutas.forEach(function(value, indice){ //value es el valor del elemento y indice es la posicion del elemento en el array
    console.log(value, indice); //imprime el valor y la posicion del elemento en el array
} )
//EJERCICIO 2
const carrito = [
    { producto: "Pan", cantidad: 2 },
    { producto: "Leche", cantidad: 3 },
    { producto: "Huevos", cantidad: 1 }
    ];
   const suma = carrito.reduce((acumulador, valor)  =>{
    return acumulador + valor.cantidad;

   },0)
   console.log(suma); //imprime el nuevo valor acumulado

   //EJERCICIO 3 MAP Fórmula: F = C * 1.8 + 32 
   //Este motodo sirve para hacer operaciones sin dañar el valor original
   const temperatura = [2, 3, 4]
   respuestaMap = temperatura.map((valor, indice) =>{
    return valor * 1.8 + 32; 
   })
   console.log(respuestaMap, temperatura)

   //Problema 2: Formatear correos
   const nombres = ["Adrian", "Duglas", "Clara"]
   respuestaCorreos = nombres.map((valor) =>{
    return (valor + "@gmail.com")
   })
   console.log(respuestaCorreos)


