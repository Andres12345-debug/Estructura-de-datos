//Es un tipo de objeto que 
// permite almacenar información agrupada en una clave y un valor
const mapa = new Map();
mapa.set('Juan', 10)
mapa.set('Maria', 9)
mapa.set('Jessica', 14)

//Trae el dato de Maria
const maria = mapa.get('Maria');
console.log(maria)

//Recorre todo el mapa
for(let elemento of mapa){
    console.log(elemento)
}

//Solo para el indice
for(let elemento of mapa){
    console.log(elemento[1])
}


//Set
//Los set toman de indice y de valor el mismo que nosotros especificamos
const propiedades = new Set();
propiedades.add('color')
propiedades.add('peso')
propiedades.add('forma')
console.log(propiedades)

const iterador = propiedades.entries();
//PAra hacer el recorrido y mostrar 
for(let item of iterador){
    console.log(item[0]);
}
let item = iterador.next();
while(item.done == false){
    console.log(item.value[0])
    item = iterador.next();
}
