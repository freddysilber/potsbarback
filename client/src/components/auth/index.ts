import User from '../../models/User'

export { default as Login } from './Login/index'
export { default as Signup } from './Signup/index'

export interface Auth {
	isAuthenticated: boolean,
	loading: boolean,
	user: User
}