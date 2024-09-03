import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Background from "../../assets/Working background.png";
import CircleAnimationLevel from "../../components/CircleAnimationLevel/CircleAnimationLevel";
import CircleAnimationExperience from "../../components/CircleAnimationExperience/CircleAnimationExperience";
import CircleProgressBar from "../../components/CircleProgressBar/CircleProgressBar";

export default function Home() {
  return (
    <div className="Home">
      <Navbar></Navbar>
      <img src={Background} alt="" />
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
          <h2 className="card-title">Tasks on hand</h2>
          <CircleProgressBar tasks={51} completed={51}/>
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
