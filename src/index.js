import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "assets/scss/material-kit-react.scss";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route> <Redirect to="/"/></Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
