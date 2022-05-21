// build your `Project` model here
const db = require('../../data/dbConfig');

exports.findAll = () => {
  return db('projects');
}

exports.findById = async id => {
  const result = await db('projects')
    .where('project_id', id)
    .first();

  if (result == null) {
    return null;
  }

  return {
    ...result,
    project_completed: (result.project_completed) ? true : false
  }
}

exports.create = async project => {
  const result = await db('projects').insert(project);
  const newProject = await this.findById(result[0]);
  return newProject;
}