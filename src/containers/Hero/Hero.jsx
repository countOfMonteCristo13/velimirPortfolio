import React, { useEffect } from 'react'
import './hero.css'

import velimir from '../../imgs/AirBrush_20230703192800-removebg-preview 1.png'




const Hero = () => {

    useEffect(() => {
        const designer = document.querySelector('.hero-designer');
        const velimir = document.querySelector('.hero-title');

        setTimeout(() => {
            velimir.classList.add('slide-top');
            velimir.classList.remove('hide-opacity');
        },300)

        setTimeout(() =>{
            designer.classList.remove('hide-opacity');
        },1000);


    })


  return (
    <div className='hero-section'>
        <div className='hero-section-wrapper'>
            <div className='hero-opis-wrapper'>
                <div className='hero-opis'>
                    <h3 className='hero-title hide-opacity'>Hi, my name is Velimir.</h3>
                    <h2 className='hero-designer hide-opacity'>I'm a Web & Mobile UI/UX Designer / Logo Designer</h2>
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
