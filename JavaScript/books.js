const books = [
    {title: "El Quijote", rating:4.5},
    {title: "Don Juan", rating: 3.8},
    {title: "Tras", rating:6},
    {title: "Sap", rating:3},
]
const result = books
.filter(function(libro){
    return libro.rating > 4
}).map(function(libro){
    return{title: libro.title, ratio:libro.rating}
})
console.log(result)

