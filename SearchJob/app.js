const express = require('express');
const app = express();
const db = require('./db/connect');

const PORT = 3000;

app.listen(PORT, function() {
  console.log(`Server running port ${PORT}`);
});
//DB Connect
db.authenticate()
  .then(() => {
    console.log('Connection Success');
  })
  .catch(err => {
    console.log('Error connecting', err);
  });
//Routes
app.get('/', (req, res) => {
  res.send('App runnig');
});
