exports.up = function(knex) {
    return knex.schema.createTable('cohort', function(tbl) {
		tbl.increments();
        tbl.string('name', 128).notNullable();
	});
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cohort');
};
