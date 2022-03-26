import React from "react";
import { Navbar } from "../../components";
import heroImg from "../../assets/images/hero-img.svg";
import "./LandingPage.css";
import { Link } from "react-router-dom";
export function LandingPage() {
  return (
    <>
      <main className="main-content_landing">
        <img className="responsive-img hero-img" src={heroImg} alt="hero" />
        <div className="details">
          <h2>For All Your Note taking needs!</h2>
          <p>
            Manage your daily tasks and workflow in a modern way and boost your
            efficiency without any efforts.
          </p>
        </div>
        <div className="action-btn">
          <Link to={"/signup"} className="btn btn-primary">
            JOIN NOW
          </Link>
          <Link className="link btn-login" to={"/login"}>
            Already Have an account?
          </Link>
        </div>
      </main>
    </>
  );
}
