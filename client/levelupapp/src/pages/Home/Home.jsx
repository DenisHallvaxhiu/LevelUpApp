import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Test from "../../assets/Working background.png";
import CircleAnimationLevel from "../../components/CircleAnimationLevel/CircleAnimationLevel";
import CircleAnimationExperience from "../../components/CircleAnimationExperience/CircleAnimationExperience";

export default function Home() {
  return (
    <div className="Home">
      <Navbar></Navbar>
      <img src={Test} alt="" />
      <div className="cards">
        <div className="card">
          <h2 className="card-title">Player Profile</h2>
          <CircleAnimationLevel level="5"></CircleAnimationLevel>
        </div>
        <div className="card">
          <h2 className="card-title">Player Profile</h2>
          <CircleAnimationLevel level="5"></CircleAnimationLevel>
        </div>
        <div className="card">
          <h2 className="card-title">Player Profile</h2>
          <CircleAnimationExperience experience="31"></CircleAnimationExperience>
        </div>
        <div className="card">
          <h2 className="card-title">Experience</h2>
          <CircleAnimationExperience experience="81"></CircleAnimationExperience>
        </div>
        <div className="card">
          <h2 className="card-title">Player Profile</h2>
        </div>
      </div>
      <footer>SAdasds</footer>
    </div>
  );
}
