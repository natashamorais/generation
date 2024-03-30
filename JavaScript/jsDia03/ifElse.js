const leia = require('readline-sync');

let idade;
let nome; 

nome = leia.question('\nDigite seu nome: ');
idade = leia.question('\nDigite sua idade: ');

if(idade > 0){

if(idade >= 0 && idade <= 10){
    console.log("\no seu plano de saúde custará R$100,00 por mês");
}else if(idade >= 11 && idade <= 29){
    console.log("\no seu plano de saúde custará R$200,00 por mês");

}else if(idade >= 30 && idade <= 45){
    console.log("\no seu plano de saúde custará R$300,00 por mês");

}else if(idade >= 46 && idade <= 59){
    console.log("\no seu plano de saúde custará R$400,00 por mês");

}else if(idade >= 60 && idade <= 65){
    console.log("\no seu plano de saúde custará R$500,00 por mês");

}else{
    console.log("\no seu plano de saúde custará R$1000,00 por mês");
}
}else{
    console.log("\ncoloque uma idade válida");
}