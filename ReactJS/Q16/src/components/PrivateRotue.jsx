import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
const PrivateRoute = () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  console.log(user);
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PrivateRoute;
