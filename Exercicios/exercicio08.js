//EX 08

var i = 0;
var op;
var V1 = 0;
var V2 = 0;
var vp = 0;
var vv = 0;
while (i == 0){
    op = prompt("opção: ")
    switch(op){
	case "P":
	    V1 = parseFloat(prompt("valor: "));
	    vp = vp + V1;
	    break;
	case "V":
	    V2 = parseFloat(prompt("valor: "));
	    vv = vv + V2;
	    break;
	default:
	    i = 1;
	    break;
    }
}
V1 = vv + vp;
console.log("valor total das vendas: " + V1 + " vendas a vista: " + vv + " vendas a prazo: " + vp)
