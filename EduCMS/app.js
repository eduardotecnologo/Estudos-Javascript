//Módulos Requisitados
var express = require('express'),
	methodOverride = require('method-override'),
	bodyParser = require('body-parser'),
	app = express();

//Config

app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Routes
app.use('/', require('./app/routes'));

//Erro Handling
app.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});
app.use(function(err, req, res, next){
	res.status(err.status || 500).json({err: err.message});
});

//Sever Listen
module.exports = app;



