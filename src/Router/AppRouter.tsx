import React from "react";
import history from "../history";
import { Router, Switch } from "react-router-dom";

import SignInPage from "../Pages/SignInPage/SignInPage";
import RetailersPage from "../Pages/RetailersPage";
import DashboardPage from "../Pages/DashboardPage/DashboardPage";
import CustomersPage from "../Pages/CustomersPage/CustomersPage";
import OrdersPage from "../Pages/OrdersPage/OrdersPage";
import ProductsPage from "../Pages/ProductsPage/ProductsPage";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => (
  <div>
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" exact component={SignInPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/retailers" component={RetailersPage} />
        <PrivateRoute path="/customers" component={CustomersPage}/>
        <PrivateRoute path="/orders" component={OrdersPage} />
        <PrivateRoute path="/products" component={ProductsPage}/>
      </Switch>
    </Router>
  </div>
);

export default AppRouter;
