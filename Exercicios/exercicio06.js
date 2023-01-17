//EX 06

var idade = parseInt(prompt("digite a idade: "));
if ((idade >= 5) && (idade <= 7)){
    console.log("infantil A")
}
else if ((idade >= 8) && (idade <= 10)){
    console.log("infantil B")
}
else if ((idade >= 11) && (idade <= 13)){
    console.log("Juvenil A")
}
else if ((idade >= 14) && (idade <= 17)){
    console.log("Juvenil B")
}
else if ((idade >= 18)){
    console.log("Sênior")
}else{
    console.log("idade nao permitida")
}