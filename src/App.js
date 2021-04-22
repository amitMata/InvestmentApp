import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Stocks from './components/Stocks';
import CI from './components/CI';
import Homepage from './components/Homepage';
import About from './components/About'
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar/>
          <Route path="/" exact component={Homepage}/>
          <Route path="/stocks" component={Stocks}/>
          <Route path="/about" component={About}/>
          <Route path="/CI" component={CI}/>
        </div>
      </Router>
    </div>
  );
  
}

export default App;
