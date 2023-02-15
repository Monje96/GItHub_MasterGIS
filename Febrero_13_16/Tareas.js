function clickear(){
    var click = document.getElementById("input").value;
    var crear = document.createElement("li");
    crear.innerHTML = click;
    var listaTarea = document.getElementById("lista");
    listaTarea.appendChild(crear);
    var crearCheck = document.createElement("input");
    crearCheck.setAttribute("type", "checkbox");
    listaTarea.appendChild(crearCheck);
}
    