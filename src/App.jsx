import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Hero, Navbar, Tech, Works, CubeCanvas, Socials } from "./components";
import Experience from './components/Experience';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-heer-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
      </div>
      <Works />
      <div className="relative z-0">
        <Socials />
        <Contact />        
      </div>      
    </div>
    </BrowserRouter>
  );
}

export default App;