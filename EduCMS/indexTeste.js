// process.stdout.write("Koé mané \n");
// process.argv.forEach(function(arg){
// 	console.log(arg);
// });

//Módulos http

var http = require('http');
var fs = require('fs');

http.get('http://loripsum.net/api/2', function(res){
	var texto = '';
	res.on('data', function(param){
		texto += param;
	});
	res.on('end', function(){
		fs.writeFile('lorem.html', texto, function(){
			console.log('Arquivo criado com sucesso!!!');
		});	
	});
}).on('error', function(erro){
	console.log('erro: ', erro.message);
});