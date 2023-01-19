//EX 09

var c1 = c2 = c3 = c4 = n = b = 0, candidato;
var i = 0;
while (i == 0){
    candidato = parseInt(prompt("digite o codigo do seu voto")); 
    switch(candidato){
	case 0:
	    i = 1;
	    break;
	case 1:
	    c1 = c1 + 1;
	    break;
	case 2:
	    c2 = c2 + 1;
	    break;
	case 3:
	    c3 = c3 + 1;
	    break;
	case 4:
	    c4 = c4 + 1;
	    break;
	case 5:
	    n = n + 1;
	    break;
	case 6:
	    b = b + 1;
	    break;
    }
}
console.log("c1: " + c1 + ",c2: " + c2 + ",c3: " + c3 + ",c4: " + c4 + ",n: " + n + ",b: " + b)