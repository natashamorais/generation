const leia = require("readline-sync");


console.log("\n Operações:");
console.log("\n 1 --Saldo");
console.log("\n 2 --Saque");
console.log("\n 3 --Depósito");

let saldo = 1000.00

let op = leia.questionFloat(" digite o código da operação ");
if(op == 2 || op == 3){
    var valor = leia.questionFloat(" digite o valor da operação ");
}

switch(op){
    case 1: 
    console.log("Saldo:"+ saldo.toFixed(2))
    break;

    case 2: 
    if(valor < saldo){
    console.log("Novo Saldo:" + (saldo - valor).toFixed(2))
    }else if(valor > saldo){
        console.log("Saldo Insuficiente!")
        }
    break;

    case 3: 
    console.log(console.log("Novo Saldo:" + (saldo + valor).toFixed(2)))
    break;


    default: 
    console.log("Operação Inválida!")
}