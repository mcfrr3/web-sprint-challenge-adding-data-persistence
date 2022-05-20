exports.up = async function(knex) {
  await knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id');
      tbl.string('project_name')
        .notNullable();
      tbl.string('project_description');
      tbl.boolean('project_completed')
        .defaultTo(false);
    });
  await knex.schema
    .createTable('resources', tbl => {
      tbl.increments('resource_id');
      tbl.string('resource_name')
        .notNullable()
        .unique();
      tbl.string('resource_description');
    });
  await knex.schema
    .createTable('tasks', tbl => {
      tbl.increments('task_id');
      tbl.string('task_description')
        .notNullable();
      tbl.string('task_notes');
      tbl.boolean('task_completed')
        .defaultTo(false)
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects');
    });
  await knex.schema
    .createTable('project_resources', tbl => {
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resource_id')
        .inTable('resources');
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects');
      tbl.primary('resource_id', 'project_id');
    });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('project_resources');
  await knex.schema.dropTableIfExists('tasks');
  await knex.schema.dropTableIfExists('resources');
  await knex.schema.dropTableIfExists('projects');
};
