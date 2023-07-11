import React from 'react'
import './footer.css'

import email from '../../imgs/email.png'
import location from '../../imgs/location.png'
import medium from '../../imgs/Vector.png'
import mediumColor from '../../imgs/Vector-2.png'
import linkedin from '../../imgs/Vector-1.png'
import linkedinColor from '../../imgs/Vector-3.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='about' id='about'>
        <h2>About me</h2>
        <p>Hi my name is Velimir and i'm a junior UI/UX and Web Designer from Novi Sad, Serbia. My passion is creativity and the need to create visually appealing and functional designs. Through working on different projects and gaining experience, I will gradually develop my skills, improve my portfolio and progress in my career, becoming an increasingly experienced and confident designer.</p>
      </div>
      <div className='contact' id='contact'>
        <h2>Contact</h2>
        <div className='contact-info'>
            <div className='contact-info-wrapper'>
                <h3>velimirjocovic@gmail.com</h3>
                <div className='contact-info-img'>
                    <img src={email} alt="email" />
                </div>
            </div>
            <div className='contact-info-wrapper'>
                <h3>Novi Sad, Srbija</h3>
                <div className='contact-info-img'>
                    <img src={location} alt="location" />
                </div>
            </div>
            <div className='contact-info-wrapper'>
              <a className='contact-info-link-wrapper' target='_blank' rel='noreferrer noopener' href="https://medium.com/@velimirjocovic">
                <h3>Velimir Jocovic</h3>
                <div className='contact-info-img'>
                      <img className='img-front' src={medium} alt="medium" />
                      <img className='img-back' src={mediumColor} alt="medium" />
                </div>
              </a>
            </div>
            <div className='contact-info-wrapper'>
              <a className='contact-info-link-wrapper' target='_blank' rel='noreferrer noopener' href="https://www.linkedin.com/in/velimir-jocovic-7952a7282/">
                <h3>Velimir Jocovic</h3>
                <div className='contact-info-img'>
                      <img className='img-front' src={linkedin} alt="linkedin" />
                      <img className='img-back' src={linkedinColor} alt="linkedin" />
                </div>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
