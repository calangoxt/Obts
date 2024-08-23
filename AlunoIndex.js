"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ex1_1 = require("./ex1");
var rl = require('readline-sync');
var menu = true;
var alunoExiste = false;
var alunoNovo = new ex1_1.Aluno(0, '', 0, 0, 0);
while (menu) {
    console.log("\n    1 - Cadastrar Nome e Matr\u00EDcula (Aluno)\n    2 - Cadastrar Notas (Aluno)\n    3 - Verificar M\u00E9dia das Provas (Aluno)\n    4 - Verificar M\u00E9dia Final (Aluno)\n    0 - Sair\n    ");
    var option = rl.questionInt('escolher');
    switch (option) {
        case 1:
            var nome = rl.question('seu nome: ');
            var matricula = rl.questionInt('Matricula');
            alunoNovo = inserirNotas(nome, matricula);
            alunoExiste = true;
            break;
        case 2:
            if (alunoExiste) {
                alunoNovo = inserirNotas(nome, matricula);
            }
            else {
                throw new Error('o aluno nao foi criado ');
            }
            break;
        case 3:
            if (alunoExiste) {
                alunoNovo.media;
            }
            else {
                throw new Error('o aluno nao foi criado ');
            }
            break;
        case 4:
            if (alunoExiste) {
                alunoNovo.final;
            }
            else {
                throw new Error('o aluno nao foi criado ');
            }
            break;
        case 0:
            process.exit(0);
        default:
            console.log(' nao existe');
            break;
    }
}
function inserirNotas(nome, matricula) {
    var prova1 = rl.questionInt('prova 1: ');
    var prova2 = rl.questionInt('prova 2: ');
    var trabalho = rl.questionInt('trabalho ');
    var alunoNovo = new ex1_1.Aluno(matricula, nome, prova1, prova2, trabalho);
    return alunoNovo;
}
