import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../components/Home/Home";
// import Login from "../components/Auth/Login/Login";
// import Signup from "../components/Auth/Signup/Signup";
import Dashboard from "../components/Dashboard/Dashboard";
import Jean from "../components/Jean/Jean";
import Garrett from "../components/Garrett/Garrett";

// import NoMatch from "../components/NoMatch/NoMatch";
// import PrivateRoute from "../hoc/PrivateRoute";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/jean" component={Jean} />
      <Route path="/garrett" component={Garrett} />
      {/* <PrivateRoute path="/user-dashboard" component={Dashboard} /> */}
      {/* <Route component={NoMatch} /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;
