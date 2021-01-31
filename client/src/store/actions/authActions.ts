import axios, { AxiosError, AxiosResponse } from 'axios'
// Redux
import setAuthToken from '../../util/setAuthToken'
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './actionTypes'
// JWT
import jwt_decode from 'jwt-decode'
// Routes
import { Routes } from '../../constants/routes'
// Models
import User from '../../models/User'

type ApiError = | AxiosError | Error | any
// Register User
export const registerUser = (userData: User, history: any) => (dispatch: any) => {
	axios.post('/api/users/register', userData)
		.then((res: AxiosResponse) => {
			console.log(res)
			history.push(Routes.staff)
		})
		.catch((err: ApiError) => {
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		})
}
// Login - get user token
export const loginUser = (userData: User) => (dispatch: any) => {
	axios.post('/api/users/login', userData)
		.then((res: AxiosResponse) => {
			console.log(res)
			// Save to localStorage
			// Set token/ UserId to localStorage
			const { token } = res.data
			localStorage.setItem('jwtToken', token)
			// Set token to Auth header
			setAuthToken(token)
			// Decode token to get user data
			const decoded: any = jwt_decode(token)
			// Set current user in store
			dispatch(setCurrentUser(decoded))
		})
		.catch((err: ApiError) => {
			console.log(err)
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		})
}
// Set logged in user
export const setCurrentUser = (decoded: User | object) => {
	return {
		type: SET_CURRENT_USER,
		payload: {
			decoded
		}
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
	// Remove token and userId from local storage
	localStorage.removeItem('jwtToken')
	// Remove auth header for future requests
	setAuthToken(false)
	// Set current user to empty object {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}))
}