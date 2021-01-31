export default interface User {
	id: number,
	firstName: string,
	lastName: string,
	email: string,
	password?: string,
	exp: number,
	iat: number
}