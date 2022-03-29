import axios from "axios";
import react, { createContext, useContext, useReducer } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const initialValue = {
  user: {},
  status: "",
  login_error: "",
  signup_error: "",
  text: "",
  login_text: "",
};
const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "LOGIN_ERROR":
      return { ...state, login_error: action.payload };
    case "SIGNUP_ERROR":
      return { ...state, signup_error: action.payload };
    case "SET_TEXT":
      return { ...state, text: action.payload };
    case "SET_LOGIN_TEXT":
      return { ...state, login_text: action.payload };

    default:
      break;
  }
};
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authInfo, authDispatch] = useReducer(authReducer, initialValue);

  const login = async (email, password) => {
    try {
      authDispatch({ type: "LOGIN_ERROR", payload: "" });
      const response = await axios.post("/api/auth/login", { email, password });
      const {
        status,
        data: { encodedToken, foundUser },
      } = response;
      if (status === 200) {
        localStorage.setItem("Mananote.Token", encodedToken);
        localStorage.setItem("Mananote.User", JSON.stringify(foundUser));
        authDispatch({ type: "SET_USER", payload: foundUser });
        authDispatch({
          type: "SET_LOGIN_TEXT",
          payload: "Logged in successfully ",
        });
        setTimeout(() => {
          authDispatch({ type: "SET_TEXT", payload: "" });
          navigate("/notes");
        }, 2000);
      }
    } catch (error) {
      authDispatch({ type: "LOGIN_ERROR", payload: error });
    }
  };

  const signup = async (email, password, firstName) => {
    try {
      authDispatch({ type: "SIGNUP_ERROR", payload: "" });
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        firstName,
      });
      const { status } = response;
      if (status === 201) {
        authDispatch({ type: "SET_TEXT", payload: "Account has been created" });
        setTimeout(() => {
          authDispatch({ type: "SET_TEXT", payload: "" });
          navigate("/login");
        }, 2000);
      }
      console.log(response);
    } catch (error) {
      authDispatch({ type: "SIGNUP_ERROR", payload: error });
    }
  };

  return (
    <AuthContext.Provider value={{ authInfo, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
