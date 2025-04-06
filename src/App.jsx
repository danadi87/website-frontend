import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "../components/Home";
import { AboutMe } from "../components/AboutMe";
import { Portfolio } from "../components/Portfolio";
import { Services } from "../components/Services";
import { Careers } from "../components/Careers";
import { Contact } from "../components/Contact";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;
