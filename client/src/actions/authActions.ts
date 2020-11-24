import axios, { AxiosResponse } from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './actionTypes'
import { Routes } from '../utils/routes'
// Register User
export const registerUser = (userData: any, history: any) => (dispatch: any) => {
	axios.post('/api/users/register', userData)
		.then((res: AxiosResponse) => {
			history.push(Routes.staff)
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
			console.log('RES', res)
			// Save to localStorage
			// Set token to localStorage
			const { token, user } = res.data
			const userId = user._id
			localStorage.setItem('userId', userId)
			localStorage.setItem('jwtToken', token)
			// Set token to Auth header
			setAuthToken(token)
			// Decode token to get user data
			const decoded: any = jwt_decode(token)
			// Set current user
			dispatch(setCurrentUser(decoded, user))
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		)
}
// Set logged in user
export const setCurrentUser = (decoded: any, user: any) => {
	console.log('user', user)
	return {
		type: SET_CURRENT_USER,
		payload: { token: decoded, user }
		// payload: decoded
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
	dispatch(removeCurrentUser({}))
	// dispatch(setCurrentUser({}))
}

const removeCurrentUser = (emptyToken: any) => {
	return {
		type: SET_CURRENT_USER,
		payload: emptyToken
	}
}