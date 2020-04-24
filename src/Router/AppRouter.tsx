import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import SignInPage from "../Pages/SignInPage/SignInPage";
import RetailersPage from "../Pages/RetailersPage";

const AppRouter = () => (
  <div>
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route path="/" exact component={SignInPage} />
        <Route path="/test" component={RetailersPage} />
      </Switch>
    </Router>
  </div>
);

export default AppRouter;
