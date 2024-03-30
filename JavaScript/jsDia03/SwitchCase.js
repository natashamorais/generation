const leia = require('readline-sync');

let codigo;
let nome; 

nome = leia.question('\nDigite seu nome: ');


console.log("\n Faixas Etárias:");
console.log("\n 1 --De 0 a 10 anos");
console.log("\n 3 --De 30 a 45 anos");
console.log("\n 4 --De 46 a 59 anos");
console.log("\n 5 --De 60 a 65 anos");
console.log("\n 6 --Acima de 65 anos");

codigo = leia.question('\nDigite o código da sua faixa etária: ');
console.log(codigo)

switch(codigo){

    case 1 : 
    console.log("\no seu plano de saúde custará R$100,00 por mês");
    break;
    
    case 2 : 
    console.log("\no seu plano de saúde custará R$200,00 por mês");
    break;

    case 3 : 
    console.log("\no seu plano de saúde custará R$300,00 por mês");
    break;

    case 4 : 
    console.log("\no seu plano de saúde custará R$400,00 por mês");
    break;

    case 5 : 
    console.log("\no seu plano de saúde custará R$500,00 por mês");
    break;

    case 6 : 
    console.log("\no seu plano de saúde custará R$1000,00 por mês");
    break;

    default:
        console.log("\ncoloque um código válido");
}