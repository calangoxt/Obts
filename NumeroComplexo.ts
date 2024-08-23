let rl = require('readline-sync')
import { log } from "console"
import { questionInt } from "readline-sync"

export class numeroComplexo {
    real: number
    imaginario: number
    constructor(real: number, imaginario: number) {
        this.real = real
        this.imaginario = imaginario
    }
    getReal() {
        console.log(this.real);
    }
    getImaginario() {
        console.log(this.imaginario);
    }
    get() {
        console.log('imaginario:', this.getImaginario);
        console.log('real:', this.getReal);
    }
    setReal() {
        this.real = rl.questionInt('fale o numero real')
    }
    setImaginario() {
        this.imaginario = rl.questionInt('fale o imaginario')
    }
    set() {
        this.setImaginario()
        this.getReal()
    }
    somar(outroComplexo: Novaclass): string {
        let novoReal = this.real + outroComplexo.real
        let novoImaginario = this.real + outroComplexo.imaginario
        return `real:${novoReal}  imaginario:${novoImaginario}`
    }
    subtrair(outroComplexo: Novaclass): string {
        let novoReal = this.real - outroComplexo.real
        let novoImaginario = this.real - outroComplexo.imaginario
        return `real:${novoReal}  imaginario:${novoImaginario}`
    }
    multiplicar(outroComplexo: Novaclass): string {
        let novoReal = this.real * outroComplexo.real
        let novoImaginario = this.real * outroComplexo.imaginario
        return `real:${novoReal}  imaginario:${novoImaginario}`
    }
    dividir(outroComplexo: Novaclass): string {
        let novoReal = this.real / outroComplexo.real
        let novoImaginario = this.real / outroComplexo.imaginario
        return `real:${novoReal}  imaginario:${novoImaginario}`
    }
    equals(outroComplexo: Novaclass): boolean {
        if ((Math.sqrt((outroComplexo.real - this.real) ** 2 + (outroComplexo.imaginario - this.imaginario) ** 2)) == 0) {
            return true
        } else {
            return false
        }
    }
    toString(): string{
        return `real:${this.real}  imaginario:${this.imaginario}`
    }
    modulo(): number{
        return Math.sqrt(this.real * this.real + this.imaginario * this.imaginario);
    }
}




export class Novaclass extends numeroComplexo {}

