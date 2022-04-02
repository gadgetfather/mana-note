import React from "react";
import { useAuth } from "../context/auth-context";
import { Navigate, Outlet } from "react-router-dom";
export function ProtectedRoute() {
  const token = localStorage.getItem("Mananote.Token");
  const {
    authInfo: { user },
  } = useAuth();
  console.log("from protected", user);
  return Object.keys(user).length !== 0 || token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}
