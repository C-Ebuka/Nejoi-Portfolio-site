import React from 'react';
import './AboutElements.css';
import yourImage from '../Hero/logo/logo.jpg'; 

const AboutUs = () => {
  return (
    <div className='AboutUsContainer'>
      <div className='AboutUsContent'>
        <div className='AboutUsTitle'>About Us</div>
        <div className='AboutUsDescription'>
        <img src={yourImage} alt="Description" style={{ width: '20%', height: 'auto' }} />
          Welcome to our online store! We are passionate about providing quality products and an excellent shopping experience for our customers.
        </div>
        <div className='AboutUsVision'>
          Our vision is to become the leading online retailer by offering a wide range of high-quality products and exceptional customer service.
        </div>
        <div className='MDContent'>
          <div className='MDTitle'>Our Team</div>
          <div className='MDDescription'>
            Meet our dedicated team of professionals who work tirelessly to bring you the best shopping experience.
          </div>
        </div>
      </div>
    </div>
  );
};


export default AboutUs;
