/*uma função que recebe como um dos parametros outra função com 
o objetivo de executar um codigo fora ou apos a entrada de algum parametro
OBS: NOTE QUE O TEMPO DE EXECUÇÂO È O TEMPO DE LEITURA DO CODIGO: SINCRONA
*/

function show(algo){
    console.log("o valor é: " + algo)
}

function somatorio(a, b, cb){
    var soma = a + b;
    cb(soma)
}

function produto(a, b, cb){
    var prod = a * b;
    cb(prod)
}
somatorio(5, 15, show)

produto(4, 8, show)