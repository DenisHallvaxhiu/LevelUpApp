import React from "react";
import "./CircleAnimationLevel.css";

export default function CircleAnimationLevel({ level }) {
  return (
    <div className="circle-animation-level">
      <div className="circle-level">
        <div className="inner">
          <h1>{level}</h1>
        </div>
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
  );
}
