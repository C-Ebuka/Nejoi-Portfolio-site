import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import About from './components/Sidebar/About';
import Shopy from './components/Sidebar/Shopy';

function App() {
  return (
    <BrowserRouter>
     
      <Hero />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Shopy' element={<Shopy />} />
            

      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;


