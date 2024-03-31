import { Terrestre } from "./TerrestreH";



export class Automovel extends Terrestre{

private _cor : string;
private _numeroDePortas : number;
private _placa : string;
private _marchas: number;
	constructor( numeroDeRodas: number, velocidade: number, capacidade: number, cor: string, numeroDePortas: number,placa: string, marchas: number  ) {
super(capacidade, numeroDeRodas, velocidade)
this._cor = cor;
this._numeroDePortas = numeroDePortas;
this._placa =  placa;
this._marchas =  marchas;

}


    /**
     * Getter cor
     * @return {string}
     */
	public get cor(): string {
		return this._cor;
	}

    /**
     * Getter numeroDePortas
     * @return {number}
     */
	public get numeroDePortas(): number {
		return this._numeroDePortas;
	}

    /**
     * Getter placa
     * @return {string}
     */
	public get placa(): string {
		return this._placa;
	}

    /**
     * Getter marchas
     * @return {number}
     */
	public get marchas(): number {
		return this._marchas;
	}

    /**
     * Setter cor
     * @param {string} value
     */
	public set cor(value: string) {
		this._cor = value;
	}

    /**
     * Setter numeroDePortas
     * @param {number} value
     */
	public set numeroDePortas(value: number) {
		this._numeroDePortas = value;
	}

    /**
     * Setter placa
     * @param {string} value
     */
	public set placa(value: string) {
		this._placa = value;
	}

    /**
     * Setter marchas
     * @param {number} value
     */
	public set marchas(value: number) {
		this._marchas = value;
	}

    public visualizar( ): void{
        super.visualizar()
        console.log(`cor do automovel: ${this._cor}`)
        console.log(`numero de portas : ${this._numeroDePortas}`)
        console.log(`placa do automovel : ${this._placa}`)
        console.log(`número de marchas : ${this._marchas}`)
    }
}