import React, { useState } from "react";
import styles from "./Navbar.css";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };
  return (
    <>
      <nav className="navbar">
        <h1 className="brand-name">ManaNote</h1>
        <div className="nav-actions">
          <button className="btn btn-primary btn-action">Signup</button>
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
        <button className="btn btn-nav">Login</button>
      </div>
    </>
  );
}
