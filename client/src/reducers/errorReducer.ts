import { GET_ERRORS } from '../actions/types'

interface InitialState { }

const initialState: InitialState = {}

export default function (state = initialState, action: any) {
	switch (action.type) {
		case GET_ERRORS:
			return action.payload
		default:
			return state
	}
}