//EX 12

var v1, v2, v3, max, med, min;
var i = 0;
var nv;
v1 = parseInt(prompt("numero "));
v2 = parseInt(prompt("numero "));
v3 = parseInt(prompt("numero "));

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

while (i < 97){
    nv = parseInt(prompt("numero "));
    if (nv > max){
	min = med;
	med = max;
	max = nv;
    }else if((nv > med) && (nv < max)){
	min = med;
	med = nv;
    }else if((nv>min) && (nv < max) && (nv < med)){
	min = nv;
    }
    i = i + 1;
}
console.log("maiores valores são: " + max + ", " + med + ", " + min)
