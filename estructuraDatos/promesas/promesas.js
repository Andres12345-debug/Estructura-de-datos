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
    console.log("Inicio de la promesa");
    setTimeout(() => resolver("Promesa cumplida"), 3000);
    console.log("Fin de la promesa");
});
promesa.then(valor => console.log(valor))

//asyn