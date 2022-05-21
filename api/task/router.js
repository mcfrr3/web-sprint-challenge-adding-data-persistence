// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');
const Project = require('../project/model');

const router = express.Router();

router.get('/', (req, res) => {
  Task.findAll()
    .then(result => {
      res.json(result.map(row => {
        return {
          ...row,
          task_completed: (row.task_completed) ? true : false
        }
      }))
    });
});

router.post('/', async (req, res) => {
  const { task_description, project_id } = req.body;

  if (task_description == null || project_id == null) {
    res.status(400).json({ message: "tasks must have a descrition and a project id" });
    return;
  }

  const project = await Project.findById(project_id);

  if (project == null) {
    res.status(400).json({ message: "a valid project id is required" });
    return;
  }

  Task.create(req.body)
    .then(result => {
      res.json(result);
    })
});

module.exports = router;