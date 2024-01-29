import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import './FooterElements.css';

const Footer = () => {
  return (
    <div className = 'FooterContainer'>
      <div className = 'FooterWrap'>
        <div className = 'SocialMedia'>
          <div className = 'SocialMediaWrap'>
            <div className = 'SocialLogo' to='/'>Connect with us on:</div>
            <div className = 'SocialIcons'>
              <div className = 'SocialIconLink' href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </div>
              <div className = 'SocialIconLink' href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </div>
              <div className = 'SocialIconLink' href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </div>
              <div className = 'SocialIconLink'
                href='//www.twitter.com/briandesignz'
                target='_blank'
                aria-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </div>
              <div className = 'SocialIconLink' href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
