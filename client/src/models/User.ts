export default interface User {
	id: number,
	firstName: string,
	lastName: string,
	email: string,
	confirmEmail?: string,
	password: string,
	confirmPassword?: string,
	isLoggedIn: boolean
}