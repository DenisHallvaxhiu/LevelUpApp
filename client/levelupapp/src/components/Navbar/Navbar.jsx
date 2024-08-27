import React from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import GoldCoins from "../../assets/Gold-coins.webp"

export default function Navbar() {
  return (
    <nav id="navbar">
      <div id="navbar-logo">
        <a href="#navbar">
          <img src={Logo} alt="Website Logo" />
        </a>
      </div>
      <div id="navbar-links">
        <a href="#navbar-list">
          <h3>Home</h3>
        </a>
        <a href="#navbar-list">
          <h3>Calendar</h3>
        </a>
        <a href="#navbar-list">
          <h3>Journal</h3>
        </a>
        <a href="#navbar-list">
          <h3>Profile</h3>
        </a>
      </div>
      <div id="navbar-buttons-right">
        <a href="#navbar-list">
          <a href="#link"><img src={GoldCoins} alt="" /></a>
        </a>
        <button>Download</button>
      </div>
    </nav>
  );
}
