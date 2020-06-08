import React from "react";
import { Router, Switch } from "react-router-dom";
import history from "../history";
import BrandsPage from "../Pages/BrandsPage/BrandsPage";
import CategoriesPage from "../Pages/CategoriesPage/CategoriesPage";
import ProductsPage from "../Pages/ProductsPage/ProductsPage";
import RetailersPage from "../Pages/RetailersPage";
import SignInPage from "../Pages/SignInPage/SignInPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <PublicRoute exact path="/" component={SignInPage} />
          <PrivateRoute path="/retailers" component={RetailersPage} />
          <PrivateRoute path="/products" component={ProductsPage} />
          <PrivateRoute path="/categories" component={CategoriesPage} />
          <PrivateRoute path="/brands" component={BrandsPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
