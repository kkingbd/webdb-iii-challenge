exports.up = function(knex) {
    return knex.schema.createTable('cohorts', tbl => {
		tbl.increments('id');
        tbl.string('name', 128).notNullable();
	});
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cohorts');
};
