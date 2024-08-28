import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Test from "../../assets/Working background.png";

export default function Home() {
  return (
    <div className="Home">
      <Navbar></Navbar>
      <img src={Test} alt="" />
      <div className="cards">
        <div className="card">
          <h2 className="card-title">Player Profile</h2>
          <div className="circle-level">
            <h1>9</h1>
          </div>
          <div className="bubbles"></div>
          <div className="bubbles"></div>
          <div className="bubbles"></div>
          <div className="bubbles"></div>
          <div className="bubbles"></div>
          <div className="bubbles"></div>
          <div className="bubbles"></div>
          <div className="bubbles"></div>
        </div>
        <div className="card">
          <h2 className="card-title">Player Profile</h2>
        </div>
        <div className="card">
          <h2 className="card-title">Player Profile</h2>
        </div>
        <div className="card">
          <h2 className="card-title">Player Profile</h2>
        </div>
        <div className="card">
          <h2 className="card-title">Player Profile</h2>
        </div>
      </div>
      <footer>SAdasds</footer>
    </div>
  );
}
