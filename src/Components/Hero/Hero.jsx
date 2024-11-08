import React from 'react'
    import './Hero.css'
    import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className="hero contanier">
        <div className="hero-text">
            <h1>We ensure better education for better world</h1>
            <p>our cutting edge carriculem is designed to empower students
                with a key knowladge, skill and experiance need to exel in the dynamic field of education
            </p>
            <button className='btn'>Explore more <img src={dark_arrow } alt="" /></button>
        </div>
        
    </div>
  )
}

export default Hero