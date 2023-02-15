const numEnlaces = document.getElementsByTagName("a");
console.log(numEnlaces.length);
console.log(numEnlaces[4]);

const dirTerc = document.getElementById("third-paragraph");
const dirTer2 = dirTerc.getElementsByTagName("a");
console.log(dirTer2.length)

const title = document.getElementsByTagName("h1")[0];
title.style.color ="red";
title.style.fontSize = "12px"

var tus = document.getElementsByTagName("h2")[0];
tus.classList.remove("h2");




