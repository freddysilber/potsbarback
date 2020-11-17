const DB_NAME: string = 'pots_bak_bar' // Name of the database to use
// Info for our test user (admin) Mongo requires at least one user in order to connect to the DB
const TEST_USER: {
	username: string;
	password: string;
} = {
	username: 'Andrew',
	password: 'Hellosickmoney'
}

const { username, password } = TEST_USER

module.exports = {
	mongoURI: `mongodb+srv://${username}:${password}@cluster0.slci9.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
	secretOrKey: 'secret'
}