const readline = require('readline-sync');

let numerosPositivos = 0;
let num = 0;

do{
    num = readline.questionInt( "digite um numero:")

    if (num > 0 && num !==0)
    numerosPositivos += num
    
}while(num !==0 )

console.log( ` A soma dos números positivos é ${numerosPositivos}`)