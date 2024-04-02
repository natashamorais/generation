import readline = require("readline-sync");
import { Stack } from "./StackInterfaceD";

const pilha = new Stack<string>();
let opcao: number;
let livro: string;

do {
  console.log("************************************************");
  console.log("  ");
  console.log("1 - ADICIONAR LIVRO NA PILHA ");
  console.log("2 - LISTAR TODOS OS LIVROS");
  console.log("3 - RETIRAR LIVRO DA FILA ");
  console.log("0 - SAIR");
  console.log("  ");
  console.log("************************************************");

  console.log("DIGITE A OPÇÃO DESEJADA: ");
  console.log("  ");
  opcao = readline.questionInt("");

  switch (opcao) {
    case 1:
      console.log("adicione um livro na fila");
      livro = readline.question("");
      pilha.push(livro);
      console.log("pilha:")
      pilha.printStack()

      console.log("o livro adicionado!");

      break;

    case 2:
        if(pilha.isEmpty())
        console.log("a pilha está vazia!")
    else
      console.log("lista de livros na pilha: ");
      pilha.printStack()
      break;

    case 3:
        if(pilha.isEmpty())
        console.log("a pilha está vazia!")
    else
      
      pilha.pop();
      console.log("pilha:")
      pilha.printStack()
      console.log("um livro foi retirado da pilha ");

      break;

    case 0:
      console.log("você saiu...");
      break;

      default:
        console.log("opção invalida!");
        break;
  }
} while (opcao !== 0);
