import "./App.css";
import { Footer, Navbar } from "./components";
import { LandingPage } from "./pages/index";

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <LandingPage />
      </div>
      <Footer />
    </>
  );
}

export default App;
