import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src= {about_img} alt=""  className='about-img'/>
            <img src= {play_icon} alt=""  className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
           <h2>Nurturing Tomorrow Leader's Today</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae inventore officia, 
            quidem pariatur delectus quos praesentium. Molestias ab explicabo ipsam! Officiis enim officia 
            cupiditate possimus nobis unde perferendis est quas.
           </p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae inventore officia, 
            quidem pariatur delectus quos praesentium. Molestias ab explicabo ipsam! Officiis enim officia 
            cupiditate possimus nobis unde perferendis est quas.
          </p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae inventore officia, 
            quidem pariatur delectus quos praesentium. Molestias ab explicabo ipsam! Officiis enim officia 
            cupiditate possimus nobis unde perferendis est quas.
          </p>
        </div>
    </div>
  )
}

export default About