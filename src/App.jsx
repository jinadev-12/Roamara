import React from 'react'
import './index.css'
import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import Footer from './Pages/Footer';
import Events from './Pages/Events';
import Beauty from './Pages/Beauty';
import AboutUs from './Pages/AboutUs';
import Direction from './Pages/Direction';
import RanchLife from './Pages/RanchLife';





function App() {
  return (
    <div className="bg-bgcolor">
      <div className='relative'>
      <Navbar />
      <Hero />
      </div>

      <RanchLife />
      <AboutUs/>
      <Events />
      <Direction />
      <Beauty/>
      <Footer />
    </div>
  );
}

export default App
