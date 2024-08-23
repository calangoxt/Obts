let rl = require('readline-sync')
import { Ponto2D } from "./ponto2D";
import { Ponto2DComCoordenadas } from "./ponto2D";
import { Ponto3D } from "./ponto2D";
let teste = new Ponto2D()
let teste2 = new Ponto2DComCoordenadas(0,0)




while(true){
    console.log(
        `
        0 - Finalizar
        1 - setx
        2 - sety
        3 - setxy
        4 - getx
        5 - gety 
        6 - getxy 
        7 - equals
        8 - mostrar em texto 
        9 - distancia
        10 - clone
        11 - set outro x e y`
    );

let option = rl.questionInt('Escolha:')

switch (option) {
    case 1:
        teste.setx()
        break
    case 2:
        teste.sety()
        break
    case 3:
        teste.setxy()
        break
    case 4:
        teste.getx()
        break
    case 5:
        teste.gety()
        break
    case 6:
        teste.getxy()
        break
    case 7:
        console.log(teste.equals(teste2));
        
        break
    case 8:
        console.log(teste.toString());
        
        break
    case 9:
        console.log(teste.distancia(teste2));
        
    case 10:
        teste.clone()
        break
        case 11:
            teste2.setxy()
            break
    case 0:
        process.exit(0)
    default:
        console.log('Opcao invalida');
        break
}
}