const leia = require("readline-sync");

let nome = leia.question("\nQual é o seu nome?");
let idade = leia.questionInt("\nQual é a sua idade?");
let doou = leia.question("\n Primeira doação de sangue? Responda true ou false");

if( idade >= 18 && idade <=59 ){
    console.log(nome + "está apto a doar sangue!");
} else if(idade >= 60 && idade <= 69 && doou == false){
    console.log(nome + "está apto a doar sangue!");
}else{
    console.log(nome + "não está apto a doar sangue!");}




