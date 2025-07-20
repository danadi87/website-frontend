import React from "react";
import { Link } from "react-router-dom";
import "@styles/Navbar.css";

export function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
