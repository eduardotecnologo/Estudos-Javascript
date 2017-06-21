const mongoose = require('mongoose')
mongoose.Promise = global.Promise //Mongoose usa a API de Promise do proprio Mongo, e evita msg de erro
module.exports = mongoose.connect('mongodb://localhost/todo')