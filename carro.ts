var rl = require('readline-sync')
interface carroInterface {
    marca: string
    KML: number
    tanque: number
    andar(): string
    obterGasolina(): void
    adicionarGasolina(): void
    getCarro(): void
    setCarro(): void
}
export class Carro implements carroInterface {
    public marca: string
    public KML: number
    public tanque: number
    constructor(marca: string, KML: number, tanque: number) {
        this.marca = marca
        this.KML = KML
        this.tanque = tanque
    }
    public andar(): string {
        let distancia = rl.questionInt(`qual a distancia que vc quer andar`);
        let combustivelNecessario = distancia / this.KML
        this.tanque -= combustivelNecessario
        if (this.tanque <= 0) {
            return `vc nao tem gasolina`
        } else if (combustivelNecessario => this.tanque) {
            return `vc andou ate seu destino e ainda tem ${this.tanque} de gasolina`
        } else {
            return ""
        }
    }
    public obterGasolina(): void {
        console.log(`vc tem ${this.tanque} de gasolina`);
    }
    public adicionarGasolina(): void {
        let add = rl.questionInt(`quanto de gasolina quer colocar no carro: `);
        this.tanque += add
    }
    public getCarro(): void {
        console.log(`seu carro é da marca ${this.marca}`);
        console.log(`seu carro faz ${this.KML}KM/L`);
        console.log(`vc tem ${this.tanque} de gasolina`);
    }
    public setCarro(): void {
        let setMarca = rl.question(`fale a marca do carro: `);
        let setKML = rl.questionInt(`fale a quantidade e KM/l do carro: `);
        let setTanque = rl.questionInt(`falea gasolina do carro: `);
        if (setMarca === null) {
            this.marca = this.marca
        } else {
            this.marca = setMarca
        }
        if (setKML === null) {
            this.KML = this.KML
        } else {
            this.KML = setKML
        }
        if (setTanque === null) {
            this.tanque = this.tanque
        } else {
            this.tanque = setTanque
        }


    }

}
var teste = new Carro('a', 2, 100);
