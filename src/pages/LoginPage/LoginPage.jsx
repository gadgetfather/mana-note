import React from "react";
import "./LoginPage.css";
export function LoginPage() {
  return (
    <>
      <main className="main-content_login">
        <h1 className="page-title">Login</h1>
        <form className="form-container">
          <label className="input-label" htmlFor="email">
            Email:
          </label>
          <input className="input" id="email" name="email" type="text" />
          <label className="input-label" htmlFor="password">
            Password:
          </label>
          <input className="input" id="password" name="password" type="text" />
          <button className="btn btn-primary">Login</button>
        </form>
      </main>
    </>
  );
}
