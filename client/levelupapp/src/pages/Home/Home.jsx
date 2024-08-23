import React from "react";
import "./Home.css"
import Player from "../../components/Player/Player";

export default function Home() {
  return (
    <div className="Home">
      <div className="sidebar left">
        <Player></Player>
        <div className=""><h1>123123</h1></div>
        <div className=""><h1>123123</h1></div>
      </div>
      <div className="main-content">
        {" "}
        <p>testsssssss</p>
      </div>
      <div className="sidebar right">
        {" "}
        <h1>test</h1>
      </div>
    </div>
  );
}
