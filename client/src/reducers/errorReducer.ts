import { GET_ERRORS } from '../actions/actionTypes'

interface InitialState { }

const initialState: InitialState = {}

export default function (state = initialState, action: any) {
	switch (action.type) {
		case GET_ERRORS:
			console.log(action.payload)
			return action.payload
		default:
			return state
	}
}