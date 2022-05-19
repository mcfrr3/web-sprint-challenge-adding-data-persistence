// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  res.end()
});

router.post('/', (req, res) => {
  res.end()
});