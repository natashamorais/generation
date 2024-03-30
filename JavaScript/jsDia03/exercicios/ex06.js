const leia = require("readline-sync");


console.log("\n Cargos:");
console.log("\n 1 --Gerente");
console.log("\n 2 --Vendedor");
console.log("\n 3 --Supervisor");
console.log("\n 4 --Motorista");
console.log("\n 5 --Estoquista");
console.log("\n 4 --Técnico de TI");

let nome = leia.question(" digite o seu nome ");
let cargo = leia.questionInt(" digite o código do seu cargo ");
let salario = leia.questionInt(" digite o código do seu salario ");
// 7 9 6 5 8
switch(cargo){
    
    case 1 : 
    console.log("Nome do colaborador:" + nome );
    console.log("Cargo: Gerente");
    console.log("Salario:" +(salario + (0.10 * salario)).toFixed(2));
    break;
    case 2 : 
    console.log("Nome do colaborador:" + nome );
    console.log("Cargo: Vendedor")
    console.log("Salario:" +(salario + (0.07 * salario)).toFixed(2));
    break;
    case 3 : 
    console.log("Nome do colaborador:" + nome );
    console.log("Cargo: Surpevisor");
    console.log("Salario:" +(salario + (0.09 * salario)).toFixed(2));
    break;
    case 4 : 
    console.log("Nome do colaborador:" + nome );
    console.log("Cargo: Motorista");
    console.log("Salario:" +(salario + (0.06 * salario)).toFixed(2));
    break;
    case 5 : 
    console.log("Nome do colaborador:" + nome );
    console.log("Cargo: Estoquista");
    console.log("Salario:" +(salario + (0.05 * salario)).toFixed(2));
    break;
    case 6 : 
    console.log("Nome do colaborador:" + nome );
    console.log("Cargo: Técnico de TI");
    console.log("Salario:" +(salario + (0.08 * salario)).toFixed(2));
    break;
    
   
    default:
        console.log("\ncoloque um código válido");
}
