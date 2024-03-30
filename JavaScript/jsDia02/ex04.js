const leia = require('readline-sync');

let n1 = leia.questionFloat('digite um numero: ' );
console.log("o valor digitado foi :", n1.toFixed(1));

let n2 = leia.questionFloat('digite um numero: ' );
console.log("o valor digitado foi :", n2.toFixed(1));

let n3 = leia.questionFloat('digite um numero: ' );
console.log("o valor digitado foi :", n3.toFixed(1));

let n4 = leia.questionFloat('digite um numero: ' );
console.log("o valor digitado foi :", n4.toFixed(1));


diferenca = (n1 * n2 ) - (n3 * n4)
console.log( "Diferença:", diferenca.toFixed(1))