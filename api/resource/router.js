// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  res.end()
});

router.post('/', (req, res) => {
  res.end()
});