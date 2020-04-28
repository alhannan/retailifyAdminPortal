import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Navbar from "../Components/NavBar/NavBar";
import authState from "../Interfaces/authState";
import Header from "../Components/Header/Header";
import pagesInterface from "../Interfaces/pagesInterface";
import Loader from "react-loaders";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const isAuthenticated = useSelector(
    (state: authState) => !!state.auth.admin.uid
  );

  const isLoaded = useSelector(
    (state: { isLoading: boolean }) => state.isLoading
  );

  const selectedPage = useSelector(
    (state: pagesInterface) => state.navigation.currentPage
  );

  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? (
          <div className="container">
            <Navbar />
            <div className="content-container">
              <Header page={selectedPage} />
              <Loader type="ball-clip-rotate-multiple" active={isLoaded} />
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
