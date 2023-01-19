function teclado(){
    document.addEventListener("keydown", function(){
        console.log("apertando a tecla do teclado")
    })
}

//teclado()

function encontrandoTecla(){
    document.addEventListener("keydown", function(event){
        console.log(event)
    })
}
//encontrandoLetra()

function tecla(){
    document.addEventListener("keydown", function(event){
        //console.log(event.key)
        //com isso a tecla que clicarmos vai pro console
        //e podemos usar um if para selecionar a que queremos
        if (event.key === 'Enter'){
            console.log("clicou no enter")
        }
    })
}
tecla()

// para o keyup
soltarTecla()
function soltarTecla(){
    document.addEventListener("keyup", function(event){
        if (event.key === 'Enter'){
            console.log("soltou o enter")
        }
    })
}