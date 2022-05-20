// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  Resource.findAll()
    .then(result => {
      res.json(result);
    })
});

router.post('/', (req, res) => {
  Resource.create(req.body)
    .then(result => {
      res.json(result);
    })
});

module.exports = router;