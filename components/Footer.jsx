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
      <h2>MD Consulting & Solutions</h2>
      <p className="text">
        Stay ahead in a rapidly changing environment. Subscribe to our monthly
        newsletter to find out about the latest developments.
      </p>
<form>
  <div className="subscribe-row">
    <input placeholder="Your email address" />
    <button type="submit">SUBSCRIBE</button>
  </div>
  <div className="subscribe-consent">
    <input type="checkbox" />
    <p className="privacy-policy-link">
      *I have read the <Link to="/privacy-policy">Privacy Policy</Link> and agree to its terms.
    </p>
  </div>
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
