const leia = require("readline-sync");


console.log("\n Lanches:");
console.log("\n 1 --Cachoro Quente R$ 10,00");
console.log("\n 2 --X-Salada R$ 15,00");
console.log("\n 3 --X-Bacon R$ 18,00");
console.log("\n 4 --Bauru R$ 12,00");
console.log("\n 5 --Refrigerante R$ 10,00");
console.log("\n 4 --Suco de Laranja R$ 12,00");


let lanche = leia.questionInt(" digite o código do seu lanche ")
let qtd = leia.questionInt(" digite a quantidade do seu lanche ")


switch(lanche){
    
    case 1 : 
    console.log("\n produto: Cachorro Quente" );
    console.log("Valor Total: R$" + 10.00 * qtd)
    break;
    
    case 2 : 
    console.log("\n produto: X-Salada" );
    console.log("Valor Total: R$" + 15.00 * qtd)
    break;

    case 3 : 
    console.log("\n produto: X-Bacon" );
    console.log("Valor Total: R$" + 18.00 * qtd)
    break;

    case 4 : 
    console.log("\n produto: Bauru" );
    console.log("Valor Total: R$" + 12.00 * qtd)
    break;

    case 5 : 
    console.log("\n produto: Refrigerante" );
    console.log("Valor Total: R$" + 10.00 * qtd)
    break;

    case 6 : 
    console.log("\n produto: Suco de Laranja" );
    console.log("Valor Total: R$" + 12.00 * qtd)
    break;
    

    default:
        console.log("\ncoloque um código válido");
}



