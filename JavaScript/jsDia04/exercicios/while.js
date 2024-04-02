const readline = require('readline-sync');

let booleano = true;
let maisQue50 = 0;
let menosQue21 = 0;

while(booleano){

    let idade = readline.questionInt("digite uma idade:")

    if(idade<0){
        booleano = false;
    }
    if(idade > 50){
    maisQue50++
    } else if(idade <21 && idade >0){
        menosQue21++

    }
}

console.log(`pessoas menores de 21 anos:${menosQue21}`)
console.log(`pessoas maiores de 80 anos: ${maisQue50}`)