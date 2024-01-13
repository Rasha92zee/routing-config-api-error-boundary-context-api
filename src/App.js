import "./App.css";
import cs_logo from "./logo.svg";
import WebRoutes from "./routes/WebRoutes";
import WebLinks from "./routes/WebLinks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <img src={cs_logo} alt="CyberSquare logo" width="120" />
        {/* Navbar */}
        <WebLinks />
      </div>

      <WebRoutes />

      {/* <Routes>
        <Route key="" path="" element="" />
        <Route key="" path="" element="" />
        <Route key="" path="" element="" />
      </Routes> */}

      <Footer />
    </BrowserRouter>
  );
}
export default App;