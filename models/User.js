const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Checkout = require('./Checkout')
// Create Schema for a user object
const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: { // Creation timestamp
		type: Date,
		default: Date.now
	},
	phone: {
		type: String,
		required: true
	},
	isActive: {
		type: Boolean
	},
	jobRole: {
		type: Number
	},
	accessLevel: {
		type: Number
	},
	activeShift: {
		type: Boolean
	},
	// checkouts: {
	// 	type: [Checkout]
	// }
})

module.exports = User = mongoose.model('users', UserSchema)