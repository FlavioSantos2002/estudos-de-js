//EX 07

var v1 = parseInt(prompt("valor 1"));
var v2 = parseInt(prompt("valor 2")); 
var v3 = parseInt(prompt("valor 3")); 
var op = parseInt(prompt("opção"));
var max, med, min;

if ((v1 > v2) && (v2 > v3)){
    max = v1;
    med = v2;
    min = v3;
}
else if ((v1 > v3) && (v3 > v2)){
    max = v1;
    med = v3;
    min = v2;
}
else if ((v2 > v1) && (v1 > v3)){
    max = v2;
    med = v1;
    min = v3;
}
else if ((v2 > v3) && (v3 > v1)){
    max = v2;
    med = v3;
    min = v1;
}
else if ((v3 > v1) && (v1 > v2)){
    max = v3;
    med = v1;
    min = v2;
}
else if ((v3 > v2) && (v2 > v1)){
    max = v3;
    med = v2;
    min = v1;
}

switch(op){
    case 1:
	console.log(min + ", " + med + ", " + max)
	break;
    case 2:
	console.log(max + ", " + med + ", " + min)
	break;
    case 3:
	console.log(med + ", " + min + ", " + max)
	break;
}