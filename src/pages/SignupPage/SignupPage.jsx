import React, { useReducer } from "react";
import "./SignupPage.css";

export const validate = (values) => {
  const errors = {};
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!values.firstName) {
    errors.firstName = "Name is required";
  }
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
const initialObj = { email: "", password: "", firstName: "", errors: {} };
const signupReducer = (state, action) => {
  switch (action.type) {
    case "ON_CHANGE":
      return { ...state, [action.name]: action.payload };
    case "ERRORS":
      return { ...state, errors: action.payload };
  }
};
export function SignupPage() {
  const [formValues, formValuesDispatch] = useReducer(
    signupReducer,
    initialObj
  );
  const { errors } = formValues;
  const handleSubmit = (e, values) => {
    e.preventDefault();
    formValuesDispatch({ type: "ERRORS", payload: validate(values) });
  };
  console.log("signup", formValues);
  return (
    <>
      <main className="main-content_signup">
        <h1 className="page-title">Signup</h1>
        <form className="form-container">
          <label className="input-label" htmlFor="firstName">
            Name:
          </label>
          <input
            onChange={(e) =>
              formValuesDispatch({
                type: "ON_CHANGE",
                name: e.target.name,
                payload: e.target.value,
              })
            }
            className="input"
            id="firstName"
            name="firstName"
            type="text"
            value={formValues.firstName}
          />
          {errors.firstName ? (
            <p className="error-text">Name is required</p>
          ) : (
            ""
          )}
          <label className="input-label" htmlFor="email">
            Email:
          </label>
          <input
            onChange={(e) =>
              formValuesDispatch({
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
          {errors.email ? <p className="error-text">Email is required</p> : ""}
          <label className="input-label" htmlFor="password">
            Password:
          </label>
          <input
            onChange={(e) =>
              formValuesDispatch({
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
            <p className="error-text">Password is required</p>
          ) : (
            ""
          )}
          <button
            onClick={(e) => handleSubmit(e, formValues)}
            type="submit"
            className="btn btn-primary"
          >
            Create Account
          </button>
        </form>
      </main>
    </>
  );
}
