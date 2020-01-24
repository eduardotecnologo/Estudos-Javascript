const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
// mongoose.set('useCreateIndex', true);

const app = express();
mongoose.connect('mongodb+srv://edudev:OlCNmcCb2CGDxhOf@cluster0-jjtyy.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true

});


app.use(express.json());
app.use(routes);

app.listen(3333);