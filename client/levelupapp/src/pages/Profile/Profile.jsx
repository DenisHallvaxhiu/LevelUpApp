import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import Background from "../../assets/Idea Profile 2.png"
import "./Profile.css"

export default function Profile() {
  return (
    <div className='Profile'>
      <Navbar></Navbar>
      <img src={Background} alt="" />
      <div>Profile</div>
    </div>
  )
}
