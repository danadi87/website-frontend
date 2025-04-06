import React from "react";
import { Link } from "react-router-dom";
import { Home } from "../components/Home";
import { AboutMe } from "../components/AboutMe";
import { Portfolio } from "../components/Portfolio";
import { Services } from "../components/Services";
import { Careers } from "../components/Careers";
import { Contact } from "../components/Contact";

export function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About me</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/services">Services</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
