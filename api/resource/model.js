// build your `Resource` model here
const db = require('../../data/dbConfig');

exports.findAll = () => {
  return db('resources');
}

exports.findById = id => {
  return db('resources')
    .where('resource_id', id);
}

exports.create = (resource) => {
  return db('resources').insert(resource)
    .then(result => {
      return this.findById(result[0]);
    });
}