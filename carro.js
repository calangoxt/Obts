"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var rl = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(marca, KML, tanque) {
        this.marca = marca;
        this.KML = KML;
        this.tanque = tanque;
    }
    Carro.prototype.andar = function () {
        var _this = this;
        var distancia = rl.question("qual a distancia que vc quer andar");
        var combustivelNecessario = distancia / this.KML;
        this.tanque -= combustivelNecessario;
        if (this.tanque <= 0) {
            return "vc nao tem gasolina";
        }
        else if (function (combustivelNecessario) { return _this.tanque; }) {
            return "vc andou ate seu destino e ainda tem ".concat(this.tanque, " de gasolina");
        }
        else {
            return "";
        }
    };
    Carro.prototype.obterGasolina = function () {
        console.log("vc tem ".concat(this.tanque, " de gasolina"));
    };
    Carro.prototype.adicionarGasolina = function () {
        var add = rl.question("quanto de gasolina quer colocar no carro: ");
        this.tanque += add;
    };
    Carro.prototype.getCarro = function () {
        console.log("seu carro \u00E9 da marca ".concat(this.marca));
        console.log("seu carro faz ".concat(this.KML, "KM/L"));
        console.log("vc tem ".concat(this.tanque, " de gasolina"));
    };
    Carro.prototype.setCarro = function () {
        var setMarca = rl.question("fale a marca do carro: ");
        var setKML = rl.question("fale a quantidade e KM/l do carro: ");
        var setTanque = rl.question("falea gasolina do carro: ");
        this.marca = setMarca;
        this.KML = setKML;
        this.tanque = setTanque;
    };
    return Carro;
}());
exports.Carro = Carro;
var teste = new Carro('a', 2, 100);
