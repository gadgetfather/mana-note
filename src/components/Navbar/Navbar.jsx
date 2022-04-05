import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useTheme } from "../../context/theme-context";
import "./Navbar.css";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const token = localStorage.getItem("Mananote.Token");
  const navigate = useNavigate();

  const { authDispatch } = useAuth();
  const user = JSON.parse(localStorage.getItem("Mananote.User"));
  const handleLogout = () => {
    localStorage.removeItem("Mananote.Token");
    localStorage.removeItem("Mananote.User");
    authDispatch({ type: "SET_USER", payload: {} });
    navigate("/");
  };
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    if (newTheme === "dark") {
      document.body.style.backgroundColor = "#222831";
    } else {
      document.body.style.backgroundColor = "#fff";
    }
    setTheme(newTheme);
  };
  return (
    <>
      <nav className="navbar">
        {token ? (
          <Link className="link brand-name" to={"/notes"}>
            <h1>ManaNote</h1>
          </Link>
        ) : (
          <Link className="link brand-name" to={"/"}>
            <h1>ManaNote</h1>
          </Link>
        )}
        <div className="nav-actions">
          {token ? (
            <p className="username">Hello,{user.firstName}</p>
          ) : (
            <Link to={"/signup"} className="btn btn-primary btn-action">
              Signup
            </Link>
          )}
          {token ? (
            <span
              onClick={handleLogout}
              className="material-icons-outlined logout-icon icons"
            >
              logout
            </span>
          ) : (
            <Link to={"/login"} className="btn btn-secondary btn-action login">
              Login
            </Link>
          )}

          {theme === "light" ? (
            <span
              onClick={switchTheme}
              className="material-icons btn-theme icons"
            >
              light_mode
            </span>
          ) : (
            <span
              onClick={switchTheme}
              className="material-icons btn-theme icons"
            >
              dark_mode
            </span>
          )}
        </div>
      </nav>
    </>
  );
}
