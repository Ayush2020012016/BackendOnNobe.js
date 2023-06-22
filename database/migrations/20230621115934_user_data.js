
exports.up = function(knex) {
    
    return knex.schema.createTable("users",function(table){
        table.string("title", 255);
        table.string("password",255);
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
