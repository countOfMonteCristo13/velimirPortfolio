import React from 'react'
import './navbar.css'

import {BiMenuAltRight} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
            <BiMenuAltRight className='menu-btn'/>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
    </div>
  )
}

export default Navbar
