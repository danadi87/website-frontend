import React from "react";
import "../src/styles/Services.css";
import { Link } from "react-router-dom";

export function Services() {
  return (
    <div className="main-section">
      <ul>
        <li>
          <Link to="/web-development">Web Development</Link>
        </li>
        <li>
          <Link to="/finance">Financial Services</Link>
        </li>
        <li>
          <Link to="/supply-chain">Supply Chain</Link>
        </li>
        <li>
          <Link to="/sports">Sports Strategy</Link>
        </li>
        <li>
          <Link to="/talent">Talent Development</Link>
        </li>
        <li>
          <Link to="/tech">Tech</Link>
        </li>
      </ul>
    </div>
  );
}
