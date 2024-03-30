const leia = require("readline-sync");

let n1 = leia.questionInt("\nDigite um número: ");

let n2 = leia.questionInt("\nDigite mais um número: ");

let n3 = leia.questionInt("\nDigite mais um número: ");

let soma = n1 + n2;

if (soma > n3) {
  console.log("A soma de A + B é maior do que C");
} else if (soma < n3) {
  console.log("A soma de A + B é menor do que C");
} else if ((soma = n3)) {
  console.log("A soma de A + B é igual a  C");
}

