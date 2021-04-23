import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <div className="homePageText">
        <h3>Welcome to my investment app!</h3>
        <p>In this app you'll be able to search for your favourite stock quotes, look at historic prices from various time spans and use the Compound Interest calculator in order to calculate expected return from an investment. </p>
        I built this app for fun, feel free to use it anytime you want. <br></br>
        For further reading, github links and more, enter the about section of the website.<br></br>
        <br></br>In order to navigate around, you can either use the links on the top of each page, or use the following buttons:<br></br>
        <Link to="/about">
          <button>About Page</button>
        </Link>
        <Link to="/stocks">
          <button>Stocks Page</button>
        </Link>
        <Link to="/CI">
          <button>CI Calculator Page</button>
        </Link>
        <br></br> 
      </div>
    </div>
  )
}

export default Homepage;