const express = require('express')
const router = express.Router()
const colors = require('colors')
// const mongoose = require('mongoose')

const DB_NAME = 'pots_bak_bar' // Name of the database to use

const TEST_USER = {
	username: 'Andrew',
	password: 'Hellosickmoney'
}

const { username, password } = TEST_USER


const MongoClient = require('mongodb').MongoClient
// const url = `mongodb+srv://${username}:${password}@cluster0.slci9.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
// const url = `mongodb+srv://Andrew:Hellosickmoney@cluster0.slci9.mongodb.net/pots_bak_bar?retryWrites=true&w=majority`

console.log(MongoClient)
// const db = require('../config/keys.js').mongoURI

router.get('/', (req, res, next) => {
	console.log(colors.red('lets connect to the DB'))
	// // DB Config
	// mongoose
	// 	.connect(db, {
	// 		useNewUrlParser: true,
	// 		useUnifiedTopology: true,
	// 		useFindAndModify: false,
	// 	})
	// 	.then(response => {
	// 		console.log(colors.green(response))
	// 		console.log(colors.america('\n------------ MongoDB is connected... #Merica ------------\n'))
	// 	})
	// 	.catch(error => {
	// 		console.error(colors.red('Error connecting to mongoDB \n', error))
	// 	})

	// MongoClient.connect(url, function(err, db) {
	// 	if (err) throw err
	// 	const dbo = db.db('mongodb')
	// 	dbo.collection('collection1').find({}).toArray(function (err, result) {
	// 		console.log(colors.blue(result))
	// 		if (err) throw err
	// 		console.log(colors.red('Mongo data coming in hot'))
	// 		console.log('RESULT -->', result)
	// 		res.json(result)
	// 		db.close()
	// 	})
	// })
})


module.exports = router