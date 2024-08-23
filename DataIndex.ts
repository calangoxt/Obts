import { Data } from "./ex2";
var rl = require('readline-sync')
let menu = true
let compare=[]
while (menu) {
    console.log(`
    1 - Criar a data:  
    2 - 
    3 - 
    4 - 
    5 - 
    0 - Sair
    `)

    let option = rl.questionInt('escolher')
    switch (option) {
        case 1:
            inserirDatas()
            break
        case 2:
            
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
    }
}

function inserirDatas(): Data {
    let dia = rl.questionInt('dia: ')
    let mes = rl.questionInt('mes: ')
    let ano = rl.questionInt('ano: ')
    let dataNovo = new Data(dia, mes, ano)
    return dataNovo
}
function compararData(dia,mes,ano){
    let dataArray ={
        dataDia:dia,
        dataMes:mes,
        dataAno:ano
    } 
compare.push(dataArray)  
}