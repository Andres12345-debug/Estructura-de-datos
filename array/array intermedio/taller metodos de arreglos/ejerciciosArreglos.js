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

