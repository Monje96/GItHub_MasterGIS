function leerMas (){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var boton = document.getElementById("miBotton");

    if (dots.style.display ==="none"){
        dots.style.display = "inline";
        boton.innerHTML = "Leer más";
        moreText.style.display ="none";
    }else{
        dots.style.display ="none";
        boton.innerHTML = "Leer menos";
        moreText.style.display = "inline"
    }
}