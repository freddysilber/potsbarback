const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys.js')

// Load input validation
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')
// Load User model
const User = require('../../models/User')

console.log('USER api', User)
/**
 * @route POST api/users/register
 * @description Register user
 * @access Public
 */
router.post('/register', (req, res) => {
	console.log('ROUTER/POST/REGISTER')
	// Form validation
	const { errors, isValid } = validateRegisterInput(req.body)
	// Check validation
	if (!isValid) {
		return res.status(400).json(errors)
	}
	User.findOne({ email: req.body.email }).then(user => {
		console.log(user)
		if (user) {
			return res.status(400).json({ email: 'Email already exists' })
		} else {
			const { firstName, lastName, email, password } = req.body
			const newUser = new User({
				firstName,
				lastName,
				email,
				password
			})
			// Hash password before saving in database
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) {
						throw err
					}
					newUser.password = hash
					newUser
						.save()
						.then(user => res.json(user))
						.catch(err => console.error(err))
				})
			})
		}
	}).catch(error => {
		console.error(error)
	})
})
/**
 * @route POST api/users/login
 * @description Login user and return JWT token
 * @access Public
 */
router.post('/login', (req, res) => {
	// Form validation
	const { errors, isValid } = validateLoginInput(req.body)
	// Check validation
	if (!isValid) {
		return res.status(400).json(errors)
	}

	const { email, password } = req.body
	// Find user by email
	User.findOne({ email }).then(user => {
		// Check if user exists
		if (!user) {
			return res.status(404).json({ emailnotfound: 'Email not found' })
		}
		// Check password
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				/**
				 * User matched
				 * Create JWT Payload
				 */
				const { id, firstName, lastName, email } = user
				const payload = {
					id,
					firstName,
					lastName,
					email
				}
				// Sign token
				jwt.sign(
					payload,
					keys.secretOrKey,
					{
						expiresIn: 31556926 // 1 year in seconds
					},
					(err, token) => {
						res.json({
							success: true,
							token: 'Bearer ' + token
						})
					}
				)
			} else {
				return res.status(400).json({ passwordincorrect: 'Password incorrect' })
			}
		})
	})
})

module.exports = router