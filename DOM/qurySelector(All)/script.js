listaClass = document.getElementsByClassName("item");
//console.log(listaClass)

//note que o getElementsByClassName("item") tras todos os itens, todavia e se quisermos ser mais precisos 


//querySelectorAll
var listaSelector = document.querySelectorAll("#lista02 li");
console.log(listaSelector);

var listaSelector2 = document.querySelectorAll("#lista01 .item")
console.log(listaSelector2);

//querySelector

var elementoLista = document.querySelector("#lista01")
console.log(elementoLista);

var elementoDaLista = document.querySelector("#item_paragrafo")
console.log(elementoDaLista);