const topics = ["JavaScript", "Variables"]
var newTopics = topics.map(function(tema){
    return tema.toUpperCase();
})
console.log(newTopics.reverse())