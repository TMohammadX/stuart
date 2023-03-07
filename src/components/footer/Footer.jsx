import React from "react";
import "./footer.css";
import { FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="sm">
          <h1 className="sm-title">Site Map</h1>
          <a href=""></a>
        </div>
      </div>
      <div className="footer-bottom">
        <h5 style={{ fontWeight: "500" }}>
          © 2022-2023 STUART. All Rights Reserved.
        </h5>
        <div className="footer-social">
          <a href="">
            <FaInstagram size="1rem" className="footer-social-link" />
          </a>
          <a href="">
            <FaTiktok size="1rem" className="footer-social-link" />
          </a>
        </div>
      </div>
    </div>
  );
}
