const names = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
const longNames = names
   .filter(names => names.length > 7)
   .map(names => names.toUpperCase());
console.log(longNames)