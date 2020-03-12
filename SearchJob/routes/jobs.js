const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Router test
router.get('/test', (req, res) => {
  res.send('Passouuu');
});

// Adionar o Job
router.post('/add', (req, res) => {
  let { title, salary, company, email, new_job, createdAt, updatedAt, description } = req.body;

  //Insert
  Job.create({
    title,
    salary,
    company,
    email,
    new_job,
    createdAt,
    updatedAt,
    description
  })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
});
module.exports = router;
