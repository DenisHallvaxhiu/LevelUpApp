import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "./CircleProgressBar.css";

export default function CircleProgressBar() {
    let tasks = 99;
    let completed = 9;
  const percentage = completed / tasks * 100;
  let stroke = percentage===100 ? "#f58cb2" : "#caaded"
  return (
    <div className="circle-progress-bar">
      <div>
        {" "}
        <CircularProgressbar styles={{path:{stroke: `${stroke}`}}} value={percentage} text={`${completed}/${tasks}`} />
      </div>
    </div>
  );
}
