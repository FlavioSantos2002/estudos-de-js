//evento de mouseover

var botao = document.querySelector("#btn")

botao.addEventListener("mouseover", function(){
    console.log("ao passar com o cursor no botao 1 sai texto no console")
})


//evento de mouseout

var botao2 = document.querySelector("#btn2")
console.log(botao2)

botao2.addEventListener("mouseout", function(){
    console.log("ao sair no botao 2 sai texto no console")
})

//se juntar os dois da pra fazer bons efeitos

var titulo = document.querySelector("h1")
console.log(titulo)

titulo.addEventListener("mouseover", function(){
    titulo.style.backgroundColor = "yellow" 
})
titulo.addEventListener("mouseout", function(){
    titulo.style.backgroundColor = "rgb(116, 211, 179)"
})
