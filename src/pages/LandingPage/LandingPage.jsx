import React from "react";
import { Navbar } from "../../components";
import heroImg from "../../assets/images/hero-img.svg";
import "./LandingPage.css";
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
          <button className="btn btn-primary">JOIN NOW</button>
          <p>Already Have an account?</p>
        </div>
      </main>
    </>
  );
}
