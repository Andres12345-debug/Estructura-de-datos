//Diferencia en el uso de call, apply y bind
// Call, apply y bind son métodos de función en JavaScript que permiten establecer el valor de "this" dentro de una función.

const user = {
    name: 'Juan'
};
const busines = {
    name: 'Headbook'
}
function showInfo(likes, firends){
    return `${this.name} tiene ${likes} likes y ${firends} amigos`
}

console.log(showInfo.call(busines, 100, 50))

//Apply
console.log(showInfo.apply(busines, [100, 50]))
//Bind
const newFuntion = showInfo.bind(user)

console.log(showInfo.bind(user, 100, 50)())
