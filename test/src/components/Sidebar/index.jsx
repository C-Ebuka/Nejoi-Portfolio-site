
import React from 'react';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './SidebarElements.css';

const Sidebar = ({ isOpen, toggle }) => {

  const handleIconClick = () => {
    toggle(); // Toggle the sidebar
  };

  return (
    <div className={`SidebarContainer ${isOpen ? 'open' : ''}`} onClick={toggle}>
    
    <div className='Icon' onClick={handleIconClick}  >
            <IoClose />
          </div>
          <ul className='SidebarMenu'>
            <li><Link to='/About'>About us</Link></li>
            <li><Link to='/Shopy'>See more</Link></li>
            <li><Link to='/'>Home</Link></li>
          </ul>
          <div className='SideBtnWrap'>
            <div className='SidebarRoute'><Link to='/Shop'>Order Now</Link></div>
          </div>
        </div>
  );
};

export default Sidebar;
