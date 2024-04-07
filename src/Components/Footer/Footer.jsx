import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import { DiCssdeck } from "react-icons/di";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>
            <DiCssdeck size="3rem" />
            Portfolio
          </h1>
          <p>I am a fullstack developer.</p>
        </div>
        <div className="footer-top-right"></div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Rekha Gorde.All Rights Reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};
import "./Footer.css";
export default Footer;
