import React from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import GoldCoins from "../../assets/Gold-coins.webp";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav id="navbar">
      <div id="navbar-logo">
        <Link to="/">
          <img src={Logo} alt="Website Logo" />
        </Link>
      </div>
      <div id="navbar-links">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/calendar">
          <h3>Calendar</h3>
        </Link>
        <Link to="#navbar-list">
          <h3>Journal</h3>
        </Link>
        <Link to="/profile">
          <h3>Profile</h3>
        </Link>
      </div>
      <div id="navbar-buttons-right">
        <a href="#navbar-list">
          <a id="gold-shop" href="#link">
            <img src={GoldCoins} alt="" />
          </a>
        </a>
        <button className="button">
          <div className="inner">
            <h3>Download</h3>
          </div>
        </button>
      </div>
    </nav>
  );
}
