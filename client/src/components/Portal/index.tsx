import React from "react";
import { Switch, Route } from 'react-router-dom'
import Staff from './Staff'
import Management from './Management'
import './Portal.scss'
import Checkout from "./Checkout";

const Portal: () => JSX.Element = () => {

	return (
		<div>
			<Switch>
				<Route path="/portal/staff" component={Staff} />
				<Route path="/portal/management" component={Management} />
				<Route path="/portal/checkout" component={Checkout} />
			</Switch>
		</div>
	);
};
export default Portal;
