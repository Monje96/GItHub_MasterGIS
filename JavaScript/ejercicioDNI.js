const DNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let numeroDNI = prompt("introduzca")
var resultadoDNI = 0
var lDNI = DNI[resultadoDNI]

if (numeroDNI < 0 || numeroDNI > 99999999) {
    alert("a")
} else if (numeroDNI.length!= 8) {
    alert("b")
} else {
    var resultadoDNI = numeroDNI%23;
    var lDNI = lDNI[resultadoDNI];
}
console.log(lDNI)


