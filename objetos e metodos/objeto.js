
let objeto = {
    nome: "batata",
    idade: 15,
    cidade: "manaus",
    sexo: "F",
    metodoFalar: function(){
        return console.log("estou falando");
    },
    metodoSomar: function(x, y){
        var c  = x + y;
        return console.log("o valor na soma do numero " + x + " e o numero " + y + " é: " + c);
    }
}


console.log(objeto.cidade);
objeto.metodoFalar()
objeto.metodoSomar(40, 5)