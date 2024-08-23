var readlineSync = require('readline-sync')

let pergunta = (readlineSync.question(`Ola qual seu nome:`))
let pergunta2 = (readlineSync.question(`qual seu idade:`))
let pergunta3 = (readlineSync.question(`e qual seu profissao:`))

function desafio(p1,p2,p3){
let resposta= {
nome:p1,
idade:p2,
profissao:p3,
}
console.log(resposta, typeof(resposta))
}
desafio(pergunta,pergunta2,pergunta3)