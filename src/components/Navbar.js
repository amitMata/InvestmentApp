import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import CI from './CI';
import Stocks from './Stocks';

const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <div className="links">
          <Link to='/'>
            Home
          </Link>
          </div>
            <Link to='/about'>
            About
          </Link>
          <Link to='/stocks'>
            Stocks
          </Link>
          <Link to='/CI'>
            CI Calculator
          </Link>
        </div>
    </nav>
  )
}

export default Navbar;