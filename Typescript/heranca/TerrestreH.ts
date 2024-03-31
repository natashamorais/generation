import { Transporte} from "./TransporteH"

export class Terrestre extends Transporte{

    private _numeroDeRodas : number;
    private _velocidade : number;

	constructor(numeroDeRodas: number, velocidade: number, capacidade: number) {
        super(capacidade);
        this._numeroDeRodas = numeroDeRodas;
		this._velocidade = velocidade;
	}


    /**
     * Getter numeroDeRodas
     * @return {number}
     */
	public get numeroDeRodas(): number {
		return this._numeroDeRodas;
	}

    /**
     * Getter velocidade
     * @return {number}
     */
	public get velocidade(): number {
		return this._velocidade;
	}

    /**
     * Setter numeroDeRodas
     * @param {number} value
     */
	public set numeroDeRodas(value: number) {
		this._numeroDeRodas = value;
	}

    /**
     * Setter velocidade
     * @param {number} value
     */
	public set velocidade(value: number) {
		this._velocidade = value;
	}

public visualizar( ): void{
    super.visualizar()
    console.log(`Número de rodas : ${this._numeroDeRodas}`)
    console.log(`Velocidade : ${this._velocidade}`)
}
}