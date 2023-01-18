var subtitulo = document.querySelector(".teste")
//console.log(subtitulo)

subtitulo.setAttribute("id", "segundo_atbt")
console.log(subtitulo)

//deixando botao desabilitado com js
var botao = document.querySelector("#teste_botao")
botao.setAttribute("disabled", "disabled")


//para remover 

var paragrafo = document.getElementsByTagName("p")[0]
console.log(paragrafo)
//note que ele tem um id atribuido a ele para remover basta remover // abaixo
//paragrafo.removeAttribute("id")
//console.log(paragrafo)