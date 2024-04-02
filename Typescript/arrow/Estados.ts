let estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Paraíba",
    "Pernambuco",
    "Bahia",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Ceará"
]

let estadosRepetidos: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Paraíba",
    "Pernambuco",
    "Bahia",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Ceará",
    "São Paulo",
    "Bahia"
]

let estadosContemRio = estados.filter( e => e.includes("Rio"));
console.dir(estadosContemRio)

let estadosRioParana =  estados.some( e=>{
    return e === "Rio de Janeiro" || e==="Paraná"})
console.log(estadosRioParana)