import React from 'react';
import './About.css';
import Logo from './AdditionalComponents/linkedinpic.png';

const About = () => {
  return (
    <div className="aboutText">
      <h3>About Me and About the App</h3>
      First off all, I'd like to thank you for visiting my App. <br></br>
      My interest in programming and the stock market has led me to building this app.<br></br>
      As a computer science student, I'm always looking for ways to expand my knowledge, and I decided to learn React JS.<br></br>
      Both my interests and my new knowledge has led me to creating this App, and I really enjoyed building it.<br></br><br></br>
      The app was built with React JS entirely.<br></br>
      <br></br>
      In the creation of this App I used: React Hooks, React Portals, React Router, Axios for fetching information from APIs (Both finnhub.io and ALPHA VANTAGE), ChartJS, and more... <br></br>
      <br></br>
      If you'd like to contact me, here is a link to my Linkedin page:<br></br>
      <a href="https://www.linkedin.com/in/amit-matalon/" target="_blank"><img src={Logo} /></a> <br></br>
      For the project's github link:

    </div>
  )
}

export default About;