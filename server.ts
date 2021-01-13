const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const users = require('./routes/api/users')
const app = express()
let colors = require('colors')

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log(colors.america('\n------------ MongoDB is connected... #Merica ------------\n')))


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

app.listen(port, () => console.log(colors.brightBlue(`\n------------ Death to all but metal. http://localhost:${port} ------------\n`)))