const indice = [{nombre: "Hola"}, {nombre:"Adios"}, {nombre:"Que tal"}]
var b = indice.map(function(elemento,index){
    return {id: index, nombre2:elemento.nombre}
})
console.log(b)