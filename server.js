const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const users = require('./routes/api/users')
const app = express()
const colors = require('colors')

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB Config
const db = require('./config/keys.js').mongoURI

// Connect to MongoDB
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then((response) => {
		console.log(response)
		console.log(colors.america('\n------------ MongoDB is connected... #Merica ------------\n'))
	})
	.catch(error => {
		console.error('Error connecting to mongoDB \n', error)
	})


// Passport middleware
app.use(passport.initialize())

// Passport config
require('./config/passport')(passport)

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

// Express/ Node.js port (local dev)
const port = process.env.PORT || 5000

if (process.env.NODE_ENV == 'production') {
	app.use(express.static('client/build'))	
}

app.listen(port, () => console.log(colors.brightBlue(`\n------------ Death to all but metal. http://localhost:${port} ------------\n`)))