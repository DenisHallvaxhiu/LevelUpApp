import React from "react";
import "./CircleAnimationLevel.css"

export default function CircleAnimationLevel({level}) {
  return (
    <div className="circle-animation-level">
      <div className="circle-level">
        <h1>{level}</h1>
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
