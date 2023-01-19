
var elemento = document.createElement("div");
elemento.classList = "div_pai";

var p2 = document.createElement("p")
p2.id = "paragrafo2"

var texto2 = document.createTextNode("texto do paragrafo 2")

var body = document.querySelector("body");

var paragrafo = document.querySelector("#item_paragrafo")
//console.log(paragrafo)

p2.appendChild(texto2)
elemento.appendChild(p2)

//para inserir antes usamos o insertBefore(elemento filho, o que vem depois)
body.insertBefore(elemento, paragrafo)
//console.log(elemento)


var p1 = document.createElement("p")
var texto1 = document.createTextNode("texto do paragrafo 1")

p1.appendChild(texto1)
console.log(p1)

elemento.insertBefore(p1, p2);
