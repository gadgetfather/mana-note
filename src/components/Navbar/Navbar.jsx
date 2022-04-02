import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "./Navbar.css";

export function Navbar() {
  const token = localStorage.getItem("Mananote.Token");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { authDispatch } = useAuth();
  const user = JSON.parse(localStorage.getItem("Mananote.User"));
  const handleLogout = () => {
    localStorage.removeItem("Mananote.Token");
    localStorage.removeItem("Mananote.User");
    authDispatch({ type: "SET_USER", payload: {} });
    navigate("/");
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
            <p>Hello,{user.firstName}</p>
          ) : (
            <Link to={"/signup"} className="btn btn-primary btn-action">
              Signup
            </Link>
          )}
          {token ? (
            <span
              onClick={handleLogout}
              className="material-icons-outlined logout-icon"
            >
              logout
            </span>
          ) : (
            <Link to={"/login"} className="btn btn-secondary btn-action login">
              Login
            </Link>
          )}
          <button onClick={handleMenu} className="btn main-menu">
            {isOpen ? (
              <span className="material-icons-outlined">close</span>
            ) : (
              <span className="material-icons-outlined">menu</span>
            )}
          </button>
        </div>
      </nav>
      <div className={isOpen ? "mobile-nav is-opened" : "mobile-nav"}>
        {token ? (
          <>
            <p className="btn btn-nav">
              <span className="material-icons-outlined">logout</span>Logout
            </p>
            <Link
              onClick={() => setIsOpen(false)}
              to={"/login"}
              className="btn btn-nav"
            >
              <span className="material-icons-outlined">archive</span>
              Archived
            </Link>
          </>
        ) : (
          <Link
            onClick={() => setIsOpen(false)}
            to={"/login"}
            className="btn btn-nav"
          >
            Login
          </Link>
        )}
      </div>
    </>
  );
}
