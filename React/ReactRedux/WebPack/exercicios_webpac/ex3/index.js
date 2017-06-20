const produto = {
	nome: 'Laptop Apple',
	preco: 19.900,
	desconto: 2.000
}

function clone(objeto){
	return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Laptop Acer'

console.log(produto, novoProduto)