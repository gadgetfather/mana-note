import React from "react";
import "./SignupPage.css";
export function SignupPage() {
  return (
    <>
      <main className="main-content_signup">
        <h1 className="page-title">Signup</h1>
        <form className="form-container">
          <label className="input-label" htmlFor="firstName">
            Name:
          </label>
          <input
            className="input"
            id="firstName"
            name="firstName"
            type="text"
          />
          <label className="input-label" htmlFor="email">
            Email:
          </label>
          <input className="input" id="email" name="email" type="text" />
          <label className="input-label" htmlFor="password">
            Password:
          </label>
          <input className="input" id="password" name="password" type="text" />
          <button className="btn btn-primary">Create Account</button>
        </form>
      </main>
    </>
  );
}
