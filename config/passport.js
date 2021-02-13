const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
// const User = mongoose.model('users')
const User = require('../models/User')
const keys = require('./keys')

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = keys.secretOrKey

module.exports = (passport) => {
	console.log(passport)
	passport.use(
		new JwtStrategy(opts, (jwt_payload, done) => {
			User.findById(jwt_payload.id)
				.then((user) => done(null, user ? user : false))
				.catch((err) => console.error(err))
		})
	)
}