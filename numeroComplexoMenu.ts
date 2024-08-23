import { Novaclass, numeroComplexo } from "./NumeroComplexo"

let rl = require('readline-sync')
let option = rl.questionInt('Escolha:')
let teste = new numeroComplexo(0, 0)
let teste2 = new Novaclass(0, 0)
while (true) {
    console.log(
        `
        0 - Finalizar
        1 - set
        2 - set real
        3 - set imaginario
        4 - get
        5 - getreal
        6 - getImaginario
        7 - somar
        8 - subtrair
        9 - multiplicar
        10 - dividir
        11 - equals
        12 - mostrar em texto
        13 - modulo 
        14 - set outro   `
    );

    switch (option) {
        case 1:
            teste.set()
            break
        case 2:
            teste.setReal()
            break
        case 3:
            teste.setImaginario()
            break
        case 4:
            teste.get()
            break
        case 5:
            teste.getReal()
            break
        case 6:
            teste.getImaginario()
            break
        case 7:
            console.log(teste.somar(teste2));
            break
        case 8:
            console.log(teste.subtrair(teste2));
            break
        case 9:
            console.log(teste.multiplicar(teste2));
            break
        case 10:
            console.log(teste.dividir(teste2));
            break
        case 11:
            console.log(teste.equals(teste2));
            break
        case 12:
            console.log(teste.toString());
            break
        case 13:
            console.log(teste.modulo());
            break
        case 14:
            teste2.set()
            break
        case 0:
            process.exit(0)
        default:
            console.log('Opcao invalida');
            break
    }
}