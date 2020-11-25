import axios, { AxiosResponse } from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './actionTypes'
import { Routes } from '../utils/routes'

interface CurrentUser {
	id?: string,
	firstName?: string,
	lastName?: string,
	email?: string,
	iat?: number,
	exp?: number
}

// Register User
export const registerUser = (userData: any, history: any) => (dispatch: any) => {
	axios.post('/api/users/register', userData)
		.then((res: AxiosResponse) => {
			history.push(Routes.staff)
		})
		.catch((err: any) => {
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
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		)
}

// export const getUserById = (decoded: UserAuth) => (dispatch: any) => {
// 	const userId = decoded.id
// 	axios.get('/api/users/getUserById', { params: { userId } })
// 		.then((result: AxiosResponse) => {
// 			dispatch(setCurrentUser(decoded))
// 		})
// 		.catch(error => console.error(error))
// }
// Set logged in user
export const setCurrentUser = (decoded: CurrentUser) => {
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