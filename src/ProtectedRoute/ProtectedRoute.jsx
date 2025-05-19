import React from "react";
import { useContext } from "react";
import { userContext } from "../Authentication/AuthProvider";
import Loader from "../Components/Loader";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { loading, user } = useContext(userContext);
  if (loading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to={"/login"} state={location.pathname}></Navigate>;
  }
  return children;
};

export default ProtectedRoute;
