import './App.css';

import Navbar from './containers/Navbar/Navbar';
import Hero from './containers/Hero/Hero';
import CaseStudies from './containers/CaseStudies/CaseStudies';
import Logos from './containers/Logos/Logos';
import Footer from './containers/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <h3>Sta ima gospodjo</h3>
      </div>
      <div className='portfolio-page'>
        <Navbar/>
        <Hero/>
        <CaseStudies/>
        <Logos/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
