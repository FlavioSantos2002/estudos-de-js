//para alterar um elemento primeiramente tems que seleciona-lo

var tituloGEBTN = document.getElementsByTagName("h1")[0];
//ou com 
var tituloQS = document.querySelector(".teste");

//para alterar usamos o parametro innerHTML

tituloGEBTN.innerHTML = "Mudei o titulo do html com js";

//ou 

tituloQS.textContent = "mudando o texto";


//para cria elementos dentro do HTML

var paragrafo = document.createElement("p"); //crie o elemento filho

var texto = document.createTextNode("este é o cunteúdo do paragrafo criado no js") //crie o que tem no elemento
console.log(texto)

paragrafo.appendChild(texto) //coloque na tag

console.log(paragrafo)

var body = document.querySelector("body") //encontre a tag pai a ser inserido o elemento

body.appendChild(paragrafo) //coloque na tag filho


//para remover elementos do html

var div = document.querySelector(".d1")//seleciona a tag pai

var elemento = document.querySelector(".d1 p")//seleciona a tag filho a ser removida

console.log(elemento)

div.remove(elemento)//remove a tag 

//ou

var remover = document.querySelector("#remove")

remover.remove()








