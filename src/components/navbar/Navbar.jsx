import React, { useRef } from 'react'
import './Navbar.css';
import planets from '../../assets/planets.png'
import spacecraft from '../../assets/spacecraft.png'
import universe from '../../assets/universe.png'
import gallery from '../../assets/gallery.png'
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

    
  return (
    <div className='sticky'>
        <div>
            <div className='navbar_slide'>
                <div className="logo">
                    <span>SpaceOdyssey</span>
                </div>
            <nav className='navbar'>
                <ul>
                    <a href="#"><img src={planets} alt="" /> <li>Exploration</li></a>
                    <a href="#"><img src={spacecraft} alt="" /> <li>Spacecrafts</li></a>
                    <a href="#"><img src={universe} alt="" /> <li>The Universe</li></a>
                    <a href="#"><img src={gallery} alt="" /> <li>Gallery</li></a>
                </ul>
            </nav>

            <div className="subscribe">
                <a href=""><span>Subscribe</span></a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
