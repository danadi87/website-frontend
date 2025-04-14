import React from "react";
import { Link } from "react-router-dom";
import "../src/styles/Navbar.css";

export function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/services">Resources</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
