//EX 11

var i = par = impar = 0;
var n;
while (i < 100) {
    n = parseInt(prompt("numero: "));
    if ((n % 2) == 0){
	par = par + n;
    }else{
        impar = impar + n;
    }
    i = i + 1;
}
console.log("soma par: " + par)
console.log("soma impar: " + impar)
