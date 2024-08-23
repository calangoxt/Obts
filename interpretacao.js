const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
//a)Matheus Nachtergaele //Virginia Cavendish //canal: "Globo", horario: "14h"


const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)//nome: "Juca", idade: 3, raca: "SRD"
console.log(gato)//nome: "Juca", idade: 3, raca: "SRD"
console.log(tartaruga)//nome: "Jubo", idode: 3, roco: "SRD"
// copia a propriedade anterior

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))//false 
console.log(minhaFuncao(pessoa, "altura"))//indefined
//pois nao tem o valor altura

