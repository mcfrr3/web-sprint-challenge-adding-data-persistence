exports.seed = function(knex) {
  return knex('resources').insert([
    {resource_name: "foo", resource_description: null}
  ]);
};
