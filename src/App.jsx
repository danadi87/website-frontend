import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Careers } from "../components/Careers";
import { Contact } from "../components/Contact";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Resources } from "../components/Resources";

function App() {
  return (
    <div>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Resources />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
