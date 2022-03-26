import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <h1 className="brand-name">ManaNote</h1>
        <Link className="link brand-name" to={"/"}>
          <h1>ManaNote</h1>
        </Link>
        <div className="nav-actions">
          <Link to={"/signup"} className="btn btn-primary btn-action">
            Signup
          </Link>
          <button className="btn btn-secondary btn-action login">Login</button>
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
        <Link to={"/login"} className="btn btn-nav">
          Login
        </Link>
      </div>
    </>
  );
}
