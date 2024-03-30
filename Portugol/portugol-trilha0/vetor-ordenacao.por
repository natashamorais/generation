programa
{
	
	funcao inicio()
	{
	inteiro vetor[10] = {2,5,1,3,4,9,7,8,10,6}
	inteiro i,aux, trocou = 1

	enquanto(trocou == 1){ 
		trocou = 0
			
	para(i=0; i<10-1; i++){
		se(vetor[i] < vetor[i+1]){
			aux = vetor[i]
			vetor[i] = vetor[i+1]
			vetor[i+1] = aux
			trocou = 1 
		}
	}
	}

	

escreva("vetor ordenado: ")
	para(i=0; i<10; i++){
		escreva(vetor[i], " ")
		}
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 385; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */