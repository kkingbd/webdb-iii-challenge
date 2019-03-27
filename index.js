const express = require('express');
const server = express();
server.use(express.json());
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

server.get('/api/cohorts', (req, res) => {
	db.from('cohorts')
		.then(cohort => {
			res.status(200).json(cohort);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

server.get('/api/cohorts/:id', (req, res) => {
	const uniqueCohort = req.params.id;
	db.from('cohorts')
		.where({ id: uniqueCohort })
		.then(cohort => {
			res.status(200).json(cohort);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

server.post('/api/cohorts', (req, res) => {
	const cohort = req.body;
	db('cohorts')
		.insert(cohort)
		.then(cohort => {
			res.status(201).json(cohort);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

server.put('/api/cohorts/:id', (req, res) => {
	const cohortToModify = req.params.id;
	db('cohorts')
		.where({ id: cohortToModify })
		.update(req.body)
		.then(cohort => {
			res.status(200).json(cohort);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

server.delete('/api/cohorts/:id/', (req, res) => {
	const cohortToDelete = req.params.id;
	db('cohorts')
		.where({ id: cohortToDelete })
		.del()
		.then(cohort => {
			res.status(200).json(cohort);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

const port = 3000;
server.listen(port, function() {
	console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});