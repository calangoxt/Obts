"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require('readline-sync');
var ponto2D_1 = require("./ponto2D");
var ponto2D_2 = require("./ponto2D");
var teste = new ponto2D_1.Ponto2D();
var teste2 = new ponto2D_2.Ponto2DComCoordenadas(0, 0);
while (true) {
    console.log("\n        0 - Finalizar\n        1 - setx\n        2 - sety\n        3 - setxy\n        4 - getx\n        5 - gety \n        6 - getxy \n        7 - equals\n        8 - mostrar em texto \n        9 - distancia\n        10 - clone");
    var option = rl.questionInt('Escolha:');
    switch (option) {
        case 1:
            teste.setx();
            break;
        case 2:
            teste.sety();
            break;
        case 3:
            teste.setxy();
            break;
        case 4:
            teste.getx();
            break;
        case 5:
            teste.gety();
            break;
        case 6:
            teste.getxy();
            break;
        case 7:
            console.log(teste.equals(teste2));
            break;
        case 8:
            console.log(teste.toString());
            break;
        case 9:
            console.log(teste.distancia(teste2));
        case 10:
            teste.clone();
            break;
        case 11:
            teste2.setxy();
            break;
        case 0:
            process.exit(0);
        default:
            console.log('Opcao invalida');
            break;
    }
}
