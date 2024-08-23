"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ex3_1 = require("./ex3");
var Passageiro_1 = require("./Passageiro");
var rl = require('readline-sync');
var vooo = new ex3_1.Voo('45555', '2222-2-22');
while (true) {
    console.log("\n 1 - Cadastrar passa geiro\n 2 - Verificar pr\u00F3xima cadeira livre\n 3 - Verificar cadeira\n 4 - Ocupar cadeira\n 5 - Verificar Vagas\n 6 - Verificar V\u00F4o\n 7 - Verificar data de V\u00F4o\n 8 - Clonar V\u00F4o\n 0 - Sair\n  ");
    var option = rl.questionInt('escolher');
    switch (option) {
        case 1:
            set(); //set passageiro
            break;
        case 2:
            vooo.proximoLivre();
            break;
        case 3:
            var verificaCadeira = rl.questionInt('escolha a cadeira');
            console.log(vooo.verifica(verificaCadeira));
            break;
        case 4:
            var ocupaCadeira = rl.questionInt('escolha a cadeira');
            vooo.ocupa(ocupaCadeira);
            break;
        case 5:
            console.log("tem ".concat(vooo.vagas(), "vagas livres"));
            break;
        case 6:
            console.log(vooo.data);
            console.log(vooo.numeroVoo);
            console.log(vooo.vagas());
            break;
        case 7:
            console.log(vooo.data);
            break;
        case 8:
            var vooDois = vooo.clone();
            console.log(vooDois);
            break;
        case 0:
            process.exit(0);
    }
}
function set() {
    var nomeSet = rl.question('nome : ');
    var idadeSet = rl.questionInt('idade: ');
    var cpfSet = rl.questionInt('cpf:  ');
    var voo = new Passageiro_1.Passageiro(nomeSet, idadeSet, cpfSet);
    return voo;
}
function vagasLivre() {
    for (var i = 0; i < 100; i++) {
        if (vooo.cadeira[i] == 1) {
            console.log(i + 1);
        }
    }
}
