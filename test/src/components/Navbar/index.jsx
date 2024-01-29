// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarElements.css';

const Navbar = ({ toggle }) => {
  return (
    <>
      <div className="Nav">
        <div className="NavLink">
          <Link to='/'>--------</Link>
        </div>
        <div className="NavIcon" onClick={toggle} style={{ cursor: 'pointer' }}>
          <p>Menu</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
