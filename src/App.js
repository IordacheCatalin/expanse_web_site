import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

// Import pages
import Navbar from "../src/Components/Navbar/Navbar.js";


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="*" element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer /> */}
    </Router>
  </div>
  );
}

export default App;
