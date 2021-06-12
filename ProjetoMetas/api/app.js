const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./models/Metas');

const Meta = mongoose.model('Meta');
const app = express();

app.use(express.json());

// middleware
app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods","GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers","X-PINGOTHER, Content-Type, Authorization");
  app.use(cors());
  next();
});

// Conexão
mongoose.connect('',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connect Success!!");
}).catch((err) => {
  console.log("Connection Error: " + err);
});

app.get('/metas', async (req, res) => {
  await Meta.find({}).then((metas) => {
    return res.json({
      error: false,
      metas
    });
  }).catch((err) => {
    return res.status(400).json({
      error: true,
      message: "Nenhum registro cadastrado!"
    });
  });
});

app.post('/metas', async (req, res) => {
  await sleep(3000);
  function sleep(ms){
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  await Meta.create(req.body, (err) => {
    if(err) return res.status(400).json({
      error: true,
    message: "Error: Não foi possível realizar o cadastro!"
  });
});
  //console.log(req.body);
    return res.json({
      error: false,
      message: "Sucesso: Cadastro realizado!"

  });
});

app.listen(3001, () => {
  console.log('Runing Port 3001');
});