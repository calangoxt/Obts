"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var rl = require('readline-sync');
var Aluno = /** @class */ (function () {
    function Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho) {
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1;
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }
    Aluno.prototype.media = function () {
        var media = (this.notaProva1 + this.notaProva2) / 2;
        return media;
    };
    Aluno.prototype.notaFinal = function () {
        var notaFinal = (this.media() + this.notaTrabalho) / 2;
        return notaFinal;
    };
    Aluno.prototype.getAluno = function () {
        console.log("Nome: ".concat(this.nome, ", Matricula: ").concat(this.matricula, ", Nota 1Prova: ").concat(this.notaProva1, ", Nota 2Prova: ").concat(this.notaProva2, " , Nota Trabalho: ").concat(this.notaTrabalho));
    };
    Aluno.prototype.setAluno = function () {
        var nomeSIM = rl.question("Digite o nome do Aluno: ");
        var matriculaSIM = rl.questionInt("Digite sua matricula: ");
        var prova1SIM = rl.questionInt("Digite a sua 1Nota: ");
        var prova2SIM = rl.questionInt("Digite a sua 2Nota: ");
        var trabalhoSIM = rl.questionInt("Digite a nota do trabalho: ");
        this.nome = nomeSIM;
        this.matricula = matriculaSIM;
        this.notaProva1 = prova1SIM;
        this.notaProva2 = prova2SIM;
        this.notaTrabalho = trabalhoSIM;
    };
    return Aluno;
}());
exports.Aluno = Aluno;
while (true) {
    var notas = rl.questionInt("teste");
    switch (notas) {
        case 1:
            var matricula = rl.questionInt('digite a matricula: ');
            var nome = rl.question('digite o nome: ');
            var alunonovo = new Aluno(matricula, nome, 0, 0, 0);
            break;
        case 2:
            var notaProva1 = rl.questionInt('digite a nota da prova 1:');
            var notaProva2 = rl.questionInt('digite a nota da prova 2:');
            var notaTrabalho = rl.questionInt('digite a nota do trabalho: ');
            var aluno = new Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho);
            break;
        case 3:
            var media = rl.questionInt('digite a media: ');
            break;
        case 4:
            var notaFinal = rl.questionInt('digite a nota final: ');
            break;
        case 0:
            process.exit(0);
    }
}
var reader = require('readline-sync');
var alunoExiste = false;
var alunoNovo = new Aluno(0, '', 0, 0, 0);
while (true) {
    console.log("\n        1 - Cadastrar Nome e Matr\u00EDcula (Aluno)\n        2 - Cadastrar Notas (Aluno)\n        3 - Verificar M\u00E9dia das Provas (Aluno)\n        4 - Verificar M\u00E9dia Final (Aluno)\n        0 - Sair\n        ");
    var option = reader.questionInt("Escolha: ");
    switch (option) {
        case 1:
            var nomeAluno = reader.question("Insira o nome do aluno: ");
            var matriculaAluno = reader.questionInt("Nº Matrícula: ");
            alunoNovo = inserirNotas(nomeAluno, matriculaAluno);
            alunoExiste = true;
            break;
        case 2:
            if (alunoExiste) {
                alunoNovo = inserirNotas(nomeAluno, matriculaAluno);
            }
            else {
                throw new Error("O aluno n\u00E3o foi criado");
            }
            break;
        case 3:
            if (alunoExiste) {
                alunoNovo.media();
            }
            break;
        case 4:
            if (alunoExiste) {
                alunoNovo.final();
            }
            break;
        case 0:
            process.exit(0);
        default:
            console.log("Essa op\u00E7\u00E3o n\u00E3o existe");
            break;
    }
}
function inserirNotas(nome, matricula) {
    var prova1 = reader.questionInt("Insira a nota da prova 1: ");
    var prova2 = reader.questionInt("Insira a nota da prova 2: ");
    var trabalho = reader.questionInt("Insira a nota do trabalho: ");
    var alunoNovo = new Aluno(matricula, nome, prova1, prova2, trabalho);
    return alunoNovo;
}
