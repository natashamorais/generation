const leia = require('readline-sync');

let esporte, idade, futebol = 0, voleibol = 0;

do{

    esporte = leia.questionInt("Digite o seu Esporte favorito (1-Fut / 2-Vol: ");

    if (esporte < 1 || esporte > 2)
        console.log("Digite um valor entre 1 e 2");

    // Quantas pessoas gostam de futebol
    if (esporte == 1)
        futebol++;

    // Quantas pessoas gostam de voleibol 
    if (esporte == 2)
        voleibol++;

        esporte = leia.questionInt("Digite 3 para Sair ou qualquer outro numero para continuar: ");


}while (esporte !== 3);

console.log("Total de pessoas que gostam de futebol: " + futebol);
console.log("Total de pessoas que gostam de voleibol: " + voleibol);