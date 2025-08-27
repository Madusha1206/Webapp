import React, { useState } from 'react';  
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);


  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Florentino<i className='fab fa-typo3'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={() => setClick(false)}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={() => setClick(false)}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={() => setClick(false)}>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={() => setClick(false)}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
