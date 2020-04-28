import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import authState from "../Interfaces/authState";

const PublicRoute = ({ component: Component, ...rest }: any) => {
  const isAuthenticated = useSelector((state: authState) => !!state.auth.admin.uid);
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? <Redirect to="/dashboard" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
