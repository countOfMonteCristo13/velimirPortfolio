import React from 'react'
import './animations.css'

import bouncy from '../../imgs/bouncy.gif'
import world from '../../imgs/world.gif'
import truck from '../../imgs/truck.gif'

const Animations = () => {
  return (
    <div className='animations-section'>
      <div>
        <p className='big-title'>ANIMATIONS</p>
      </div>
      <div className='animations-wrapper'>
        <div className='animation-wrapper'>
          <img src={bouncy} alt="GIF" />
          <p>Bouncy loading animation</p>
        </div>
        <div className='animation-wrapper'>
          <img src={world} alt="GIF" />
          <p>3D Animation of the Earth in the Space</p>
        </div>
        <div className='animation-wrapper'>
          <img src={truck} alt="GIF" />
          <p>Shipping order animation</p>
        </div>
      </div>
      
    </div>
  )
}

export default Animations
