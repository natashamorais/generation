const leia = require('readline-sync');

let num1, num2
    
num1 = leia.questionInt(" digite o primeiro número do intervalo ");
num2 = leia.questionInt(" digite o último número do intervalo ");

if(num1 > num2){
    console.log("intervalo inválido!")
} else{

console.log(` No intervalo entre ${num1} e ${num2}`)
 for(let i = num1; i<=num2; i++){
    if( (i%3) == 0 && (i%5) == 0 ){
        console.log(`O número ${i} é multiplo de 3 e 5`)
    }
 }}