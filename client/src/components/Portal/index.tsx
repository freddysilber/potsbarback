import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
// Redux
import { connect } from 'react-redux'
// Components
import Staff from './Staff'
import Management from './Management'
import Checkout from './Checkout'
import Verification from './Verification'
import Thankyou from './Thankyou'
// Styles
import './Portal.scss'
// Routes
import { Routes } from '../../utils/routes'

const Portal: (props: any) => JSX.Element = (props: any) => {

	useEffect(() => {
		if (!props.auth.isAuthenticated) {
			props.history.push(Routes.login)
		}
	})

	return (
		<Switch>
			<Route path={Routes.staff} component={Staff} />
			<Route path={Routes.management} component={Management} />
			<Route path={Routes.checkout} component={Checkout} />
			<Route path={Routes.verification} component={Verification} />
			<Route path={Routes.thankyou} component={Thankyou} />
		</Switch>
	)
}
// export default Portal
const mapStateToProps = (state: any) => ({
	auth: state.auth,
	errors: state.errors
})

export default connect(mapStateToProps)(Portal)
