import './App.css';

import Navbar from './containers/Navbar/Navbar';
import Hero from './containers/Hero/Hero';
import CaseStudies from './containers/CaseStudies/CaseStudies';
import Logos from './containers/Logos/Logos';
import Footer from './containers/Footer/Footer';
import Animations from './containers/Animations/Animations';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <h3 className='moving-text'> UI/UX & Web Designer </h3>
        <h3 className='moving-text'> UI/UX & Web Designer </h3>
        <h3 className='moving-text'> UI/UX & Web Designer </h3>
        <h3 className='moving-text'> UI/UX & Web Designer </h3>
        <h3 className='moving-text'> UI/UX & Web Designer </h3>
        <h3 className='moving-text'> UI/UX & Web Designer </h3>
        </div>
      <div className='portfolio-page'>
        <Navbar/>
        <Hero/>
        <CaseStudies/>
        <Animations/>
        <Logos/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
