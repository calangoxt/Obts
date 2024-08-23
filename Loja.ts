var leitor = require('readline-sync')

class Produto{
nome: string
precoVendido: number
marca: string
precoComprado: number
lucro: number

constructor (nome: string, precoVendido: number, marca: string, precoComprado: number){
this.nome = nome
this.precoVendido = precoVendido
this.precoComprado = precoComprado
this.marca = marca
}

getProduto (): void{
 console.log(`Informaçoes: nome - ${this.nome}, precoComprado - ${this.precoComprado}, precoVendido - ${this.precoVendido}, lucro - ${this.lucro}, marca - ${this.marca}.`)
}
 calcularLucro(): number{
 let lucroTotal = this.precoVendido - this.precoComprado
 this.lucro = lucroTotal
 return lucroTotal
 }

setProduto (): void{
    let nomeUp = leitor.question('Qual o nome do Produto? ')
    let precoCompradoUp = leitor.question('Qual foi o preco comprado do produto? ')
    let precoVendidoUp = leitor.question('Qual o preco vendido do produto? ')
    let marcaUp = leitor.question('Qual a marca do pedido? ')
    this.nome = nomeUp
    this.precoComprado = precoCompradoUp
    this.precoVendido = precoVendidoUp
    this.marca = marcaUp
}
}

class Venda {
    produto: Produto
    quantidade: number
    valorTotal: number
    data: string

    constructor(produto: Produto){
        this.produto = produto

    }


    valorDaCompra ():void {
        let quantidadeUp = leitor.question('Quantos produtos voce quer comprar? ')
        this.quantidade = quantidadeUp
        this.valorTotal = quantidadeUp * this.produto.precoComprado
    console.log(` -------------------------- \nSua compra foi Realizada! Parabens!\n -------------------------- \nna venda foi comprado: ${quantidadeUp} de produtos.\n --------------------------\nO valor total foi: R$ ${this.valorTotal}\n -------------------------- `)
    }

    getVendas (): void{
        console.log(`Informacoes sobre a Venda: Produto - ${this.produto.nome}, Qual a marca do produto - ${this.produto.marca}, Quantidade - ${this.quantidade}, Valor Total - ${this.valorTotal}, Data - ${this.data}.`)
    }

    setVenda (): void{
        this.produto.setProduto()
        let dataUp = leitor.question('Qual foi a Data do produto que voce comprou? (Utilize 00/00/00) ')
        this.data = dataUp
        
    }
    
    aplicarDescontos(): void{
        let CompraComDesconto = this.valorTotal * 0.2
        console.log(`-------------------------- \n Parabenss Voce ganhou um desconto de 20% em suas compras!! \n --------------------------\n agora seu valor total reduziu para: ${CompraComDesconto}\n --------------------------`)
    }
    
    
}
let produtoVazio = new Produto('',0,'',0)
let produtoTvUp = new Produto('Tv',100000999,'Samsung',234098)
let produtoCelularUp = new Produto('Celular',10987,'Motorola',8765)
let produtoNotebookUp = new Produto('Notebook',1067987,'Apple',9765)
let vendaTv = new Venda(produtoTvUp)


let vendaUp = new Venda(produtoVazio)

produtoTvUp.getProduto()
produtoTvUp.calcularLucro()
vendaTv.getVendas()
vendaTv.valorDaCompra()
vendaUp.setVenda()
vendaUp.getVendas()