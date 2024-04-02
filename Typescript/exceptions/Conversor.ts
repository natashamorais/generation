try{
    const resultado =  converte("natasha");

    console.log(resultado);
}catch (error){
   if( error instanceof TypeError){
    console.log(`TypeError: tipo de dado incorreto`)
   } else{
    console.log(`Error ${error}`)
   }
}finally{
    console.log("bye bye")
   }


export function converte( conteudo: any): string{
return conteudo.toUpperCase();

}

