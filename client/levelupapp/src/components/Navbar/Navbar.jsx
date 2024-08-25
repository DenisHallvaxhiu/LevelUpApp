import React from 'react'
import "./Navbar.css"
import Logo from "../../assets/Logo.png"

export default function Navbar() {
  return (
    <nav id="navbar">
        <div id='navbar-logo'>
            <a href="#navbar"><img src={Logo} alt="Website Logo" /></a>
        </div>
        <div></div>
        <div></div>
    </nav>
  )
}
