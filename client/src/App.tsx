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

// Routes
import { Routes } from './utils/routes'

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
				<div>
					<Switch>
						<Route exact path={Routes.about} component={About} />
						<Route path={Routes.login} component={Login} />
						<Route path={Routes.signup} component={Signup} />
						<Route path={Routes.portal} component={Portal} />
					</Switch>
				</div>
			</Router>
		</Provider>
	)
}

export default App