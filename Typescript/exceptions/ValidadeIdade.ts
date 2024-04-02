import readline = require("readline-sync");

let loop: boolean = true;

try {
  let idade = readline.questionInt("Digite a idade");
  validarIdade(idade);
  loop = false;
} catch (error) {
  if (error instanceof Error) 
    console.error("Digite uma idade maior que 18 anos");
   else 
    console.error(error);
  
}while (loop);

  function validarIdade(idade: number): void {
    if (idade < 18) 
      throw new Error("A pessoa é menor de idade");
     else 
      console.log("A pessoa é maior de idade");
    
  }
