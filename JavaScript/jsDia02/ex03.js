const leia = require('readline-sync');

let salBruto = leia.questionFloat('Digite seu salário bruto: ' );
console.log("o valor digitado foi :", salBruto.toFixed(2));

let adcNoturno = leia.questionFloat('Digite o valor do seu adicional noturno: ' );
console.log("o valor digitado foi :", adcNoturno.toFixed(2));

let hrExtraValor = leia.questionFloat('Qual o valor da sua hora extra? : ' );
console.log("o valor digitado foi :", hrExtraValor.toFixed(1));

let hrExtraQtd = leia.questionFloat('Quantas horas extras fez esse mês?: ' );
console.log("o valor digitado foi :", hrExtraQtd);


let descontos = leia.questionFloat('Qual o valor total dos seus descontos?: ' );
console.log("o valor digitado foi :", descontos.toFixed(2));

salLiquido = salBruto + adcNoturno +(hrExtraValor * hrExtraQtd) - descontos
console.log( 'O valor do seu salário liquído é: ', salLiquido.toFixed(2));