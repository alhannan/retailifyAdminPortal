import React from "react";
import history from "../history";
import { Router, Switch } from "react-router-dom";
import SignInPage from "../Pages/SignInPage/SignInPage";
import RetailersPage from "../Pages/RetailersPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => (
  <div>
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" exact component={SignInPage} />
        <PrivateRoute path="/test" component={RetailersPage} />
      </Switch>
    </Router>
  </div>
);

export default AppRouter;
