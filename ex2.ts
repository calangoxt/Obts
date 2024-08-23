var rl = require('readline-sync')
export interface Data {
    constructor(dia: number, mes: number, ano: number);
    compara(outraData: Data):void;
    getDia(): number;
    getMes(): number;
    getMesExtenso(): void;
    getAno(): number;
    isBissexto(): void;
    clone(): Data;
}
export class Data implements Data {
    dia: number
    mes: number
    ano: number
    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
    compara(outraData: Data): void {
        if (outraData.dia === this.dia) {
            console.log('dia igual');
        } else {
            console.log('dia diferente ');
        } if (outraData.mes === this.mes) {
            console.log('mes igual')
        } else {
            console.log('mes diferante');
        } if (outraData.ano === this.ano) {
            console.log('mes igual')
        } else {
            console.log('mes diferente');
        }


    }

    getDia(): number {
        return this.dia
    }
    getMes(): number {
        return this.mes

    }
    getAno(): number {
        return this.ano
    }
    isBissexto(): void {
        let bissexto = (this.ano % 4) == 0
        if (this.ano == 2000 || this.ano == 1000 || this.ano == 0) {
            console.log('ano nao bissexto')
        } else if (this.ano % 4 == 0 && this.ano % 100 != 0) {
            console.log('ano bissexto');

        } else {
            console.log(' nao bissexto');
        }
    }
    getMesExtenso(): void {
        switch (this.mes) {
            case 1:
                console.log("Janeiro")
                break
            case 2:
                console.log("Fevereiro")
                break
            case 3:
                console.log("Março")
                break
            case 4:
                console.log("Abril")
                break
            case 5:
                console.log("maio")
                break
            case 6:
                console.log("junho")
                break
            case 7:
                console.log("julho")
                break
            case 8:
                console.log("agosto")
                break
            case 9:
                console.log("setembro")
                break
            case 10:
                console.log("Outubro")
                break
            case 11:
                console.log("Novembro")
                break
            case 12:
                console.log("Dezembro")
                break
            default:
                console.log('mes invalido')
                break
        }
    }
    clone(): Data {
        let novaData = new Data(this.dia, this.mes, this.ano)
        return novaData
    }
}