import { Automovel } from './Automovel';
import { Terrestre } from './Terrestre';
import { Transporte } from './Transporte';

let t1: Transporte = new Transporte(5);
t1.capacidade = 4;

console.log(`A Capacidade do meio de transporte é ${t1.capacidade}`)

t1.visualizar()

let ter1: Terrestre = new Terrestre( 5, 4 , 200)

ter1.visualizar()

let auto:  Automovel =  new Automovel(4,200,4,"rosa",2,"barbie-girls",7 )
 
auto.visualizar()
