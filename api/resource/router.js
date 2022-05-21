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

router.post('/', async (req, res) => {
  const { resource_name } = req.body;

  const result = await Resource.findBy({ 'resource_name': resource_name});

  if (result.length > 0) {
    res.status(400).json({ message: "resource name already exists" });
    return;
  }

  Resource.create(req.body)
    .then(result => {
      res.json(result);
    })
});

module.exports = router;