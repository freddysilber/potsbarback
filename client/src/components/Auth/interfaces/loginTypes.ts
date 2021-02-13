interface TouchedProps {
	email: boolean,
	password: boolean
}

export interface InitialValues {
	email: string,
	password: string
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

export interface LoginProps {
	loginUser: any,
	history: any,
	auth: any,
	errors: any
}