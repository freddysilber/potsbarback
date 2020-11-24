import { SET_CURRENT_USER, USER_LOADING } from '../actions/actionTypes'

const isEmpty = require('is-empty')

interface InitialState {
	isAuthenticated: boolean,
	user: object,
	// userData: object,
	loading: boolean
}

const initialState: InitialState = {
	isAuthenticated: false,
	user: {},
	// userData: {},
	loading: false
}

export default function (state = initialState, action: any) {
	switch (action.type) {
		case SET_CURRENT_USER:
			console.log('action', action.payload.user)
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload,
				// userData: action.payload.user
			}
		case USER_LOADING:
			return {
				...state,
				loading: true
			}
		default:
			return state
	}
}