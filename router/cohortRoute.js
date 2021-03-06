const express = require('express');
const router = express.Router()
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

router.get('/', (req, res) => {
	db.from('cohorts')
		.then(cohort => {
			res.status(200).json(cohort);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.get('/:id', (req, res) => {
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

router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
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

module.exports = router;