export { }
const JwtStrategy: any = require('passport-jwt').Strategy
const ExtractJwt: any = require('passport-jwt').ExtractJwt
const mongoose: any = require('mongoose')
const User: any = mongoose.model('users')
const keys: any = require('./keys')

const opts: any = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = keys.secretOrKey

module.exports = (passport: any) => {
	passport.use(
		new JwtStrategy(opts, (jwt_payload: any, done: any) => {
			User.findById(jwt_payload.id)
				.then((user: any) => done(null, user ? user : false))
				.catch((err: any) => console.error(err))
		})
	)
}