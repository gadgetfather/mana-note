import MockmanEs from "mockman-js";
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import {
  LandingPage,
  LoginPage,
  SignupPage,
  NotesPage,
  ArchivePage,
  InfoPage,
  TrashPage,
} from "./pages/index";
const encodedToken = localStorage.getItem("Mananote.Token");

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/mock" element={<MockmanEs />} />
          <Route path="/trash" element={<TrashPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/archived" element={<ArchivePage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
