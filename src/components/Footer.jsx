import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 My Dev Portfolio</p>
      <div className="social-icons">
        <a href="https://github.com/yanisiaa" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/яна-сергіївна-максименко-571ab2314/?trk=opento_sprofile_goalscard" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://t.me/yanisia_007" target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
        <a href="https://www.instagram.com/yana_maximenko/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
