import { Ciclista } from "./Ciclista";
import { Corredor } from "./Corredor";
import { Nadador } from "./Nadador";
import { Pessoa } from "./Pessoa";

 export class Triatleta extends Pessoa implements Ciclista, Nadador, Corredor{


	constructor(nome: string) {
        super(nome)
	}



     public pedalar(): void {
        console.log("pedalando...");
     }
     public aquecer(): void {
        console.log("aquecendo...");
     }
     public nadar(): void {
        console.log("nadando...");
     }

     public correr(): void {
        console.log("correndo...");

 }
}