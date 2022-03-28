import React, { useReducer } from "react";
import "./LoginPage.css";

export const validate = (values) => {
  const errors = {};
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!values.email) {
    errors.email = "email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format";
  }
  if (!values.password) {
    errors.password = "password is required";
  }
  return errors;
};

const initialObj = { email: "", password: "", errors: {} };
const formValueReducer = (state, action) => {
  switch (action.type) {
    case "ON_CHANGE":
      return { ...state, [action.name]: action.payload };
    case "VALIDATE":
      return { ...state, errors: action.payload };
  }
};

export function LoginPage() {
  const [formValues, formValueDispatch] = useReducer(
    formValueReducer,
    initialObj
  );
  const { errors } = formValues;
  const handleSubmit = (e, values) => {
    e.preventDefault();
    formValueDispatch({ type: "VALIDATE", payload: validate(values) });
  };
  console.log(formValues);
  return (
    <>
      <main className="main-content_login">
        <h1 className="page-title">Login</h1>
        <form className="form-container">
          <label className="input-label" htmlFor="email">
            Email:
          </label>
          <input
            onChange={(e) =>
              formValueDispatch({
                type: "ON_CHANGE",
                name: e.target.name,
                payload: e.target.value,
              })
            }
            className="input"
            id="email"
            name="email"
            type="text"
            value={formValues.email}
          />
          {errors.email ? <p className="error-text">{errors.email}</p> : ""}
          <label className="input-label" htmlFor="password">
            Password:
          </label>
          <input
            onChange={(e) =>
              formValueDispatch({
                type: "ON_CHANGE",
                name: e.target.name,
                payload: e.target.value,
              })
            }
            className="input"
            id="password"
            name="password"
            type="text"
            value={formValues.password}
          />
          {errors.password ? (
            <p className="error-text">{errors.password}</p>
          ) : (
            ""
          )}
          <button
            onClick={(e) => handleSubmit(e, formValues)}
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </main>
    </>
  );
}
