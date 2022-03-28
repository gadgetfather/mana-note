import react, { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const authReducer = (state, action) => {};
const AuthProvider = ({ children }) => {
  const [authInfo, authDispatch] = useReducer(authReducer, initialValue);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
