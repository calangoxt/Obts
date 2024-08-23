const pessoa= {
nome:'m',
idade:'16',
musica:'teto'
}



function pessoas(objeto){
const novaPessoa = {
...objeto,
comida:['lasanha','strogonoff'],
amiga:'luiza' ,
idade2:18,
}
console.log('o nome da pessoa é',novaPessoa.nome,"sua comida favorita sao",novaPessoa.comida[0],',',novaPessoa.comida[1],"seu melhor amigo se chama",novaPessoa.amiga,"e tem",novaPessoa.idade2,'anos')
}

p(pessoa)