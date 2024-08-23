/*let jonhWick = {
ano:2014,
diretor:'Chad Stahelski',
personagens:['jonh Wick','winston','cachorro'],
assistiu:true
}
jonhWick.ator = ['keanu Reeves','ian','cachorro']
for(i=0;i<=2;i++){
    console.log('o personagens',jonhWick.personagens[i],'e interpretado por',jonhWick.ator[i].replaceAll(jonhWick.ator[0],'xuxa'))
}

const curso = {
nome:"noturno frontend",
linguagens:["Js","CSS","HTML"]
}
curso.numeroEstudante = 50
console.log(curso.numeroEstudante)

const professores = [
{nome:'andrei',modulo:1},
{nome:"vitor",modulo:2},
{nome:'mina',modulo:3}
]
console.log(professores[2].nome)
*/

const usuario = {
    nome: 'prof',
    idade: 25,
    email: 'xxxxx@gamil.com',
    cidade:"sao paulo"
}
const novoUsuario = {
    ...usuario,
    nome:'joao',
    idade:28
}
console.log(novoUsuario)




