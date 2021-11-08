import React from "react";
import "../style/style.css";
import logo from "../assets/logo2.PNG";

function Footer() {
  return (
    <div className="footer">
      <footer className="footer">
        <div className="footer-left">
          <div className="footer-item">
            <h4>U.S. CAPITOL</h4>
            <ul role="list">
              <li>
                <span> Washington, DC</span>
              </li>
              <li>
                <a href="#"> info@clerk.com</a>
              </li>
              <li>
                <p> (202) 225-7000</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-center">
          <div className="footer-item">
            <h4>MEMBER INFO</h4>
            <ul role="list">
              <li>
                <a href="/member">Member Profiles</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>ABOUT</h4>
            <ul role="list">
              <li>
                <a href="/about">Overview</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h4>HELP & RESOURCES</h4>
            <ul role="list">
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-item">
            <span>
              <img className="logo2" src={logo} />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
