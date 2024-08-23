var rl = require('readline-sync')
export interface Aluno {
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number);
    media(): number;
    final(): number;
}
export class Aluno implements Aluno {
    public matricula: number
    public nome: string
    public notaProva1: number
    public notaProva2: number
    public notaTrabalho: number
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number) {
        this.matricula = matricula
        this.nome = nome
        this.notaProva1 = notaProva1
        this.notaProva2 = notaProva2
        this.notaTrabalho = notaTrabalho
    }
    public media(): number {
        let media = (this.notaProva1 + this.notaProva2) / 2
        return media
    }
    final(): number {
        let final = (this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3
        return final
    }
    getAluno(): void{
        console.log(`Nome: ${this.nome}, Matricula: ${this.matricula}, Nota 1Prova: ${this.notaProva1}, Nota 2Prova: ${this.notaProva2} , Nota Trabalho: ${this.notaTrabalho}`)
    }
    setAluno(): void{
        let nomeSIM = rl.question("Digite o nome do Aluno: ")
        let matriculaSIM = rl.questionInt("Digite sua matricula: ") 
        let prova1SIM = rl.questionInt("Digite a sua 1Nota: ")
        let prova2SIM = rl.questionInt("Digite a sua 2Nota: ")
        let trabalhoSIM = rl.questionInt("Digite a nota do trabalho: ")
        this.nome = nomeSIM
        this.matricula = matriculaSIM
        this.notaProva1 = prova1SIM
        this.notaProva2 = prova2SIM
        this.notaTrabalho = trabalhoSIM
    }
}
var teste = new Aluno(7777, 'alloooo', 7, 9, 8);
console.log(teste.final())