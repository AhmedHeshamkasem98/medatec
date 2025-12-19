import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-name">
          MEDA <span>TECH</span>
        </h2>

        <p className="footer-desc">
          Medatech is a leading online learning platform | React | UI Lover
        </p>

        {/* Policies List */}
        {/* <ul className="footer-policies">
          <li>
            <Link to="/privacy">سياسة الخصوصية</Link>
          </li>
          <li>
            <Link to="/return">سياسة الاسترجاع</Link>
          </li>
        </ul>*/}
        {/* Social Icons */}
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/ahmed-hesham-b462962a1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Ahmedheshamabdalbakekasem"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/ahmed_heshamp0p/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/ahmed.kasem.79039/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Ahmed Elqassem. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
