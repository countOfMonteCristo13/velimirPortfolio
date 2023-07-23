import React from 'react'
import './logos.css'
import Logo from '../../components/Logo/Logo'

import nargila from '../../imgs/Frame 68.png'
import nargilaColor from '../../imgs/Frame 76.png'
import tasman from '../../imgs/Rectangle 2.png'
import tasmanColor from '../../imgs/Rectangle 3.png'
import gamborini from '../../imgs/Group 27.png'
import gamboriniColor from '../../imgs/Group 26.png'
import donQ from '../../imgs/Frame 70.png'
import donQColor from '../../imgs/Frame 71.png'
import donQ2 from '../../imgs/Frame 69.png'
import donQ2Color from '../../imgs/Frame 74.png'
import storm from '../../imgs/storm.png'
import stormColor from '../../imgs/stormColor.png'

const Logos = () => {
  return (
    <div className='logos-section'>
        <div className='logo-title'>
            <p>LOGO</p>
        </div>
        <div className='logos-wrapper'>
            <Logo img={donQ} img2={donQColor} desc={'Don Quixote Apartments'}/>
            <Logo img={donQ2} img2={donQ2Color} desc={'Don Quixote Apartments'}/>
            <Logo img={nargila} img2={nargilaColor} desc={'Nargila Rent'}/>
            <Logo img={tasman} img2={tasmanColor} desc={'Food ordering App'}/>
            <Logo img={storm} img2={stormColor} desc={'Lamp Store'}/>
            <Logo img={gamborini} img2={gamboriniColor} desc={'Italian Restaurant'}/>
        </div>
    </div>
  )
}

export default Logos
