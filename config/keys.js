<<<<<<< HEAD:config/keys.js
// interface MongoAdminUser {
// 	username: string,
// 	password: string
// }

=======
>>>>>>> 539d0631fc469335cfc27e5e7f6c6d509af51bd2:config/keys.ts
const DB_NAME = 'pots_bak_bar' // Name of the database to use
// Info for our test user (admin) Mongo requires at least one user in order to connect to the DB
const TEST_USER = {
	username: 'Andrew',
	password: 'Hellosickmoney'
}

const { username, password } = TEST_USER

module.exports = {
	mongoURI: `mongodb+srv://${username}:${password}@cluster0.slci9.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
	secretOrKey: 'secret'
}