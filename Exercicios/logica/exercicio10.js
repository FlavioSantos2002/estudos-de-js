//EX 10

var n = parseInt(prompt("termo: "));
var n1 = nt = 0;
var n2 = 1;
var i = 3;

if (n == 1){
    console.log(n1);
} else if (n == 2){
    console.log(n2);
}else{
    while (i <= n){
        nt = n1 + n2;
        n1 = n2;
        n2 = nt;
	i = i + 1;
   }
}
console.log("o termo é: " + nt)