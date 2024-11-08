import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
    const[sticky, setSticky] = useState(false)

//     useEffect(()=>{
// window.addEventListener('scroll', ()=>{
//     window.scrollY > 50 ? setSticky(true) : setSticky(false)
// }, )
//     },[])

//       const[mobile, setMobile] = useState(true)

//     const toggleMenu = () =>{
//         mobile ? setMobile(false) : setMobile(true)
//     }
  return (

    <nav className={`contanier ${sticky ? "dark-nav" : "" }`}>
        <img src={logo} alt=""  className="logo"/>
        <ul className={ mobile ? ' ' : '.hide-mobile-menu'}>
            <li> Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonial</li>
            <li><button className="btn">Contact us</button></li>
        </ul>
        <img src= {menu_icon} alt=""  className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar