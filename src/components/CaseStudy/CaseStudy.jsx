import React from 'react'
import './caseStudy.css'


const CaseStudy = ({img,title,desc,site,design}) => {


  return (
    <div className='case-study'>
        <div className='case-study-img'>
            <img src={img} alt="laptop" />
        </div>
        <div className='case-study-opis'>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
        <div className='case-study-btn'>
             <p>{design}</p>
             <button className='custom__button'>{site}</button>
        </div>
      
    </div>
  )
}

export default CaseStudy
