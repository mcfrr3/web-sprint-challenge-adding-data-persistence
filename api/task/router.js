// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  res.end()
});

router.post('/', (req, res) => {
  res.end()
});

module.exports = router;