import readline = require("readline-sync");
import { Queue } from "./QueueInterfaceD";

let opcao: number;
let cliente: string;

const fila = new Queue<string>();
do {
  console.log("************************************************");
  console.log("  ");
  console.log("1 - ADICIONAR CLIENTE NA FILA ");
  console.log("2 - LISTAR TODOS OS CLIENTES");
  console.log("3 - RETIRAR CLIENTE DA FILA ");
  console.log("0 - SAIR");
  console.log("  ");
  console.log("************************************************");

  console.log("DIGITE A OPÇÃO DESEJADA: ");
  console.log("  ");
  opcao = readline.questionInt("");

  switch (opcao) {
    case 1:
      console.log("Adicione o cliente na fila: ");
      cliente= readline.question()
    fila.enqueue(cliente);
    console.log("cliente adicionado na fila");
    console.log("fila: ")
    fila.printQueue()

      break;
    case 2:
        if(fila.isEmpty())
        console.log("a fila está vazia!")
    else
      console.log("Lista de clientes na fila: ");
      fila.printQueue()
     
      break;
    case 3:
  
      cliente= readline.question()
      fila.dequeue()
      console.log("Um cliente foi chamado!");
      fila.printQueue()

      break;
    case 0:
      console.log("Você saiu do programa");
      break;

    default:
      console.log("\nOPÇÃO INVÁLIDA!\n");
      break;
  }
} while (opcao !== 0);
