/// 1 Haz que cuando se haga click sobre el botón “Guardar”, salté un alert con un mensaje de guardado

var input = document.getElementById("guardar");

input.addEventListener("click", mostrarAlerta);

function mostrarAlerta() {
    alert("Se ha guardado");
}
//// 2 Cuando hagamos foco sobre este input se pondrá de color amarillo y cuando se lo quitemos cambiará de color

var das = document.getElementById("in");

das.addEventListener("focusin",mostrarFocus);

function mostrarFocus(foco){
    foco.target.style.background = "pink"
}

das.addEventListener("blur",mostrarFocusOut);

function mostrarFocusOut(foco){
    foco.target.style.background = ""
}

///Dependiendo si escribamos una vocal o una consonante el contenido del input aparecerá de distinto color

var input2 = document.getElementById("por");
input2.addEventListener('keypress', mostrarLetra);
function mostrarLetra(evento) {
    var r = [97,101,105,111,117,65,69,73,79,85];
    if(r.includes(evento.keyCode)){input2.style.color ="red"}
    else{console.log("Es consonante")}
}








