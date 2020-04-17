import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import SignIn from "../Pages/SignInPage/SignIn";

const AppRouter = () => (
  <div>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/" exact component={SignIn} />
      </Switch>
    </Router>
  </div>
);

export default AppRouter;
