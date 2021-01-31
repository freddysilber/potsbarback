import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import './About.scss'
// Routes
import { Routes } from '../../constants'

const About: () => JSX.Element = () => {
	return (
		<div className="buttonContainer">
			<Link to={Routes.login}>
				<button className="button is-link is-light">Login</button>
			</Link>
			<Link to={Routes.signup}>
				<button className="button is-link is-light">Sign-up</button>
			</Link>
		</div>
	)
}

export default About