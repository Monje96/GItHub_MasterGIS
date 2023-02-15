function comprobar(){
    var fraseUs = document.getElementById("frase").value;

    var fraseMayus = fraseUs.toUpperCase();
    if (fraseUs === fraseMayus){
        document.getElementById("resultado").innerHTML="Está en mayuscula"
    }
    else{document.getElementById("resultado").innerHTML="Está en minuscula"}

}