// Exemplo de entrada
/*const pessoaa = {
    nome: "Vitor Hugo", 
    apelidos: ["Vitinho", "Vitão", "Vit"]
 }
function apelido(objeto){
    pessoa = {
...objeto,
}


    console.log("Eu sou Vitor, mas pode me chamar de:",pessoa.apelidos[0],',',pessoa.apelidos[1],'ou',pessoa.apelidos[2],)
}
apelido(pessoaa)





function apelido2(objeto){
    pessoa = {
...objeto,
apelidoNovos : ['vitu','vi',"cabeca do pic#"]
}


    console.log("Eu sou Vitor, mas pode me chamar de:",pessoa.apelidoNovos[0],',',pessoa.apelidoNovos[1],'ou',pessoa.apelidoNovos[2],)
}
apelido2(pessoaa)





const pessoa3= {
nome:"luiza",
idade:18,
profissao:"estudante"
}


function minhaFuncao(pessoa4) {
    const resultado = []
resultado.push(pessoa4.nome ,pessoa4.nome.length,pessoa4.idade,pessoa4.profissao,pessoa4.profissao.length)
    return resultado
}
console.log(minhaFuncao(pessoa3))*/


let carrinho = []

let item1={
ob:'banana',
disponibilidade:true
}
let item2={
ob:'morango',
disponibilidade:true
}
let item3={
ob:'laranja',
disponibilidade:true
}

function compra(it1,it2,it3){
if(it1.disponibilidade===true){
carrinho.push(it1.ob)
}else{
    console.log(`o item ${it1.ob} esta em falta `)
} 

if(it2.disponibilidade===true){
    carrinho.push(it2.ob)
 }else{
        console.log(`o item ${it2.ob} esta em falta `)
}

if(it3.disponibilidade===true){
    carrinho.push(it3.ob)
}else{
        console.log(`o item ${it3.ob} esta em falta `)
 }

  console.log(carrinho[0],carrinho[1],carrinho[2] )
}
compra(item1,item2,item3)



