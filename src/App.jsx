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
import { FinancialServices } from "../components/FinancialServices";
import { SportsStrategy } from "../components/SportsStrategy";
import { SupplyChain } from "../components/SupplyChain";
import { TalentDevelopment } from "../components/TalentDevelopment";
import { Tech } from "../components/Tech";
import { WebDevelopment } from "../components/WebDevelopment";
import { Login } from "../components/Login";
import { Signup } from "../components/Signup";
import { Football } from "../components/Football";
import { CarlosRodriguez } from "../directory/CarlosRodriguez";

function App() {
  return (
    <div>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sports" element={<SportsStrategy />} />
          <Route path="/supply-chain" element={<SupplyChain />} />
          <Route path="/talent" element={<TalentDevelopment />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/finance" element={<FinancialServices />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/football" element={<Football />} />
          <Route path="/carlosrodriguez" element={<CarlosRodriguez />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
