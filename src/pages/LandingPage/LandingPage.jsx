import React from "react";
import { Navbar } from "../../components";
import heroImg from "../../assets/images/hero-img.svg";
import heroImgDark from "../../assets/images/hero-img-dark.svg";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/theme-context";
export function LandingPage() {
  const { theme } = useTheme();
  return (
    <>
      <main className="main-content_landing">
        <img
          className="responsive-img hero-img"
          src={theme === "light" ? heroImg : heroImgDark}
          alt="hero"
        />
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
