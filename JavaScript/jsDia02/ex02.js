const leia = require('readline-sync');

let nota01 = leia.questionFloat('Digite sua nota de português: ' );
console.log("o valor digitado foi :", nota01.toFixed(1));
let nota02 = leia.questionFloat('Digite sua nota de matemática: ' );
console.log("o valor digitado foi :", nota02.toFixed(1));
let nota03 = leia.questionFloat('Digite sua nota de história: ' );
console.log("o valor digitado foi :", nota03.toFixed(1));
let nota04 = leia.questionFloat('Digite sua nota de química: ' );
console.log("o valor digitado foi :", nota04.toFixed(1));

let media =( nota01 + nota02 + nota03 + nota04)/ 4

console.log('sua média é:', media.toFixed(1))