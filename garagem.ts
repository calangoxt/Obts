import { Carro } from "./carro"
var rl = require('readline-sync')
export class Garagem {
    public garagem: Carro[]

    constructor() {
        this.garagem = []
    }

    public addCarro(carro: Carro): void {
        //if com this.garagem.length >= 10 não pode fazer push
        if (this.garagem.length >= 10) {
            console.log(`garagem cheia`)
        } else {
            this.garagem.push(carro)
        }
    }
    public removerCarro(): void {
        console.log(this.garagem)
        let remover = rl.question('Insira o carro que deseja retirar da garagem: ')
        this.garagem = this.garagem.filter(carro => carro.marca !== remover)
    }



}