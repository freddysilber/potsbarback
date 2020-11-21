import React from "react";
import { Switch, Route } from 'react-router-dom'
import Staff from './Staff'
import Management from './Management'
import './Portal.scss'
import Checkout from "./Checkout";
import { Routes } from "../../utils/routes";

const Portal: () => JSX.Element = () => {

	return (
		<div>
			<Switch>
				<Route path={Routes.staff} component={Staff} />
				<Route path={Routes.management} component={Management} />
				<Route path={Routes.checkout} component={Checkout} />
			</Switch>
		</div>
	);
};
export default Portal;
