const leia = require('readline-sync');

let vetorStrings = [
    "Thais Siqueira",
     "Beatriz Alves", 
     "Vinicius Gabriel", 
     "Bruna Teles", 
     "André Nascimento",
    "Pedro Almeida"]

    let vetorNumeros = Array(5)

     
     for(let indice = 0; indice < vetorStrings.length; indice++){
        console.log(`\nPosição ${indice} = ${vetorStrings[indice]}`)
     }
     for(let indice = 0; indice < vetorNumeros.length; indice++){
        console.log(`\nPosição ${indice} = ${vetorNumeros[indice]}`)
        vetorNumeros[indice] = leia.questionInt(" Digite um numero: ")
     }

     for(let indice = 0; indice < vetorNumeros.length; indice++){
        console.log(`\nPosição ${indice} = ${vetorNumeros[indice]}`)}

        console.table(vetorNumeros)