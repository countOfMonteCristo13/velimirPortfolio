import React from 'react'
import './hero.css'

import velimir from '../../imgs/AirBrush_20230703192800-removebg-preview 1.png'

const Hero = () => {
  return (
    <div className='hero-section'>
        <div className='hero-section-wrapper'>
            <div className='hero-opis-wrapper'>
                <div className='hero-opis'>
                    <h3>Hi, my name is Velimir.</h3>
                    <h2>I'm a Web & Mobile UI/UX Designer / Logo Designer</h2>
                </div>

                <div className='hero-uiux'>
                    <p>UI/UX</p>
                </div>
            </div>

            <div className='hero-img'>
                <img src={velimir} alt="velimir" />
            </div>
        </div>
      
    </div>
  )
}

export default Hero
