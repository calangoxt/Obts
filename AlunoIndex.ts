import { Aluno } from "./ex1";
var rl = require('readline-sync')
let menu: boolean = true
let alunoExiste = false
let alunoNovo = new Aluno(0, '', 0, 0, 0)
while (menu) {
    console.log(`
    1 - Cadastrar Nome e Matrícula (Aluno)
    2 - Cadastrar Notas (Aluno)
    3 - Verificar Média das Provas (Aluno)
    4 - Verificar Média Final (Aluno)
    0 - Sair
    `)

let option = rl.questionInt('escolher')
switch (option) {
    case 1:
        let nome = rl.question('seu nome: ')
        let matricula = rl.questionInt('Matricula')
        alunoNovo = inserirNotas(nome, matricula)
        alunoExiste = true
        break
    case 2:
        if (alunoExiste) {
            alunoNovo = inserirNotas(nome, matricula)
        } else {
            throw new Error('o aluno nao foi criado ')
        }
        break
    case 3:
        if (alunoExiste) {
            alunoNovo.media
        } else {
            throw new Error('o aluno nao foi criado ')
        }
        break
    case 4:
        if (alunoExiste) {
            alunoNovo.final
        } else {
            throw new Error('o aluno nao foi criado ')
        }
        break
    case 0:
        process.exit(0)
    default:
        console.log(' nao existe')
        break
}}
function inserirNotas(nome: string, matricula: number): Aluno {
    let prova1 = rl.questionInt('prova 1: ')
    let prova2 = rl.questionInt('prova 2: ')
    let trabalho = rl.questionInt('trabalho ')
    let alunoNovo = new Aluno(matricula, nome, prova1, prova2, trabalho)
    return alunoNovo
}