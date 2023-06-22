
exports.up = function(knex) {
    
    return knex.schema.createTable("userblogdata",function(table){
        table.string("email", 255);
        table.string("blog",255);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable("userblogdata");
};
