const readline = require('readline-sync');

const vetor = [2,5,1,3,4,9,7,8,10,6];

let num = readline.questionInt(" Digite o número que você deseja encontrar:  ")

for( let i = 0; i <= vetor.length; i++){
    if(vetor[i] == num){
        console.log(`o número ${num} está na posição ${i}`)
    } else if( i >= vetor.length){
        console.log(`o número ${num} não foi encontrado!`)
    }
}
