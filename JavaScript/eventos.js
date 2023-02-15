var botton = document.getElementById("myBtn");

botton.addEventListener("click",comprobarNumero);

function comprobarNumero(){
    var valor = document.getElementsByTagName("input")[0].value;
    if(valor%2 == 0){
        document.getElementById("resultado").innerHTML = "El número " + valor + " es un número par";
    } else {document.getElementById("resultado").innerHTML = `El número ${valor} es un número impar` ;
}}