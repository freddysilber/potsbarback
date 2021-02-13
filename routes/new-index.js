const express = require('express')
const router = express.Router()
const colors = require('colors')

const DB_NAME = 'pots_bak_bar' // Name of the database to use

const TEST_USER = {
	username: 'Andrew',
	password: 'Hellosickmoney'
}

const { username, password } = TEST_USER


const MongoClient = require('mongodb').MongoClient
const url = `mongodb+srv://${username}:${password}@cluster0.slci9.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

console.log(MongoClient)

router.get('/', (req, res, next) => {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err
		const dbo = db.db('mongodb')
		dbo.collection('collection1').find({}).toArray(function (err, result) {
			if (err) throw err
			console.log(colors.red('Mongo data coming in hot'))
			console.log('RESULT -->', result)
    		res.json(result)
			db.close()
		})
	})
})


module.exports = router