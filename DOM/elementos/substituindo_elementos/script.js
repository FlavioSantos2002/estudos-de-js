var elemento = document.createElement("h3")
elemento.classList = "substituto"

var texto = document.createTextNode("subistituto do h2 com nome class = teste")
elemento.appendChild(texto)

//console.log(elemento)

var anterior = document.querySelector(".teste")
//console.log(anterior)
var pai = anterior.parentNode
//console.log(pai)

pai.replaceChild(elemento, anterior)
