import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import './About.scss'
// Routes
import { Routes } from '../../utils/routes'

const About: () => JSX.Element = () => {
	return (
		<div className="buttonContainer">
			<Link to={Routes.login}>
				<button className="button is-ghost is-small">Login</button>
			</Link>
			<Link to={Routes.signup}>
				<button className="button is-ghost is-small">Sign-up</button>
			</Link>
		</div>
	)
}

export default About
