function click(){
    var x1 = document.getElementById("textArea").value;
    document.getElementById("escribir").innerHTML = x1
}

var textArea = document.getElementById("textArea");
textArea.addEventListener("keyup",checkEnter);

function checkEnter(evt){
    if (evt.keyCode ===13){
        click();
    }
}