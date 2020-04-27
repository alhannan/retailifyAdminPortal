import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Navbar from "../Components/NavBar/NavBar";
import authState from "../Interfaces/authState";
import FilterBar from "../Pages/RetailersPage/FilterBar";
import Header from "../Components/Header/Header";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const isAuthenticated = useSelector(
    (state: authState) => !!state.auth.admin.uid
  );

  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? (
          <div className="container">
            <Navbar />
            <div className="content-container">
              <Header page={"Retailers"} /> 
              <FilterBar />
              <Component {...props} />
            </div>
          </div>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
