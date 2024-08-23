var rl = require('readline-sync');

export interface Aluno {
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number): void;
    media(): number;
    final(): number;
}


export class Aluno implements Aluno {
    matricula: number
    nome: string
    notaProva1: number
    notaProva2: number
    notaTrabalho: number

    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number) {
        this.matricula = matricula
        this.nome = nome
        this.notaProva1 = notaProva1
        this.notaProva2 = notaProva2
        this.notaTrabalho = notaTrabalho
    }

    media(): number {
        let media = (this.notaProva1 + this.notaProva2) / 2
        return media
    }

    notaFinal(): number {
        let notaFinal = (this.media() + this.notaTrabalho) / 2
        return notaFinal
    }

    getAluno(): void {
        console.log(`Nome: ${this.nome}, Matricula: ${this.matricula}, Nota 1Prova: ${this.notaProva1}, Nota 2Prova: ${this.notaProva2} , Nota Trabalho: ${this.notaTrabalho}`)
    }
    setAluno(): void {
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



while (true) {
    let notas = rl.questionInt("teste")
    switch (notas) {
        case 1:
            let matricula = rl.questionInt('digite a matricula: ')
            let nome = rl.question('digite o nome: ')
            let alunonovo = new Aluno(matricula, nome, 0, 0, 0)
            break;
        case 2:
            let notaProva1 = rl.questionInt('digite a nota da prova 1:')
            let notaProva2 = rl.questionInt('digite a nota da prova 2:')
            let notaTrabalho = rl.questionInt('digite a nota do trabalho: ')
            let aluno = new Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho)
            break;
        case 3:
            let media = rl.questionInt('digite a media: ')
            break;
        case 4:
            let notaFinal = rl.questionInt('digite a nota final: ')
            break;
        case 0:
            process.exit(0)
    }
}

let reader = require('readline-sync')

let alunoExiste = false
let alunoNovo = new Aluno(0, '', 0, 0, 0)

while (true) {
    console.log(
        `
        1 - Cadastrar Nome e Matrícula (Aluno)
        2 - Cadastrar Notas (Aluno)
        3 - Verificar Média das Provas (Aluno)
        4 - Verificar Média Final (Aluno)
        0 - Sair
        `
    );

    let option = reader.questionInt("Escolha: ")

    switch (option) {
        case 1:
            let nomeAluno = reader.question("Insira o nome do aluno: ")
            let matriculaAluno = reader.questionInt("Nº Matrícula: ")
            alunoNovo = inserirNotas(nomeAluno, matriculaAluno)
            alunoExiste = true
            break
        case 2:
            if (alunoExiste) {
                alunoNovo = inserirNotas(nomeAluno, matriculaAluno)
            } else {
                throw new Error(`O aluno não foi criado`)
            }
            break
        case 3:
            if (alunoExiste) {
                alunoNovo.media()
            }
            break
        case 4:
            if (alunoExiste) {
                alunoNovo.final()
            }
            break
        case 0:
            process.exit(0)
        default:
            console.log(`Essa opção não existe`)
            break

    }

}

function inserirNotas(nome: string, matricula: number): Aluno {
    let prova1 = reader.questionInt("Insira a nota da prova 1: ")
    let prova2 = reader.questionInt("Insira a nota da prova 2: ")
    let trabalho = reader.questionInt("Insira a nota do trabalho: ")
    let alunoNovo = new Aluno(matricula, nome, prova1, prova2, trabalho)
    return alunoNovo
}

