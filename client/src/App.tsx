// React
import React from 'react'
// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Auth
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'

// Redux
import { setCurrentUser, logoutUser } from './actions/authActions'
import { Provider } from 'react-redux'
import store from './store'

// Styles
import './App.scss'
import "bulma/css/bulma.css"
// Components
import { Login, About, Portal, Signup } from './components'

// Check for token to keep user logged in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token: any = localStorage.jwtToken
	setAuthToken(token)
	// Decode token and get user info and exp
	const decoded: any = jwt_decode(token)
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded))
	// Check for expired token
	const currentTime: number = Date.now() / 1000 // to get in milliseconds
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser())
		// Redirect to login
		window.location.href = './login'
	}
}

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App column">
					<Switch>
						<Route exact path="/" component={About} />
						<Route path="/login" component={Login} />
						<Route path="/portal/admin/signup" component={Signup} />
						<Route path="/portal" component={Portal} />
						<Route path="/about" component={About} />
					</Switch>
				</div>
			</Router>
		</Provider>
	)
}

export default App

// class App extends Component {
// 	render() {
// 		return (
// 			<Provider store={store}>
// 				<Router>
// 					<div className='App'>
// 						<Navbar />
// 						<Route exact path='/' component={Landing} />
// 						<Route exact path={Routes.register} component={Register} />
// 						<Route exact path={Routes.login} component={Login} />
// 						<Switch>
// 							<PrivateRoute exact path={Routes.dashboard} component={Dashboard} />
// 						</Switch>
// 					</div>
// 				</Router>
// 			</Provider>
// 		)
// 	}
// }