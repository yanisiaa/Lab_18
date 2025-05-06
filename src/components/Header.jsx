import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo-text">My Portfolio</div>
      <nav className="nav">
        <Link to="/about">Про мене</Link>
        <Link to="/my-city">Моє місто</Link>
        <Link to="/my-future">Мій розвиток</Link>
      </nav>
    </header>
  );
}

export default Header;