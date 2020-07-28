exports.up = function (knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
      tbl.increments()
      tbl
        .string('name', 128)
        .notNullable()
        .unique()
      tbl
        .string('source', 128)
      tbl
        .text('instructions')
      tbl
        .text('ingredients')
      tbl
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('categories')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  };
  
  exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('recipes')
  };