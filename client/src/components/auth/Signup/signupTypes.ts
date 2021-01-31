// import { Auth } from './index.js'

interface TouchedProps {
	firstName: boolean,
	lastName: boolean,
	email: boolean,
	confirmEmail: boolean,
	password: boolean,
	confirmPassword: boolean
}

export interface InitialValues {
	firstName: string,
	lastName: string,
	email: string,
	confirmEmail: string,
	password: string,
	confirmPassword: string
}

export interface FormState {
	errors: any,
	touched: TouchedProps,
	isSubmitting: boolean
}

export interface FormData {
	values: any,
	actions: any
}

export interface SignupProps {
	history: any,
	registerUser: any,
	location: any,
	match: any,
	auth: any
	// auth: Auth
}