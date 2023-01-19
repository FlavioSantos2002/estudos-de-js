//faz aguardar alguns milisegundos
/*note que podemos usar como se foçe um simulador de tempo de 
resposta de um servidor
*/

console.log("posto primeiro")

function esperar(){
    console.log("espera 2 seg pra aparecer")
}
function esperarmais(){
    console.log("espera 5 seg pra aparecer")
}

setTimeout(esperarmais, 5000)
setTimeout(esperar, 2000)

/*
outra estrutura que temos é o setInterval que 
ao contrario do anterior funciona como se foce um loop e precisa de uma condição de parada  
*/
function testSetInterval(){
    console.log("carregando...")
}

var interavel = setInterval(testSetInterval, 1000)


//da pra parar assim ou com o clearTimeout 

function parar(){
    clearInterval(interavel)
}

setTimeout(parar, 10000)