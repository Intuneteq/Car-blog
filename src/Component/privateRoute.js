import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ ...rest }) => {
  const auth = localStorage.getItem("token");
  if (auth) {
    return <Route {...rest} />;
  }
  return <Navigate to="/admin" />;
};

export default PrivateRoute;
