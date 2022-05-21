// build your `Task` model here
const db = require('../../data/dbConfig');

exports.findAll = () => {
  return db('tasks as tk')
    .join('projects as pj', 'pj.project_id', 'tk.project_id')
    .select('tk.*', 'project_name', 'project_description');
}

exports.findBy = async filter => {
  const result = await db('tasks as tk')
    .join('projects as pj', 'pj.project_id', 'tk.project_id')
    .select('tk.*', 'project_name', 'project_description')
    .where(filter)
    .first();

  return {
    ...result,
    task_completed: (result.task_completed) ? true : false
  }
}

exports.create = async task => {
  const result = await db('tasks').insert(task);
  const newTask = await this.findBy({ 'task_id': result[0]});
  return newTask;
}