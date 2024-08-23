import React from 'react'
import "./Player.css"

export default function Player() {
  return (
    <div className='player'>
        <img className='player-background-image' src='https://www.creativefabrica.com/wp-content/uploads/2022/01/11/Gaming-background-blue-and-purple-Graphics-23272406-1.jpg' alt='player-background-img'/>
        <div className="player-profile">
            <img src="https://scontent-bos5-1.xx.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=136b72&_nc_ohc=qpkbNpQcWu8Q7kNvgHwknEx&_nc_ht=scontent-bos5-1.xx&oh=00_AYAKnfkmgPwlezmQ1JGk9jgVd2uN5Ky5P4XbUMnJadfFYg&oe=66EF6ABA" alt="player-profile-image" />
            <div className="player-info">
                <h2>Players Name</h2>
                <div className="experience">
                    <span>Level: 32</span>
                    <p>123/5012</p>
                </div>
            </div>
        </div>
    </div>
  )
}
