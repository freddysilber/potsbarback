const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create Schema for a user object
const CheckoutSchema = new Schema({
	employeeId: {
		type: String
	},
	salesDay: {
		type: Date
	}
})

module.exports = Checkout = mongoose.model('checkouts', CheckoutSchema)