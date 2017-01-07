/*
	FUNÇÕES
		-DECLARATION
		-EXPRESSION
*/

function printName(name){
	console.log(name);
}
printName('Eduardo');
/////////////////////////////////////////////////

var printName = function(name, sobrenome, sexo) {
	console.log(name, sobrenome, sexo);
}
printName('Alexandre', 'Alexandre', 'M');
/////////////////////////////////////////////////
var printName = function(name, sobrenome, sexo){
	console.log(arguments);
}
printName('Eduardo', 'Alexandre', 'M')
/////////////////////////////////////////////////
var printName = function(name, sobrenome, sexo){
	console.log(arguments[0] + ': '+ arguments[2]);
}
printName('Eduardo', 'Alexandre', 'M')
/////////////////////////////////////////////////
var printName = function(name, sobrenome, sexo){
	console.log(arguments.length);
}
printName('Eduardo', 'Alexandre', 'M')