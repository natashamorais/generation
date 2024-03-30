programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{
		inteiro vetor[10] = {2,5,1,3,4,9,7,8,10,6},i, aux = 0, pares, soma = 0
		real media

		escreva("Elementos nos índices ímpares:", "\n" , vetor[1] , " ",  vetor[3]," ", vetor[5], " ", vetor[7], " ", vetor[9])

		escreva("\n", "Elementos pares:", "\n")
			para(i=0; i<=10; i++){
				se(i%2 == 0){
				pares= i
					escreva(" ", pares)
				}
				
				
	    	
		}
		para(i=0; i<10; i++){
				soma +=vetor[i]
				
		}
			escreva("\n","Soma:", "\n", soma)
		media=soma/10
		escreva("\n","Média:", "\n", mat.arredondar(media,2))

		
		
		
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 418; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */