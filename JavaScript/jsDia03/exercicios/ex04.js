const leia = require("readline-sync");

console.log((" Digite três caracteristicas do animal"))
let anm1 = leia.question(" digite a caracteristica ")
let anm2 = leia.question("  digite a caracteristica ")
let anm3 = leia.question("  digite a caracteristica ")


if (anm1 == "vertebrado" && anm2== "mamifero" && anm3 == "onivoro"){
    console.log ("Humano")
}else if(anm1 == "vertebrado" && anm2== "mamifero" && anm3 == "herbivoro"){
    console.log("Vaca")
}else if(anm1 == "vertebrado" && anm2== "ave" && anm3 == "onivoro"){
    console.log("Pomba")
}else if(anm1 == "vertebrado" && anm2== "ave" && anm3 == "carnivoro"){
    console.log("Águia")
}else if(anm1 == "invertebrado" && anm2== "inseto" && anm3 == "herbivoro"){
    console.log("Lagarta")
}else if(anm1 == "invertebrado" && anm2== "inseto" && anm3 == "hematofago"){
    console.log("Pulga")
}else if(anm1 == "invertebrado" && anm2== "anelideo" && anm3 == "onivoro"){
    console.log("Minhoca")
}else if(anm1 == "invertebrado" && anm2== "anelideo" && anm3 == "hematofago"){
    console.log("Sanguessuga")
}else{
    console.log("digite caracteristicas validas")
}
