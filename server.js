require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const users = require('./routes/api/users')
const colors = require('colors')

const app = express()
// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const { PORT } = process.env

// DB Config
const db = require('./config/keys.js').mongoURI

// Connect to MongoDB
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then((response) => {
		console.log(colors.green(response))
		console.log(colors.america('\n------------ MongoDB is connected... #Merica ------------\n'))
	})
	.catch(error => {
		console.error(colors.red('Error connecting to mongoDB \n', error))
	})


// Passport middleware
app.use(passport.initialize())

// Passport config
require('./config/passport')(passport)

app.use(express.static('./client/build'))

/**
 * API Routes
 * 
 * add paths to EXPRESS routes here
 * 
 * Note: 
 * These are not UI routes, these are routes for express to be used 
 * as endpoints from the UI to execute actions in mongo
 */
app.use('/api/users', users)

if (process.env.NODE_ENV == 'production') {
	app.use(express.static('client/build'))
}

app.get('/*',(req, res) => {
	res.sendFile('index.html', {root: __dirname+ '/client/build'})
}


app.listen(PORT, () => console.log(colors.brightBlue(`\n------------ Death to all but metal. http://localhost:${PORT} ------------\n`)))