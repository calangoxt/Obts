"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voo = void 0;
var Voo = /** @class */ (function () {
    function Voo(numeroVoo, data) {
        this.cadeira = [];
        this.numeroVoo = numeroVoo;
        this.data = data;
        this.criarVoo();
    }
    Voo.prototype.criarVoo = function () {
        for (var i = 0; i < 100; i++) {
            this.cadeira.push(0);
        }
    };
    Voo.prototype.proximoLivre = function () {
        for (var i = 0; i < this.cadeira.length; i++) {
            if (this.cadeira[i] == 0) {
                console.log(i + 1);
                break;
            }
        }
    };
    Voo.prototype.verifica = function (cadeira) {
        var verificar = cadeira - 1;
        if (this.cadeira[verificar] === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Voo.prototype.ocupa = function (cadeira) {
        if (this.verifica(cadeira - 1) === true) {
            this.cadeira[cadeira - 1] = 1;
        }
        else {
            console.log('cadeira ocupada');
        }
    };
    Voo.prototype.vagas = function () {
        var vagas = 0;
        for (var i = 0; i < 100; i++) {
            if (this.cadeira[i] == 0) {
                vagas++;
            }
        }
        return vagas;
    };
    Voo.prototype.getVoo = function () {
        console.log(this.numeroVoo);
        console.log(this.cadeira);
    };
    Voo.prototype.getData = function () {
        return this.data;
    };
    Voo.prototype.clone = function () {
        var novoVoo = new Voo(this.numeroVoo, this.data);
        novoVoo.cadeira = this.cadeira;
        return novoVoo;
    };
    return Voo;
}());
exports.Voo = Voo;
var voo1 = new Voo('45555', '2222-2-22');
voo1.criarVoo();
voo1.ocupa(1);
console.log(voo1.vagas());
