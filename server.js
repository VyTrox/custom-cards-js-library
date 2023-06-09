'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '/pub')))

app.get('/', (req, res) => {

	res.sendFile(path.join(__dirname + '/pub/final.html'))
})

app.get('/code', (req, res) => {

	res.sendFile(path.join(__dirname + '/pub/code.html'))
})

app.get('/api', (req, res) => {

	res.sendFile(path.join(__dirname + '/pub/api.html'))
})

// app.get('/example', (req, res) => {

// 	res.sendFile(path.join(__dirname + '/pub/examples.html'))
// })


const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
})