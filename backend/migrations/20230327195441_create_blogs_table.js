/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('blogs', table => {
        table.increments('id').primary()
        table.string('date').notNull()
        table.string('title').notNull()
        table.string('subtitle').notNull()
        table.string('imageUrl', 2083)
        table.string('content', 250000).notNull()
        table.integer('userId').references('id')
            .inTable('users').notNull()
        table.integer('categoryId').references('id')
            .inTable('category').notNull()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('blogs');
};
