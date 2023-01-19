//criando evendo de click
var botao = document.querySelector("#btn")
console.log(botao)

botao.addEventListener("click", function(){
    console.log("clicou...")
    //obs dentro do evento o this passa a ser o proprio elemento no caso esse botao
    console.log(this) //note que ele imprime o botão
})


//note que o evento de click pode ser atribuido a qualquer teg do html

var paragrafo = document.querySelector("#paragrafo2")
console.log(paragrafo)

paragrafo.addEventListener("click", function(){
    console.log("clicando em um paragrafo")
})


//duplo click

var botao2 = document.querySelector("#btn2")

botao2.addEventListener("dblclick", function(){

    console.log("dei um duplo click")
})