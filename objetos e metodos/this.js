let objeto = {
    codigo: 001,
    produto: "netbook",
    preço: "R$" + 1500,
    metodo: function(){
        console.log("o produto é um: " + this.produto + "e seu preço é: " + this.preço)
    }
}
objeto.metodo();

let objeto2 = {
    nome: "batata",
    idade: 15,
    cidade: "manaus",
    sexo: "F",
    aniversario: function(){
        this.idade += 1
    }
}

console.log(objeto2.idade);
objeto2.aniversario();
console.log(objeto2.idade);

//this é util
