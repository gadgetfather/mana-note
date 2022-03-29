import axios from "axios";
import react, { createContext, useContext, useReducer } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const initialValue = { user: {}, status: "", login_error: "" };
const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "LOGIN_ERROR":
      return { ...state, login_error: action.payload };

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
        navigate("/notes");
      }
    } catch (error) {
      authDispatch({ type: "LOGIN_ERROR", payload: error });
    }
  };

  return (
    <AuthContext.Provider value={{ authInfo, login }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
