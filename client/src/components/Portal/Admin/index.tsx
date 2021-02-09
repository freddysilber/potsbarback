import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
// Styles
import "./Admin.scss";
// Routes
import { Routes } from "../../../constants";
import Dataadmin from "./Dataadmin"
import Employeeadmin from "./Employeeadmin"
import Scheduleadmin from "./Scheduleadmin"
import Eventsadmin from "./Eventsadmin"

const Admin = () => {
    return (
        <div>
        <Switch>
        <Route path={Routes.dataadmin} component={Dataadmin} />
        <Route path={Routes.employeeadmin} component={Employeeadmin} />
        <Route path={Routes.eventsadmin} component={Eventsadmin} />
        <Route path={Routes.scheduleadmin} component={Scheduleadmin} />
        </Switch>

        </div>
    )
}

export default Admin;