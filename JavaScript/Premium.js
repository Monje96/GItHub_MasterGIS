const users = [{name:"TU",age:30, premium:false},{name:"Sa",age:24,premium:true},{name:"Suu",age:28,premium:true}]
const prem = users.filter(function(usuario){
    return usuario.premium
  });
console.log(prem)

const noPrem = users.map(function(usuario){
    return !usuario.premium
})
console.log(noPrem)  
