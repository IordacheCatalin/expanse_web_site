import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

// Import pages
import Navbar from "../src/Components/Navbar/Navbar.js";
import Home from "../src/Pages/Home/Home.js";
import Contact from "../src/Pages/Contact/Contact.js";
import AboutUsPage from "../src/Pages/AboutUs/AboutUs.js";



function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="*" element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
      </Routes>
      
    </Router>
  </div>
  );
}

export default App;
