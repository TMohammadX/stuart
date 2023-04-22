import React from "react";
import "./footer.css";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { Newsletter } from "./Newsletter";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <h1 className="footer-links-title">Links</h1>
        <a href="/" className="footer-link">
          Home
        </a>
        <a href="/contact" className="footer-link">
          Contact
        </a>
        <a href="/" className="footer-link">
          Instagram
        </a>
        <a href="/privacypolicy" className="footer-link">
          Privacy Policy
        </a>
      </div>
      <h3 className="copyright">© STUART 2022. All rights reserved.</h3>
      <Newsletter />
    </div>
  );
}
