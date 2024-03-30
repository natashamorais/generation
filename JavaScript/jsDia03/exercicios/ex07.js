const leia = require("readline-sync");


console.log("\n Operações:");
console.log("\n 1 --Soma");
console.log("\n 2 --Substração");
console.log("\n 3 --Multiplicação");
console.log("\n 4 --Divisão");

let n1 = leia.questionFloat(" digite o primeiro número ");
let n2 = leia.questionFloat(" digite o segundo número ");
let op =  leia.questionInt(" digite o código da operação ");


switch(op){
    case 1: 
    console.log(n1 + "+" + n2 +"=" + (n1 + n2).toFixed(1))
    break;

    case 2: 
    console.log(n1 + "-" + n2 +"=" + (n1  - n2).toFixed(1))
    break;

    case 3: 
    console.log(n1 + "*" + n2 +"=" + (n1  * n2).toFixed(1))
    break;

    case 4 : 
    console.log(n1 + "/" + n2 + "=" + (n1 / n2).toFixed(1))
    break;

    default: 
    console.log("operação inválida!")
}