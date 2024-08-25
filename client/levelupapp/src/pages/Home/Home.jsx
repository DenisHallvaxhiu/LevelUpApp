import React from "react";
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar";
import Test from "../../assets/Working background.png"

export default function Home() {
  return (
    <div className="Home">
      <Navbar></Navbar>
      <img src={Test} alt=""  width={"100%"} height={"700px"}/>
    </div>
  );
}
