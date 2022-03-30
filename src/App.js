import MockmanEs from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import {
  LandingPage,
  LoginPage,
  SignupPage,
  NotesPage,
  ArchivePage,
} from "./pages/index";

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/mock" element={<MockmanEs />} />
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
