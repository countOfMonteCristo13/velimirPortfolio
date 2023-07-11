import React, { useEffect } from 'react'
import './caseStudies.css'

import laptop from '../../imgs/MacBook Pro 16.png'
import iPhone from '../../imgs/image 1.png'
import kitchen from '../../imgs/iPhone 13.png'

import CaseStudy from '../../components/CaseStudy/CaseStudy'

const CaseStudies = () => {

    const laptopDesc = 'Site dedicated to all types of luxury lamps';
    const laptopTitle = 'Finding many types of lamps with the help of the site';
    const iPhoneDesc = 'Try for a fast and more efficient way of ordering hookah';
    const iPhoneTitle = 'Increasing Nargila Rental Business through a Mobile App';
    const kitchenDesc = 'Try for a fast and more efficient way of finding a food recipes and learn to cook';
    const kitchenTitle = 'Empowering Home Cooks through a Recipe Application';


    useEffect(() =>{
      const studije = document.querySelectorAll('.case-study');
      const studijeArray = Array.from(studije);

      const handleScroll = () =>{

        studijeArray.map((studija) =>{
          const kotaStudije = studija.getBoundingClientRect();
          if(kotaStudije.top < window.innerHeight - 100 && kotaStudije.bottom >= 0){
            studija.classList.add('animated');
          }else{
            studija.classList.remove('animated');
          }
          return 1;
        })
  
      }

      handleScroll();
      
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      };

    })




  return (
    <div className='case-studies' id='work'>
      <CaseStudy img={iPhone} title={iPhoneTitle} desc={iPhoneDesc} site={'View Case study'} design={'UI/UX'} link={'https://medium.com/@velimirjocovic/increasing-nargila-rental-business-through-a-mobile-app-45a10ecd5627'}/>
      <CaseStudy img={kitchen} title={kitchenTitle} desc={kitchenDesc} site={'View Case study'} design={'UI/UX'} link={'https://medium.com/@velimirjocovic/empowering-home-cooks-through-a-recipe-application-4c9d226769ba'}/>
      <CaseStudy img={laptop} title={laptopTitle} desc={laptopDesc} site={'View Site'} design={'Web Design'}/>
    </div>
  )
}

export default CaseStudies
