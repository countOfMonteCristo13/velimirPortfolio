import React, { useState } from 'react'
import './navbar.css'

import {BiMenuAltRight} from 'react-icons/bi'

const Navbar = () => {

  const [toggleMenu,setToggleMenu] = useState(false);

  const closeWindow = () =>{
    if(window.innerWidth > 767){
    setToggleMenu(false);
    }
  }

  window.addEventListener('resize',closeWindow);

  const toggleMenuButton = () => {
    setToggleMenu(!toggleMenu);
  }


  return (
    <div className='navbar-wrapper'>
            <BiMenuAltRight className='menu-btn' onClick={() => toggleMenuButton()}/>
            <a className='navbar-link' href="#work">Work</a>
            <a className='navbar-link' href="#about">About</a>
            <a className='navbar-link' href="#contact">Contact</a>
            {
              toggleMenu && 
              <div className='navbar-menu slide-bottom' onClick={() => setToggleMenu(false)}>
                <a href="#work">Work</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            }
    </div>
  )
}

export default Navbar
