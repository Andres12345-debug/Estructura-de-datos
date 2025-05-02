let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion)
        resolver("La promesa se ha cumplido");
    else
        rechazar("La promesa no se ha cumplido");
})

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)
// );


// miPromesa.then(
//     valor => console.log(valor)).catch(error =>
//         console.log(error)
//     )

let promesa = new Promise((resolver) =>{
   // console.log("Inicio de la promesa");
    setTimeout(() => resolver("Promesa cumplida"), 3000);
    //console.log("Fin de la promesa");
});
//promesa.then(valor => console.log(valor))

//async function
async function miFuncionConPromesa(){
    return 'Saludos con promesa y async'
}
//miFuncionConPromesa().then(valor=> console.log(valor))

//await
async function funcionConPromesaYAwait(){
 let miPromesa = new Promise((resolver) => {
    resolver("Promesa cumplida con await")
 })
 console.log(await miPromesa)
}
//funcionConPromesaYAwait();

//Async, Await y setTimeout
async function funcionConPromesaYAwaitTimeout(){
    let miPromesa = new Promise((resolver => {
        setTimeout(() => resolver("Promesa cumplida con await y timeout"), 3000)
    }))
    console.log(await miPromesa)
}
funcionConPromesaYAwaitTimeout();