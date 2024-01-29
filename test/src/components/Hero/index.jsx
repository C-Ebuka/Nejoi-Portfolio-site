// Hero.js

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './HeroElements.css'; // Import your CSS file

import yourImage from './logo/logo.jpg'; 
import ImgBg1 from '../../images/pizza-1.jpg';
import ImgBg2 from '../../images/pizza-2.jpg';
import ImgBg3 from '../../images/pizza-3.jpg';
import ImgBg4 from '../../images/pizza-4.jpg';
import ImgBg5 from '../../images/pizza-5.jpg';
import ImgBg6 from '../../images/pizza-6.jpg';
import ImgBg7 from '../../images/pizza-7.jpg';
import ImgBg8 from '../../images/pizza-8.jpg';
import ImgBg9 from '../../images/pizza-9.jpg';
import ImgBg0 from '../../images/pizza-0.jpg';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(ImgBg1);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      switch (currentImage) {
        case ImgBg1:
          setCurrentImage(ImgBg2);
          break;
        case ImgBg2:
          setCurrentImage(ImgBg3);
          break;
        case ImgBg3:
          setCurrentImage(ImgBg4);
          break;
        case ImgBg4:
          setCurrentImage(ImgBg5);
          break;
        case ImgBg5:
          setCurrentImage(ImgBg6);
          break;
        case ImgBg6:
          setCurrentImage(ImgBg7);
          break;
        case ImgBg7:
          setCurrentImage(ImgBg8);
           break;
        case ImgBg8:
          setCurrentImage(ImgBg9);
          break;
        case ImgBg9:
          setCurrentImage(ImgBg0);
          break;
        case ImgBg0:
          setCurrentImage(ImgBg1);
          break;
        default:
          setCurrentImage(ImgBg1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="HeroContainer" style={{ backgroundImage: `url(${currentImage})` }}>
      <Navbar toggle={toggle} />
      {isOpen && <Sidebar isOpen={isOpen} toggle={toggle} />}
      
      <div className="HeroContent">
        <div className="HeroItems">
          <div className="HeroH1">Welcome to Nejoi</div>
          <div className="HeroP">Your text goes here</div>
          <div className="HeroBtn">Place Order</div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '90px' }}>
          <img src={yourImage} alt="Description" style={{ width: '70%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
