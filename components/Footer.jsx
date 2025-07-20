import React from "react";
import "@styles/Footer.css";
import { Link } from "react-router-dom";
import instagramIcon from "@assets/icons-instagram.png";
import linkedinIcon from "@assets/icons-linkedin.png";
import xIcon from "@assets/icons-x.png";
import youtubeIcon from "@assets/icons-youtube.png";
import copyrightIcon from "@assets/icons-copyright.png";

export function Footer() {
  return (
    <div className="footer">
      <h3>MD Consulting & Solutions</h3>
      <p>
        Stay ahead in a rapidly changing environment. Subscribe to our monthly
        newsletter to find out about the latest developments.
      </p>
      <form className="subscribe" id="subscribe">
        <input placeholder="Your email address"></input>
        <button>SUBSCRIBE</button>
        <input type="checkbox"></input>
        <p className="privacy">
          *I have read the <Link to="/privacy-policy">Privacy Policy</Link> and
          agree to its terms.
        </p>
      </form>
      <h3 className="social">Let's connect</h3>
      <div className="social-icons">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <img src={xIcon} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtubeIcon} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} />
        </a>
      </div>
      <div className="copyright">
        <img src={copyrightIcon} />
        <p>2025 MD Consulting & Solutions</p>
      </div>
    </div>
  );
}
