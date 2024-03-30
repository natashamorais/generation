const leia = require('readline-sync');
let salario = 0
let abono = 0

salario = leia.questionFloat('Digite seu salário: ' );
console.log("o valor digitado foi :", salario.toFixed(2));

abono =  leia.questionFloat('Digite seu abono ');
console.log("o valor digitado foi :", salario.toFixed(2));

let novoSalario = abono + salario;

console.log('Seu novo salário é: ', novoSalario.toFixed(2));
