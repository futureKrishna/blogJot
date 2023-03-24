import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // const { isLoggedIn } = useSelector((store) => store.login); //we will be getting the whole states of reducer if not destructured
  // const isLoggedIn1 = useSelector((store) => store.login.isLoggedIn);
  const isLoggedIn = sessionStorage.getItem("login");
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
