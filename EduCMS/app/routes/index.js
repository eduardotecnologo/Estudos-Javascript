//Routers
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.send('Hello Koé Mandado!!!');
});

router.use('/cursos', require('./cursos'));

module.exports = router;