var ligada = document.querySelector("#ligada");
var ligar = document.querySelector("#ligar")
var desligar = document.querySelector("#desligar")
var div = document.querySelector("div")
var botao = document.createElement("Button")

var desligada = document.createElement("img")
desligada.id = "desligada"
desligada.src = "img/ligada.jpg"
desligada.alt = "img_html"
desligada.title = title="lampada"
//console.log(desligada)

var quebrada = document.createElement("img")
quebrada.id = "quebrada"
quebrada.src = "img/quebrada.jpg"
quebrada.alt = "img_html"
quebrada.title = title="lampada"
// console.log(quebrada)

function quebrou(){
    console.log(this)
    this.src = "img/quebrada.jpg"
    ligar.setAttribute("disabled", "disabled")
    desligar.setAttribute("disabled", "disabled")
    ligada.src = "img/quebrada.jpg"
}

desligada.addEventListener("dblclick", quebrou)


ligada.addEventListener("mouseover", function(){
    console.log("ligar")
    div.replaceChild(desligada, ligada)
})

desligada.addEventListener("mouseout", function(){
    console.log("desligar")
    div.replaceChild(ligada, desligada)
})

ligar.addEventListener("click", function(){
    try{
        div.replaceChild(desligada, ligada)
    }
    catch{
        {}
    }
    
})

desligar.addEventListener("click", function(){
    try{
        div.replaceChild(ligada, desligada)
    }
    catch{
        {}
    }
})


