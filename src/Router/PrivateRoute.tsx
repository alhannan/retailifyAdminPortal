import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Navbar from "../Components/NavBar/NavBar";
import authState from "../Interfaces/authState";
import Header from "../Components/Header/Header";
import pagesInterface from "../Interfaces/pagesInterface";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const isAuthenticated = useSelector(
    (state: authState) => !!state.auth.admin.uid
  );

  const selectedPage = useSelector((state: pagesInterface) => state.navigation.currentPage);

  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? (
          <div className="container">
            <Navbar />
            <div className="content-container">
              <Header page={selectedPage} /> 
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
