const express = require('express');
const server = express();
const helmet= require('helmet');

server.use(express.json());
server.use(helmet());
const studentRoute = require('./router/studentRoute.js')
const cohortRoute = require('./router/cohortRoute.js')


server.use('/api/students', studentRoute)
server.use('/api/cohorts', cohortRoute)
const port = 3000;
server.listen(port, function() {
	console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});