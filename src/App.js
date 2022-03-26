import MockmanEs from "mockman-js";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import { LandingPage, LoginPage, SignupPage } from "./pages/index";

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
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
