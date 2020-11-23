import axios, { AxiosResponse } from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './actionTypes'
import { Routes } from '../utils/routes'
// Register User
export const registerUser = (userData: any, history: any) => (dispatch: any) => {
	axios.post('/api/users/register', userData)
		.then((res: AxiosResponse) => {
			console.log('AUTH ACTIONS - REGISTER USER ', res)
			history.push(Routes.login)
		})
		.catch((err: any) => {
			console.error('AUTH ACTIONS - REGISTER USER ', err)
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		})
}
// Login - get user token
export const loginUser = (userData: any) => (dispatch: any) => {
	axios.post('/api/users/login', userData)
		.then(res => {
			// Save to localStorage
			// Set token to localStorage
			const { token } = res.data
			localStorage.setItem('jwtToken', token)
			// Set token to Auth header
			setAuthToken(token)
			// Decode token to get user data
			const decoded = jwt_decode(token)
			// Set current user
			dispatch(setCurrentUser(decoded))
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		)
}
// Set logged in user
export const setCurrentUser = (decoded: any) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	}
}
// User loading
export const setUserLoading = () => {
	return {
		type: USER_LOADING
	}
}
// Log user out
export const logoutUser = () => (dispatch: any) => {
	// Remove token from local storage
	localStorage.removeItem('jwtToken')
	// Remove auth header for future requests
	setAuthToken(false)
	// Set current user to empty object {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}))
}