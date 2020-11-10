import React from "react";
import {Switch, Route} from 'react-router-dom'
import Staff from '../Staff'
import Management from '../Management'
import Admin from '../Admin'
import './Portal.scss'

const Portal = () => {
  return (
    <div className="container">
      <div className="nav-bar">
        <a href="/portal/staff">
          <button className="button is-primary">Staff</button>
        </a>
        <a href="/portal/management">
          <button className="button is-primary">Mgmt</button>
        </a>
        <a href="/portal/admin">
          <button className="button is-primary">Admin</button>
        </a>
      </div>
       This is the Portal for Staff/Mgmt/Admin
      <Switch>
        <Route path="/portal/staff" component={Staff} />
        <Route path="/portal/management" component={Management} />
        <Route path="/portal/admin" component={Admin} />
      </Switch>
    </div>
  );
};
export default Portal;
