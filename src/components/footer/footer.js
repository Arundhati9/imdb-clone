import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        Made by Arundhati Mukherjee
        <a href="https://arundhati9.github.io/portfolio.github.io/" className="footer-link">
        Click ❤️ to know more.
        </a>
      </div>
    </div>
  );
};

export default Footer;
