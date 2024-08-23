"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garagem = void 0;
var rl = require('readline-sync');
var Garagem = /** @class */ (function () {
    function Garagem() {
        this.garagem = [];
    }
    Garagem.prototype.addCarro = function (carro) {
        //if com this.garagem.length >= 10 não pode fazer push
        if (this.garagem.length >= 10) {
            console.log("garagem cheia");
        }
        else {
            this.garagem.push(carro);
        }
    };
    Garagem.prototype.removerJogo = function () {
        console.log(this.garagem);
        var remover = rl.question('Insira o carro que deseja retirar da garagem: ');
        this.garagem = this.garagem.filter(function (carro) { return carro.marca !== remover; });
    };
    return Garagem;
}());
exports.Garagem = Garagem;
