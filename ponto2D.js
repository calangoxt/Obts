"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ponto3D = exports.Ponto2DComCoordenadas = exports.Ponto2D = void 0;
var rl = require('readline-sync');
var Ponto2D = /** @class */ (function () {
    function Ponto2D() {
        this.x = 0;
        this.y = 0;
    }
    Ponto2D.prototype.setx = function () {
        this.x = rl.questionInt('fala o x');
    };
    Ponto2D.prototype.sety = function () {
        this.y = rl.questionInt('fala o y');
    };
    Ponto2D.prototype.setxy = function () {
        this.x = rl.questionInt('fala o x');
        this.y = rl.questionInt('fala o y');
    };
    Ponto2D.prototype.getx = function () {
        console.log(this.x);
    };
    Ponto2D.prototype.gety = function () {
        console.log(this.y);
    };
    Ponto2D.prototype.getxy = function () {
        console.log('x:', this.x, ',', 'y:', this.y);
    };
    Ponto2D.prototype.mover = function () {
        this.setxy();
        this.getxy();
    };
    Ponto2D.prototype.equals = function (outroPonto) {
        return Math.sqrt(Math.pow((outroPonto.x - this.x), 2) + Math.pow((outroPonto.y - this.y), 2));
    };
    Ponto2D.prototype.toString = function () {
        return "Ponto x:".concat(this.x, ", ponto y:").concat(this.y);
    };
    Ponto2D.prototype.distancia = function (outroPonto) {
        return this.equals(outroPonto);
    };
    Ponto2D.prototype.clone = function () {
        var clone = new Ponto2DComCoordenadas(this.x, this.y);
        return clone;
    };
    return Ponto2D;
}());
exports.Ponto2D = Ponto2D;
var Ponto2DComCoordenadas = /** @class */ (function (_super) {
    __extends(Ponto2DComCoordenadas, _super);
    function Ponto2DComCoordenadas(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    return Ponto2DComCoordenadas;
}(Ponto2D));
exports.Ponto2DComCoordenadas = Ponto2DComCoordenadas;
var Ponto3D = /** @class */ (function (_super) {
    __extends(Ponto3D, _super);
    function Ponto3D(outroPonto) {
        var _this = _super.call(this) || this;
        _this.x = outroPonto.x;
        _this.y = outroPonto.y;
        return _this;
    }
    return Ponto3D;
}(Ponto2D));
exports.Ponto3D = Ponto3D;
