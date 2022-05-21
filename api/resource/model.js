// build your `Resource` model here
const db = require('../../data/dbConfig');

exports.findAll = () => {
  return db('resources');
}

exports.findBy = filter => {
  return db('resources')
    .where(filter);
}

exports.create = (resource) => {
  return db('resources').insert(resource)
    .then(result => {
      return this.findBy({ 'resource_id': result[0] }).first();
    });
}