const express = require('express');
const router = express.Router()
const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

router.get('/', (req, res) => {
	db.from('students')
		.then(students => {
			res.status(200).json(students);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.get('/:id', (req, res) => {
	const uniquestudent = req.params.id;
	db.from('students')
		.where({ id: uniquestudent })
		.then(student => {
			res.status(200).json(student);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.post('/', (req, res) => {
	const students = req.body;
	db('students')
		.insert(students)
		.then(students => {
			res.status(201).json(students);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.put('/:id', (req, res) => {
	const studentsToModify = req.params.id;
	db('students')
		.where({ id: studentsToModify })
		.update(req.body)
		.then(students => {
			res.status(200).json(students);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.delete('/:id', (req, res) => {
	const studentsToDelete = req.params.id;
	db('students')
		.where({ id: studentsToDelete })
		.del()
		.then(students => {
			res.status(200).json(students);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

module.exports = router;