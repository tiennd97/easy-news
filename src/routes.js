import { createBrowserHistory } from "history";
import React from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { HomePage } from "./screens/HomePage";

export const Routes = () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);
