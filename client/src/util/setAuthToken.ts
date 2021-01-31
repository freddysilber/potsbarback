import axios from 'axios'

interface CommonHeader {
	Accept: string,
	Authorization?: string
}

export default function setAuthToken(token: string | boolean) {
	/**
	 * 	if token
	 * Apply authorization token to every request if logged in 
	 * 	else 
	 * Delete Auth Header
	 */
	const commonHeader: CommonHeader = axios.defaults.headers.common
	token ? commonHeader.Authorization = token as string : delete commonHeader.Authorization
}