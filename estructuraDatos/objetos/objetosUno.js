let objeto = {
  nombre: "Julian",
  edad: 25,
  bilingue: true,
  habilidades: ["programacion", "dibujo", "baile"],
};
console.log(objeto);
console.table(objeto);


//Objetos con propiedades
let post = 
  {
    fecha: "2020/12/12",
    titulo: "5 trucos de javascript",
    author: {
      nombre: "Juanito",
      rol: "publicador",
      foto: "img/photo.jpg",
    },
    //arreglo de objetos
    comentarios: [
      {
        id: 1,
        texto: "Buen contenido",
        author: {
          nombre: "Fer",
          rol: "usuario",
          foto: "img/photo.jpg",
        },
      },
      {
        id: 2,
        texto: "No sabia esos trucazos",
        author: {
          nombre: "Juanita",
          rol: "usuario",
          foto: "img/photo.jpg"         
        }
      }
    ]
  }

console.log(post)

//Navegar por el objeto
console.log(post.comentarios[0])
console.log(post.comentarios[0].author.nombre)
console.log(post['comentarios'][0]['author']['nombre'])


//Añadir propiedades a los objetos
post['likes'] = 50;
console.log(post)

post.shares = 100;
console.log(post)

//recorrer el objeto
for(prop in post){
    const clave = prop;
    const valor = post[clave];
    console.log(clave, valor)
}