const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const colors = require('colors')
const bodyParser = require('body-parser')
const passport = require('passport')
const users = require('./routes/api/users')
const mongoose = require('mongoose')
// Passport config
require('./config/passport')(passport)

const app = express()
// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Passport middleware
app.use(passport.initialize())

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.set('port', process.env.PORT || 5000)
console.log(colors.blue('----------------------------- ' + app.get('port')))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(express.static('./client/build'))


// app.use('/api/data', require('./routes/new-index.js'))
app.use('/api/users', users)

app.get('*', (req, res) => { //our GET route needs to point to the index.html in our build
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    res.render('error')
})

// DB Config
const db = require('./config/keys.js').mongoURI
mongoose.connect(db, {
const { PORT, DB_CONN, DB_USER, DB_PW } = process.env

// DB Config
// const db = require('./config/keys.js').mongoURI

// Connect to MongoDB
mongoose
  .connect(DB_CONN, {
    auth: {
      user: DB_USER,
      password: DB_PW
    }, 

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(response => {
    console.log(colors.green(response))
    console.log(colors.america('\n------------ MongoDB is connected... #Merica ------------\n'))
}).catch(error => {
    console.error(colors.red('Error connecting to mongoDB \n', error))
})

  })
// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(response => {
//     console.log(colors.green(response))
//     console.log(colors.america('\n------------ MongoDB is connected... #Merica ------------\n'))
//   })
//   .catch(error => {
//     console.error(colors.red('Error connecting to mongoDB \n', error))
//   })

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

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'))
}


app.listen(app.get('port'), function () {
    console.log(colors.green('Express server listening on port ' + app.get('port')))
})

module.exports = app