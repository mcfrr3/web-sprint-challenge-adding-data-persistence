// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  Project.findAll()
    .then(result => {
      res.json(result.map(row => {
        return {
          ...row,
          project_completed: (row.project_completed) ? true : false
        }
      }));
    })
});

router.post('/', (req, res) => {
  const { project_name } = req.body;

  if (project_name == null) {
    res.status(400).json({ message: 'projects must have a name and description' });
    return;
  }

  Project.create(req.body)
    .then(result => {
      res.json(result);
    })
});

module.exports = router;