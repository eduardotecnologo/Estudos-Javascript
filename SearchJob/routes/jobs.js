const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Roter test
router.get('/test', (req, res) => {
  res.send('Passouuu');
});

// Adionar o Job
router.post('/add', (req, res) => {
  let { title, description, salary, company, email, new } = req.body;

  //Insert
  JSON.create({
    title,
    salary,
    company,
    description,
    email,
    new
  })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
});
module.exports = router;
