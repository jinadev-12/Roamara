import React from 'react'
import './index.css'
import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import Footer from './Pages/Footer';
import Events from './Pages/Events';




function App() {
  return (
    <div className="bg-bgcolor">
      <Navbar />
      <Hero />
      <Footer />
      <Events/>
    </div>
  );
}

export default App
