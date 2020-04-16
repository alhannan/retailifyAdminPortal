import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import SignInPage from "../components/SignInPage";

const AppRouter = () => (
  <div>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/" exact component={SignInPage} />
      </Switch>
    </Router>
  </div>
);

export default AppRouter;
