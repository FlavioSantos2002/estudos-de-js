//Por tegName
var titulo = document.getElementsByTagName("h1")[0]
//obs note que ele pega as tegs em formato de arrays, por isso especifico qual teg quero pegar, por isso o [0]
console.log(titulo)

//Por ids

var paragrafo = document.getElementById("paragrafo");
console.log(paragrafo)

var paragrafo2 = document.getElementById("paragrafo2");
console.log(paragrafo2)

var lista = document.getElementById("lista");
console.log(lista)


//Por className
var elemento = document.getElementsByClassName("item")

console.log(elemento[6])

for(var i = 0; elemento[i]!=undefined; i++){
    console.log(elemento[i])
}



