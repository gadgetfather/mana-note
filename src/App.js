import MockmanEs from "mockman-js";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { useTheme } from "./context/theme-context";
import {
  LandingPage,
  LoginPage,
  SignupPage,
  NotesPage,
  ArchivePage,
  InfoPage,
  TrashPage,
  LabelPage,
} from "./pages/index";
import { ProtectedRoute } from "./route/ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const token = localStorage.getItem("Mananote.Token");
    console.log(token);
    if (token) {
      navigate("/notes");
    } else {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className={`main-container`} data-theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/mock" element={<MockmanEs />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/trash" element={<TrashPage />} />
            <Route path="/label" element={<LabelPage />} />
            <Route path="/info" element={<InfoPage />} />

            <Route path="/notes" element={<NotesPage />} />
            <Route path="/archived" element={<ArchivePage />} />
          </Route>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
