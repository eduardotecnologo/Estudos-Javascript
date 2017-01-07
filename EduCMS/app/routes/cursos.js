var express = require('express');
var router = express.Router();

var mongo = require('../../db/mongo')
var CursosModel = require('../models/cursos')(mongo);
var CursosController = require('../controllers/cursos')(CursosModel);

router.get('/', CursosController.getAll.bind(CursosController));
router.get('/:_id', CursosController.getById.bind(CursosController));
router.post('/', CursosController.create.bind(CursosController));
router.put('/:_id', CursosController.update.bind(CursosController));
router.delete('/:_id', CursosController.remove.bind(CursosController));

module.exports = router;