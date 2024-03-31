const numeros: Array<number> =  new Array<number>();

//add um elemento
numeros.push(42);
numeros.push(24);
numeros.push(42);
numeros.push(24);
console.table(numeros);

//add varios elementos
numeros.unshift(5,4,8,5,3);
console.table(numeros);
//mostra o indice do elemento
console.log(` a posição do elemento 5 é ${numeros.indexOf(5)}`);

//diz se o elemento existe no array
console.log(`o elemento 15 existe? ${numeros.includes(15)}`);
console.log(`o elemento 24 existe? ${numeros.includes(24)}`);

//localiza o elemento com indexOf e atualiza os dados do elemento
numeros[numeros.indexOf(5)] = 10;
console.log  
console.table(numeros);

//localiza o elemento com indexOf e apaga um elemento
//Array.splice(param1, param2 ) param1 = index , param2 = quantos elementos quer apagar a partir do index
numeros.splice(numeros.indexOf(10) , 1);
console.log("apaga um");
console.table(numeros);

//apaga dois elementos
numeros.splice(numeros.indexOf(10) , 2);
console.log("apaga dois");
console.table(numeros);