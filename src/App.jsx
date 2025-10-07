import React from 'react'
import './index.css'
import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import Footer from './Pages/Footer';
import Events from './Pages/Events';
import Beauty from './Pages/Beauty';
import AboutUs from './Pages/AboutUs';




function App() {
  return (
    <div className="bg-bgcolor">
      <Navbar />
      <Hero />
      {/* section final */}
      <AboutUs/>
      <Events />
      <Beauty/>
      <Footer />
    </div>
  );
}

export default App
