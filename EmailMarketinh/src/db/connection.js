let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/email_matketing',{ useMongoCliente: true },
function (err) {
   if(err){
       console.log('Mongoose error =>', err);
   } 
   console.log('Mongoose connected');
});

module.exports = mongoose;