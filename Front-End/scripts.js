/*$("#comprar").click(function() {
	var dadosCompra = {
		produto: $("[name=produto]").val(),
		quantidade: $("[name=quantidade]").val()
	};
	$.post("/compra", dadosCompra, atualizaPagina, "json");
});*/

/*Lista de Bolos*/
/*var busca = document.createElement('input');
busca.type = 'search';

var resultados = document.querySelector('.resultados');
resultados.partentNode.insertBefore(busca, resultados);*/

/*Com Jquery*/
$('<input type="search">').insertBefore('.resultados');