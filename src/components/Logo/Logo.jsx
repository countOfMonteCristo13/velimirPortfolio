import React from 'react'
import './logo.css'


const Logo = ({img,img2,desc}) => {
  return (
    <div className='logo-wrapper'>
      <div className='logo-img'>
        <img className='logo-front' src={img} alt={desc} />
        <img className='logo-back' src={img2} alt={desc}/>
      </div>
      <div className='logo-opis'>
        <h3>{desc}</h3>
      </div>
    </div>
  )
}


export default Logo
