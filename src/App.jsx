import React from "react";
import "./index.css";
import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import Footer from "./Pages/Footer";
import Events from "./Pages/Events";
import Beauty from "./Pages/Beauty";
import Direction from "./Pages/Direction";
import RanchLife from "./Pages/RanchLife";
import Natural from "./Pages/Natural";

function App() {
  return (
    <div className="bg-bgcolor">
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <RanchLife />
      <Natural />
      <Events />
      <Direction />
      <Beauty />
      <Footer />
    </div>
  );
}

export default App;
